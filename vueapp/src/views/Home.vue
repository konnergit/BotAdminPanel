<template>
  <default-dashboard v-if="isLoggedIn"/>
</template>

<script>
import DefaultDashboard from "@/views/dashboards/Default.vue";

export default {
  name: "Home",
  components: {
    DefaultDashboard,
  }
};
</script>
