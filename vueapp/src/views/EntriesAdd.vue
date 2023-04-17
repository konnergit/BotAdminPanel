<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-12">
          <form class="card" @submit.prevent="">
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
              <ul id="data-body">
                  <entry-item v-for="element in elements" :is="element.type" :key="element.id" :isAddFields="true"></entry-item>
                  <argon-button color="warning" size="sm" class="btn mb-0 bg-gradient-warning btn-lg mt-4" style="max-width: 300px; margin-right: 2rem;" @click="addField"
                  >Добавить строку</argon-button
                >
                <argon-button color="dark" size="sm" class="btn mb-0 btn-lg mt-4" style="max-width: 300px;" type="submit" @click="commitChanges"
                  >Применить изменения</argon-button
                >
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ArgonButton from "@/components/ArgonButton.vue";
import EntryItem from "./components/EntryItem.vue";
import UserService from "../services/user.service"
//import { getTransitionRawChildren } from "vue";
//import UserService from '@/services/user.service';

//const body = document.getElementsByTagName("body")[0];

export default {
  name: "entries-add",
  data() {
    return {
      elements: [],
      messageE: "",
      messageS: ""
    };
  },
  computed: {
    getStrc() {
      return this.$store.state.roleStrc;
    },
  },
  methods: {
    addField() {
      this.elements.push({type: 'entry-field'});
    },
    commitChanges() {
      let serviceName = this.$store.state.roleName;
      let pageData = [];
      
      document.querySelectorAll(".data-row-entry").forEach(function(node) {
        let field = {};
        for (const child of node.children) {
            let entryKey = child.children[0].textContent; 
            let entryValue = child.children[1].value; 
            field[entryKey] = entryValue;
          }
        pageData = { serviceName, Fields:field };
      });

      UserService.addServiceData(pageData)
      .then(
        () => {
          this.messageS = "Операция добавления записей прошла успешно!";
          setTimeout(() => this.messageS = "", 2500);
        })
      .catch(error => {
        if (error.response) {
          this.messageE = "Произошла ошибка с кодом " + error.response.status;
          console.log(error.response.data);
          setTimeout(() => this.messageE = "", 2500);
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
  },
  components: { ArgonButton, EntryItem },
  created() {
    //UserService.getServiceFields(serviceName)
    //UserService.addServiceData(serviceName)
  },
  mounted() {
    setNavPills();
    setTooltip();
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (!vm.getStrc) vm.$router.push('/botlist');
    })
  },
  beforeMount() {
    this.$store.state.imageLayout = "profile-overview";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = false;
    //this.$store.state.showSidenav = false;
    this.$store.state.hideConfigButton = true;
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    //this.$store.state.showSidenav = true;
    this.$store.state.showFooter = false;
    this.$store.state.hideConfigButton = false;
  }
};
</script>