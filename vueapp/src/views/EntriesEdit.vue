<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-md-12">
        <form class="card" @submit.prevent="">
          <div class="card-body">
            <ul id="data-body">
                <entry-item v-for="item in pageData" :key="item.id" :fields="item"></entry-item>
            </ul>
            <argon-button color="success" size="sm" class="ms-auto" @click="sendChanges"
                >Применить изменения</argon-button>
          </div>
          <argon-pagination>
            <argon-pagination-item prev @click="goToPage(selected - 1)"/>
            <argon-pagination-item v-for="index in totalPages" :label="index" :active="(index === selected)?true:false" @click="goToPage(index)"/>
            <!-- :active="(true)?true:false" -->
            <argon-pagination-item next @click="goToPage(selected + 1)"/>
          </argon-pagination>
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
import ArgonPagination from "@/components/ArgonPagination.vue";
import ArgonPaginationItem from "@/components/ArgonPaginationItem.vue";
import UserService from "../services/user.service";

//const body = document.getElementsByTagName("body")[0];

export default {
  name: "entries",
  data() {
    return {
      entryList: [{
        catName: "Категория",
        subcatName: "Субкатегория",
        instrText: "Текст инструкции",
        instrLink: "Ссылка на инструкцию",
        keywords: "Ключевые слова",
      },
      {
        catName: "Категория",
        subcatName: "Субкатегория",
        instrText: "Текст инструкции",
        instrLink: "Ссылка на инструкцию",
        keywords: "Ключевые слова",
      },{
        catName: "Категория",
        subcatName: "Субкатегория",
        instrText: "Текст инструкции",
        instrLink: "Ссылка на инструкцию",
        keywords: "Ключевые слова",
      },{
        catName: "Категория",
        subcatName: "Субкатегория",
        instrText: "Текст инструкции",
        instrLink: "Ссылка на инструкцию",
        keywords: "Ключевые слова",
      },{
        catName: "Категория",
        subcatName: "Субкатегория",
        instrText: "Текст инструкции",
        instrLink: "Ссылка на инструкцию",
        keywords: "Ключевые слова",
      },{
        catName: "Категория",
        subcatName: "Субкатегория",
        instrText: "Текст инструкции",
        instrLink: "Ссылка на инструкцию",
        keywords: "Ключевые слова",
      },{
        catName: "Категория",
        subcatName: "Субкатегория",
        instrText: "Текст инструкции",
        instrLink: "Ссылка на инструкцию",
        keywords: "Ключевые слова",
      },{
        catName: "Категория",
        subcatName: "Субкатегория",
        instrText: "Текст инструкции",
        instrLink: "Ссылка на инструкцию",
        keywords: "Ключевые слова",
      },{
        catName: "Категория",
        subcatName: "Субкатегория",
        instrText: "Текст инструкции",
        instrLink: "Ссылка на инструкцию",
        keywords: "Ключевые слова",
      },{
        catName: "Категория",
        subcatName: "Субкатегория",
        instrText: "Текст инструкции",
        instrLink: "Ссылка на инструкцию",
        keywords: "Ключевые слова",
      },{
        catName: "Категория",
        subcatName: "Субкатегория",
        instrText: "Текст инструкции",
        instrLink: "Ссылка на инструкцию",
        keywords: "Ключевые слова",
      },{
        catName: "Категория",
        subcatName: "Субкатегория",
        instrText: "Текст инструкции",
        instrLink: "Ссылка на инструкцию",
        keywords: "Ключевые слова",
      },
    ],
    selected: 1,
    pageSize: 20,
    pageData: null,
    };
  },
  computed: {
    filterObj() {
      return this.$store.state.filterObj;
    },
    totalPages() {
      return this.$store.state.totalPages;
    }
  },
  components: { ArgonButton, EntryItem, ArgonPagination, ArgonPaginationItem, UserService },
  methods: {
    sendChanges() {

    },
    goToPage(index) {
      if(index > 0 && index <= this.totalPages)
      {
        let pageSize = this.pageSize;
        console.log(this.filterObj);

        UserService.getServiceData(this.filterObj, pageSize, index)
        .then(response => {
          if (response.data)
          {
            this.pageData = response.data.Fields;
            this.pageCount = response.data.TotalCount;
            this.selected = index;
          }
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
      }
    },
  },

  mounted() {
    setNavPills();
    setTooltip();
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (!vm.filterObj) vm.$router.push('/entriesfilter');
      //console.log(this.filterObj);
    })
  },
  created() {
    this.goToPage(1);
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
