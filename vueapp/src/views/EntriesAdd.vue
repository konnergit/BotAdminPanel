<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-12">
          <form class="card" @submit.prevent="">
            <div class="card-body">
              <ul id="data-body">
                  <entry-item v-for="element in elements" :is="element.type" :key="element.id"></entry-item>
              </ul>
              <argon-button color="success" size="sm" class="ms-auto" @click="addField"
                  >Добавить строку</argon-button
                >
              <argon-button color="success" size="sm" class="ms-auto" type="submit" @click="commitChanges"
                  >Применить изменения</argon-button
                >
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
      elements: []
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
      //console.log(this.elements);
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
        pageData.push(field);
      });

      let data = { serviceName, pageData };
      console.log(data);
      UserService.addServiceData(data);
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
      //console.log(this.filterObj);
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
