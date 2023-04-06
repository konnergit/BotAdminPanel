<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <ul>
                  <entry-item></entry-item>
              </ul>
              <argon-button color="success" size="sm" class="ms-auto"
                  >Добавить строку</argon-button
                >
              <argon-button color="success" size="sm" class="ms-auto"
                  >Применить изменения</argon-button
                >
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ArgonButton from "@/components/ArgonButton.vue";
import EntryItem from "./components/EntryItem.vue";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "entries-add",
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
      },
      {
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
      },
      {
        catName: "Категория",
        subcatName: "Субкатегория",
        instrText: "Текст инструкции",
        instrLink: "Ссылка на инструкцию",
        keywords: "Ключевые слова",
      },
    ]
    };
  },
  components: { ArgonButton, EntryItem },

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
