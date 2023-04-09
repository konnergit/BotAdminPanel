<template>
    <div class="row data-row-entry">
        <entry-field v-for="(key, value) in fieldsC" :keyModel="key" :valueModel="value"></entry-field>
    </div>
              <hr class="horizontal dark" />
</template>

<script>
import EntryField from "./EntryField.vue";

export default {
  name: "entry-item",
        components: { EntryField },
        data() {
          return {
            catName: "nyaa",
            subcatName: "meow",
          }         
        },
  props: { 
    fields: {
      default: null
    }
   },
  methods: {
    // updateValue(event) {
    //         this.$emit('update:fields', event.target.value);
    //     }
    test() {
      console.log(this.fieldsC);
    }
  },
  computed: {
    fieldsC() {
      if (this.fields == null) {
        return this.$store.state.roleStrc;
      }
      else return this.fields;
    }
  },
  created() {
    //console.log(this.fieldsC)
  }
}

</script>