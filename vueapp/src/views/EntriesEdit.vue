<template>
  <div class="py-4 container-fluid" style="">
    <form class="card" @submit.prevent="">
    <div class="row">
        <div class="col-md-12">
            <div class="card-body">
              <ul>
              <h5>Фильтры для базы знаний</h5>
            <entry-item :isEmbeddedFilter="true" :isSmol="true"></entry-item>
                                <argon-button
                                              @click="filterEntries"
                                              class="mt-4"
                                              variant="gradient"
                                              color="warning"
                                              size="sm">Отфильтровать записи</argon-button>
              </ul>
            </div>
        </div>
    </div>
  </form>
  </div>
  <div class="py-1 container-fluid">
      <form class="card" @submit.prevent="">
        <div class="row">
        <div class="col-md-12">
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
            <Transition>
              <div v-show="messageE2" class="alert alert-danger" role="alert">
                  {{ messageE2 }}
              </div>
            </Transition>
            <Transition>
              <div v-show="messageS2" class="alert alert-success" role="alert">
                  {{ messageS2 }}
              </div>
            </Transition>
              <ul id="data-body">
                <h5 style="padding-bottom: 1rem;">Редактирование записей</h5>
                  <entry-item v-for="item in pageData" :key="item.Fields.id" :fields="item.Fields" :checkboxed="true"></entry-item>
                  <argon-button color="dark" size="sm" class="ms-auto" @click="sendChanges"
                  >Отправить изменения</argon-button>
              </ul>
            </div>

            <argon-pagination>
              <argon-pagination-item prev @click="goToPage(selected - 1)"/>
              <!-- <argon-pagination-item v-for="index in totalPages" :key="index" :label="index.toString()" :active="(index === selected)?true:false" @click="goToPage(index)"/> -->
              <argon-pagination-item :key="paginationItem1" :label="paginationItem1.toString()" :active="(paginationItem1 === selected) ? true : false" @click="goToPage(paginationItem1)"/>
              <argon-pagination-item :key="paginationItem2" :label="paginationItem2.toString()" :active="(paginationItem2 === selected) ? true : false" @click="goToPage(paginationItem2)"/>
              <argon-pagination-item :key="paginationItem3" :label="paginationItem3.toString()" :active="(paginationItem3 === selected) ? true : false" @click="goToPage(paginationItem3)"/>
              <argon-pagination-item :key="paginationItem4" :label="paginationItem4.toString()" :active="(paginationItem4 === selected) ? true : false" @click="goToPage(paginationItem4)"/>
              <argon-pagination-item :key="paginationItem5" :label="paginationItem5.toString()" :active="(paginationItem5 === selected) ? true : false" @click="goToPage(paginationItem5)"/>
              <argon-pagination-item next @click="goToPage(selected + 1)"/>
            </argon-pagination>
        </div>
      </div>
      </form>
  </div>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ArgonButton from "@/components/ArgonButton.vue";
import EntryItem from "./components/EntryItem.vue";
import ArgonPagination from "@/components/ArgonPagination.vue";
import ArgonPaginationItem from "@/components/ArgonPaginationItem.vue";
import UserService from "../services/user.service";

//const body = document.getElementsByTagName("body")[0];

