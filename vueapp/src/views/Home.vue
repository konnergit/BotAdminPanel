<template>
  <default-dashboard v-if="isLoggedIn"/>
</template>

<script>
import DefaultDashboard from "@/views/dashboards/Default.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    DefaultDashboard,
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>
