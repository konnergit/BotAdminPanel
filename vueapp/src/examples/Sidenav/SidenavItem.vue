<template>
  <router-link :to="url" class="nav-link" v-bind="$attrs" :class="isSubcat ? 'nav-link subcat-nav-link' : 'nav-link'">
    <div
      class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center"
    >
      <slot name="icon"></slot>
    </div>
    <span
      class="nav-link-text"
      :class="this.$store.state.isRTL ? ' me-1' : 'ms-1'"
      >{{ navText }}</span
    >
  </router-link>
</template>
<script>
export default {
  name: "sidenav-item",
  props: {
    url: {
      type: String,
      required: true
    },
    navText: {
      type: String,
      required: true
    },
    isSubcat: {
      type: Boolean,
      required: false
    },
    isPersEdit: {
      type: Boolean,
      required: false
    }
  },
};
</script>