export default {
  name: "entries",
  data() {
    return {
    selected: 1,
    pageSize: 20,
    pageData: null,
    messageE: "",
    messageE2: "",
    messageS: "",
    messageS2: ""
    };
  },
  computed: {
    filterObj() {
      return this.$store.state.filterObj;
    },
    totalPages() {
      //return this.$store.state.totalPages;
      return 20;
    },
    roleSelected() {
      return this.$store.state.roleSelected;
    },
    roleName() { return this.$store.state.roleName;},
    roleStrc() {
      return this.$store.state.roleStrc;
    },
    roles() {
      return this.$store.state.auth.roles;
    },
    paginationItem1() {
      if (this.totalPages <= 5) return 1;
      else{

        if (this.totalPages - this.selected >= 2) {
          if (this.selected <= 3) return 1;
          else return this.selected - 2; 
        }
        else if (this.totalPages - this.selected == 1) {
          return this.selected - 3;
        }
        else return this.selected - 4;
      }
    },
    paginationItem2() {
      if (this.totalPages <= 5) return 2;
      else{

        if (this.totalPages - this.selected >= 2) {
          if (this.selected <= 3) return 2;
          else return this.selected - 1; 
        }
        else if (this.totalPages - this.selected == 1) {
          return this.selected - 2;
        }
        else return this.selected - 3;
      }
    },
    paginationItem3() {
      if (this.totalPages <= 5) return 3;
      else{

        if (this.totalPages - this.selected >= 2) {
          if (this.selected <= 3) return 3;
          else return this.selected; 
        }
        else if (this.totalPages - this.selected == 1) {
          return this.selected - 1;
        }
        else return this.selected - 2;
      }
    },
    paginationItem4() {
      if (this.totalPages <= 5) return 4;
      else{

        if (this.totalPages - this.selected >= 2) {
          if (this.selected <= 3) return 4;
          else return this.selected + 1; 
        }
        else if (this.totalPages - this.selected == 1) {
          return this.selected;
        }
        else return this.selected - 1;
      }
    },
    paginationItem5() {
      if (this.totalPages <= 5) return 5;
      else{
        if (this.totalPages - this.selected >= 2) {
          if (this.selected <= 3) return 5;
          else return this.selected + 2; 
        }
        else if (this.totalPages - this.selected == 1) {
          return this.selected + 1;
        }
        else return this.selected;
      }
    },
  },
  components: { ArgonButton, EntryItem, ArgonPagination, ArgonPaginationItem },
  methods: {
    goToPage(index) {
      if(index > 0 && index <= this.totalPages)
      {
        let pageSize = this.pageSize;

        UserService.getServiceData(this.filterObj, pageSize, index)
        .then(response => {
          if (response.data)
          {
            this.pageData = response.data.Fields;
            this.$store.dispatch("setTotalPages", Math.ceil(response.data.TotalCount/this.pageSize));
            this.selected = index;
          }
        })
      }
    },
    sendChanges() {
      let serviceName = this.$store.state.roleName;
      let pageCData = [];
      let deleteObj = [];
      let editObj = [];
      
      document.querySelectorAll(".data-row-entry").forEach(function(node) {
        let field = {};
        let deleteFlag = false;
        if (node.parentElement.parentElement.querySelector(".form-check-input").checked) {
          deleteFlag = true;
        }
        for (const child of node.children) {
            let entryKey = child.children[0].textContent; 
            let entryValue = child.children[1].value; 
            field[entryKey] = entryValue;
        }
        pageCData.push({ field, deleteFlag });
      });

      for (const [key] of Object.entries(pageCData)) {
        if (pageCData[key].deleteFlag) {
          deleteObj.push({ Fields:pageCData[key].field, serviceName });
        }
        else {
          for (const [key2, value2] of Object.entries(pageCData[key].field)) {
            if (value2 != this.pageData[key].Fields[key2]) {
              editObj.push({ Fields:pageCData[key].field, serviceName });
              break;
            }
          }
        }
      } 

      if (deleteObj.length > 0 ) {
        UserService.deleteServiceData(deleteObj)
        .then(
            () => {
              this.messageS2 = "Операция удаления прошла успешно!";
              setTimeout(() => this.messageS2 = "", 2500);
            })
          .catch(error => {
            if (error.response) {
              this.messageE2 = "Произошла ошибка с кодом " + error.response.status;
              console.log(error.response.data);
            } else if (error.request) {
              this.messageE2 = "Произошла ошибка:" + error.request;
              console.log(error.request);
            } else {
              console.log('Error', error.message);
              this.messageE2 = "Произошла ошибка:" + error.message;
            }
            setTimeout(() => this.messageE2 = "", 2500);
          });
      }

      if (editObj.length > 0) {
        UserService.editServiceData(editObj)
        .then(
            () => {
              this.messageS = "Операция редактирования прошла успешно!";
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

      document.querySelectorAll(".delete_checkbox").forEach(function (node) {
        node.checked = false;
      });

      window.scrollTo({
        top: 0,
        left: 0
      })
    },

    filterEntries() {
        let pageData = null;
        let serName = this.roleName;

        document.querySelectorAll(".data-row-filter").forEach(function(node) {
          let field = {};
          for (const child of node.children) {
                let entryKey = child.children[0].textContent; 
                let entryValue = child.children[1].value; 
                field[entryKey] = entryValue;
            }
            pageData = field;
        });

        let data = { ServiceName:serName, Fields:pageData };

        this.$store.dispatch("setFilterObj", data);
        this.goToPage(1);
        //console.log(this.filterObj);

    },
  },

  mounted() {
    setNavPills();
    setTooltip();
  },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     if (vm.roleSelected == null || vm.filterObj == null) vm.$router.push('/botlist');
  //   })
  // },
  created() {
    if (this.$route.params.id >= 0 && this.$route.params.id < this.roles.length) {
      this.$store.dispatch("chooseRole", this.$route.params.id).then(
        () => {
          let fieldObj = {};
          for (const key in this.roleStrc) {
            fieldObj[key] = "";
          }
          this.$store.dispatch("setFilterObj", { ServiceName:this.roleName, Fields:fieldObj });
          this.goToPage(1);
          console.log(this.filterObj)
        });
    }
    else this.$router.push('/botlist');
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
  },
  beforeRouteUpdate(to) {
    if (to.params.id >= 0 && to.params.id < this.roles.length) {
      this.$store.dispatch("chooseRole", to.params.id).then(
        () => {
          let fieldObj = {};
          for (const key in this.roleStrc) {
            fieldObj[key] = "";
          }
          //console.log(fieldObj);
          this.$store.dispatch("setFilterObj", { ServiceName:this.roleName, Fields:fieldObj });
          this.goToPage(1);
        });
    }
    else this.$router.push('/botlist');
  },
};
</script>
