<template>
    <div class="p-3 card-body">
      <ul class="list-group">
        <li
          class="mb-2 border-0 list-group-item d-flex justify-content-between border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <div
              class="text-center shadow icon icon-shape icon-sm bg-gradient-dark"
            >
              <i class="ni ni-mobile-button text-white opacity-10"></i>
            </div>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-sm text-dark">{{ title }}</h6>
              <span class="text-xs">
                {{ titleDesc }}
              </span>
            </div>
          </div>
          <div class="d-flex">
            <button
              class="my-auto btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right"
            >
              <i class="ni ni-bold-right" aria-hidden="true"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "bot-info-item",
  props: {
    title: {
      type: String,
      default: "Devices",
    },
    titleDesc: {
      type: String,
      default: "250 in stock",
    },
    icon: {
      type: String
    }
  },
};
</script>
