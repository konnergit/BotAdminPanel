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
                <ul v-for="(value, index) in getUserRoles" :key="index" class="list-group">
                  <bot-info-item
                  :title="value"
                  :titleDesc="'Описание бота'"
                  @click="selectBot(index)"
                  style="cursor: pointer;"
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
    getUserRoles() { return this.$store.state.auth.roles; },
    roleSelected() { return this.$store.state.roleSelected;},
    roles() { return this.$store.state.auth.roles;}
  },
  components: {
    BotInfoItem
  },
  methods: {
    selectBot(index) {
      //console.log(index);
      this.$store.dispatch("chooseRole", index).then(
        () => {
          this.$router.push('/botactions');
        }
      )
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      //console.log(vm.roles.length);
      if (vm.roleSelected != null && vm.roles.length == 1) vm.$router.push('/botactions');
    })
  },
  created() {
    //console.log(this.getUserRoles);


    this.$store.state.showFooter = false;
  },
  mounted() {
    //console.log(this.getUserRoles);
  },
  beforeUnmount() {
    this.$store.state.showFooter = true;
  },
};
</script>
