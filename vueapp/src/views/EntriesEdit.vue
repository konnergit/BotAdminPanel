<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-md-12">
        <form class="card" @submit.prevent="">
          <div class="card-body">
            <ul id="data-body">
                <entry-item v-for="item in entryList" :key="item.catName" :fields="item"></entry-item>
            </ul>
            <argon-button color="success" size="sm" class="ms-auto" @click="sendChanges"
                >Применить изменения</argon-button>
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
    ]
    };
  },
  computed: {
    filteredData() {
      return this.$store.state.filteredData;
    }
  },
  components: { ArgonButton, EntryItem },
  methods: {
    sendChanges() {

    }
  },

  mounted() {
    setNavPills();
    setTooltip();
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
