<template>
    <div class="py-4 container-fluid">
        <form class="card" @submit.prevent="">
            <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Редактирование пользователя</p>
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
              <div class="row mt-4">
                <div class="col-md-4">
                    <span class="form-control-label"> Роли пользователя</span>
                    <div v-for="(item, index) in allTechRoles" :key="index" class="form-check" style="position: relative; text-align: left; margin-top: 1rem; ">
                        <input class="form-check-input techrole-checkbox" type="checkbox" />
                        <label class="custom-control-label" style="margin-bottom: 0px;">{{ item }}</label>
                    </div> 
                </div>
              </div>
              <argon-button color="dark" size="md" class="ms-auto mt-4" @click="sendChanges"
                  >Редактировать пользователя</argon-button>
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
  name: "useredit",
  data() {
    return {
      showMenu: false,
      username: null,
      messageE: "",
      messageS: "",
      allTechRoles: ['Operbot', 'Wifi', 'SomeOtherBot', 'AnotherOne'],
      allRoles: [],
    };
  },
  computed: {

  },
  components: { ArgonButton },
  methods: {
    sendChanges() {
        if (this.username) {
          let techRoles = [];
          document.querySelectorAll(".techrole-checkbox").forEach((node) => {
            if (node.checked) {
              techRoles.push(node.nextSibling.textContent);
            }
          });

          userService.editUser({ Name:this.username, TechRoles:techRoles } )
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
            this.messageE = "Заполните имя пользователя!"
            setTimeout(() => this.messageE = "", 2000);
        }
    }
  },
  created() {
    userService.getAllTechRoles()
    // .then(
    // (response) => {
    //     this.roles = response.data;
    // })
    .catch(error => {
    if (error.response) {
        this.messageE = "Произошла ошибка в запросе списка ботов с кодом " + error.response.status;
        console.log(error.response.data);
    } else if (error.request) {
        this.messageE = "Произошла ошибка в запросе списка ботов:" + error.request;
        console.log(error.request);
    } else {
        console.log('Error', error.message);
        this.messageE = "Произошла ошибка в запросе списка ботов:" + error.message;
    }
    setTimeout(() => this.messageE = "", 2500);
    });
  },
};
</script>