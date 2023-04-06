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
                <ul v-for="item in botinfo" class="list-group">
                  <bot-info-item 
                  :title="item.title"
                  :titleDesc="item.titleDesc"
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
      },
      {
        title: "Бот №2",
        titleDesc: "Какая-то информация о чат-боте"
      },
      {
        title: "Бот №3",
        titleDesc: "Какая-то информация о чат-боте"
      },
      {
        title: "Бот №4",
        titleDesc: "Какая-то информация о чат-боте"
      }]
    };
  },
  components: {
    BotInfoItem
  },
};
</script>
