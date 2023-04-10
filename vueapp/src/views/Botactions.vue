<template>
    <div class="py-4 container-fluid">
      <div class=" row">
        <div class="col-12">
          <h2>Выберите, что требуется сделать с базой знаний:</h2>
          <div class="row py-4" style="display: flex;">
            <argon-button color="success" size="lg" class="btn mb-0 bg-gradient-success btn-lg null null mt-4" style="max-width: 300px; margin-right: 2rem;" @click="addEntries"
                  >Добавить запись</argon-button
                >
            <argon-button color="info" size="lg" class="btn mb-0 bg-gradient-info btn-lg null null mt-4" style="max-width: 300px;" @click="editEntries"
                  >Редактировать записи</argon-button
                >
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
    getRoles() { return this.$store.state.auth.roles;}
  },
  //beforeRouteEnter (to, from, next) {
    //next(vm => {
      //if (!vm.getStrc) vm.$router.push('/botlist');
      //console.log(this.filterObj);
    //})
  //},
  methods: {
    addEntries() {
      this.$router.push('entriesadd');
    },
    editEntries() {
      this.$router.push('/entriesfilter');
    },
  },
  created() {
    //console.log(this.getRole);
    if (this.getRole == null) {
      this.$router.push('/botlist');
    }
    else if (this.getRoles.length == 1) {
      this.$store.dispatch('chooseRole', 0)
    }
    this.$store.state.showFooter = false;
  },
  beforeUnmount() {
    this.$store.state.showFooter = true;
  },
}

</script>