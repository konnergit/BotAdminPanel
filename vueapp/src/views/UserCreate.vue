<template>
    <div class="py-4 container-fluid">
        <form class="card" @submit.prevent="">
            <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Создание пользователя</p>
              </div>
            </div>
            <div class="card-body">
                <Transition>
              <div v-show="messageE" class="alert alert-danger" role="alert">
                  {{ messageE }}
              </div>
            </Transition>
            <Transition>
              <div v-show="messageS" class="alert alert-success" role="alert">
                  {{ messageS }}
              </div>
            </Transition>
              <div class="row">
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Имя пользователя</label
                  >
                  <input class="form-control" type="text" v-model="username" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Пароль</label
                  >
                  <input class="form-control" type="text" v-model="password" />
                </div>
              </div>
              <argon-button color="dark" size="md" class="ms-auto mt-4" @click="sendChanges"
                  >Создать пользователя</argon-button>
                </div>
            </div>  
          </div>
        </div>
        </form>
    </div>
  </template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
import userService from "@/services/user.service";

export default {
  name: "usercreate",
  data() {
    return {
      showMenu: false,
      username: null,
      password: null,
      messageE: "",
      messageS: ""
    };
  },
  components: { ArgonButton },
  methods: {
    sendChanges() {
        //alert("Пользователь создан успешно!");
        if (this.username && this.password) {
            userService.createUser({ username:this.username, password:this.password } )
            .then(
            () => {
              this.messageS = "Создание пользователя прошло успешно!";
              setTimeout(() => this.messageS = "", 2500);
            })
          .catch(error => {
            if (error.response) {
              this.messageE = "Произошла ошибка с кодом " + error.response.status;
              console.log(error.response.data);
            } else if (error.request) {
              this.messageE = "Произошла ошибка:" + error.request;
              console.log(error.request);
            } else {
              console.log('Error', error.message);
              this.messageE = "Произошла ошибка:" + error.message;
            }
            setTimeout(() => this.messageE = "", 2500);
          });
        }
        else {
            this.messageE = "Заполните имя пользователя и пароль!"
            setTimeout(() => this.messageE = "", 2000);
        }
    }
  },

  mounted() {
  },
  beforeMount() {
    this.$store.state.imageLayout = "profile-overview";
  },
  beforeUnmount() {
    this.$store.state.imageLayout = "default";
  }
};
</script>