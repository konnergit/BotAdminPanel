<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="p-3 pb-0 card-header">
                <h6 class="mb-0">Выберите бота</h6>
              </div>
              <div class="p-3 card-body">
                <ul v-for="(value, key, index) in getUserRoles" class="list-group" style="cursor: pointer;">
                  <bot-info-item
                  :title="value"
                  :titleDesc="'Описание бота'"
                  @click="selectBot(index)"
                  ></bot-info-item>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BotInfoItem from "./components/BotInfoItem.vue";

//import US from "@/assets/img/icons/flags/US.png";

export default {
  name: "botlist",
  data() {
    return {
      botinfo: [{
        title: "Бот №1",
        titleDesc: "Какая-то информация о чат-боте"
      },]
    };
  },
  computed: {
    getUserRoles() { return this.$store.state.auth.roles; }
  },
  components: {
    BotInfoItem
  },
  methods: {
    selectBot(index) {
      this.$store.dispatch("chooseRole", index)
      console.log(index);
      this.$router.push('/botactions');
    }
  },
  created() {
    //console.log(this.getUserRoles);


    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = false;
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
  },
};
</script>
