<template>
    <div class="py-4 container-fluid">
      <div class=" row">
        <div class="col-12">
          <h2>Выберите, что требуется сделать с базой знаний:</h2>
          <div class=" row py-4">
          <div class="col-3">
            <argon-button color="success" size="lg" class="ms-auto" @click="addEntries"
                  >Добавить запись</argon-button
                >
          </div>
          <div class="col-3">
            <argon-button color="info" size="lg" class="ms-auto" @click="editEntries"
                  >Редактировать записи</argon-button
                >
          </div>
          <!-- <div class="col-3">
            <argon-button color="danger" size="lg" class="ms-auto" @click="deleteEntries"
                  >Удалить запись</argon-button
                >
          </div> -->
        </div>
        </div>
      </div>
    </div>
  </template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "botactions",
  components: { ArgonButton },
  computed: {
    getRole() { return this.$store.state.roleSelected; },
    getStrc() { return this.$store.state.roleStrc; },
  },
  created() {
    //console.log(this.getStrc);
    if (this.getRole == null) {
      this.$router.push('/botlist');
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      //if (!vm.getStrc) vm.$router.push('/botlist');
      //console.log(this.filterObj);
    })
  },
  methods: {
    addEntries() {
      this.$router.push('entriesadd');
    },
    editEntries() {
      this.$router.push('/entriesfilter');
    },
  }
}

</script>