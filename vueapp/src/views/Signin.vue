<template>

  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
                <div class="card card-plain">
                    <div class="pb-0 card-header text-start">
                        <h4 class="font-weight-bolder">Sign In</h4>
                        <p class="mb-0">Enter your email and password to sign in</p>
                    </div>
                    <div class="card-body">
                        <Form @submit="handleLogin" :validation-schema="schema">
                            <!--<div class="mb-3">
      <argon-input id="username" placeholder="Username" name="username" size="lg"/>
    </div>
    <div class="mb-3">
      <argon-input id="password" type="password" placeholder="Password" name="password" size="lg"/>
    </div>-->
                            <div class="mb-3">
                                <label for="username">Username</label>
                                <Field 
                                       type="text"
                                       class="form-control"
                                       name="username" />
                                <ErrorMessage name="username" class="error-feedback" />
                            </div>
                            <div class="mb-3">
                                <label for="password">Password</label>
                                <Field 
                                       type="password"
                                       class="form-control"
                                       name="password" />
                                <ErrorMessage name="password" class="error-feedback" />
                            </div>
                            <!--<argon-switch id="rememberMe">Remember me</argon-switch>-->
                            <!--<div class="mb-3" v-if="errorFlag">
        <argon-alert color="danger" dismissible>
            <strong>Wrong login or password!</strong>
        </argon-alert>
    </div>-->

                            <div class="text-center">
                                <argon-button type="submit"
                                              class="mt-4"
                                              variant="gradient"
                                              color="info"
                                              fullWidth
                                              size="lg">Sign in</argon-button>
                            </div>
                            <div class="form-group">
                                <div v-if="message" class="alert alert-danger" role="alert">
                                    {{ message }}
                                </div>
                            </div>
                        </Form>
                </div>
                <!--<div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <a
                      href="javascript:;"
                      class="text-success text-gradient font-weight-bold"
                    >Sign up</a>
                  </p>
                </div>-->
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
          background-size: cover;"
              >
                <span class="mask bg-gradient-danger opacity-5"></span>
                <h
                  class="mt-5 text-white font-weight-bolder position-relative"
                >"Attention is the new currency"</h>
                <p
                  class="text-white position-relative"
                >The more effortless the writing looks, the more effort the writer actually put into the process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
//import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import * as yup from "yup";
//import ArgonAlert from "@/components/ArgonAlert.vue";
    const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  components: {
 //   ArgonInput,
      ArgonButton,
      Form,
      Field,
      ErrorMessage,
 //   ArgonAlert,
  },
  data: () => {
      const schema = yup.object().shape({
          username: yup.string().required("Username is required!"),
          password: yup.string().required("Password is required!"),
      });
    return {
        loading: false,
        message: "",
        schema,
        //errorFlag: false,
    };
   },
  computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            },
            getRoles() {
                return this.$store.state.auth.roles;
            },
        },
  methods: {
      handleLogin(user) {
          this.loading = true;
          this.$store.dispatch("auth/login", user).then(
              () => {
                
                          if (this.$store.state.auth.roles) {
                              console.log(this.getRoles);
                              if (this.getRoles.length == 1) {
                                  this.$router.push("/botactions");
                              }
                          }                    
                          this.$router.push("/botlist");
                  },
                  (error) => {
                      this.loading = false;
                      this.message =
                          (error.response &&
                              error.response.data &&
                              error.response.data.message) ||
                          error.message ||
                          error.toString();
                  }
              );
          },
   },
    created() {
        if (this.loggedIn) {
            if (this.getRoles) {
                if (this.getRoles.length == 1) {
                    this.$router.push('/botactions');
                }
            }
            this.$router.push('/botlist');
        }


    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
      body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
