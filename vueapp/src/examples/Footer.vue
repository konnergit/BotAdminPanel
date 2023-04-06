<template>
  <footer class="py-3 footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="mb-4 col-lg-6 mb-lg-0">
          <div
            class="text-sm text-center copyright text-muted"
            :class="'text-lg-start'"
          >
            ©
            {{ new Date().getFullYear() }}, сделано на
            <i class="fa fa-heart"></i>
            <a
              href="https://www.creative-tim.com"
              class="font-weight-bold"
              target="_blank"
              >Vue 3 и Bootstrap 5</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
