<!-- <template>
<div class="dropdown">
    <a href="#" class="btn bg-gradient-dark dropdown-toggle " data-bs-toggle="dropdown" id="navbarDropdownMenuLink2">
        {{ itemSelected }}
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
      <li><a class="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
      <li><a class="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
      <li><a class="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
    </ul>
</div>
</template> -->

<template>
<select class="form-select" aria-label="Default select example">
  <option v-for="(item, key) in itemList" :value="valueSelect ? item : key" :selected="valueSelect ? (item == itemSelected ? true : false) : (key == itemSelected ? true : false)"> {{ valueSelect ? item : key }} </option>
</select>
</template>

<script>

export default {
  name: "my-dropdown",
  props: {
    itemSelected: {
      type: String,
      default: "SectionTitle"
    },
    itemList: {
      type: Object,
      default: {}
    },
    valueSelect: {
      type: Boolean,
      default: false
    } 
  },
};
</script>