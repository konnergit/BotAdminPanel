<template>
    <div class="row data-row-entry">
        <entry-field v-for="(key, value) in fields" :keyModel="key" :valueModel="value"></entry-field>
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
      default: {
          catName: "321",
          subcatName: "222",
          instrText: "",
          instrLink: "",
          keywords: "",
        }
    }
   },
  methods: {
    // updateValue(event) {
    //         this.$emit('update:fields', event.target.value);
    //     }
    test() {
      console.log(this.fields);
    }
  },
  computed: {
    fieldsC() {
      if (!this.fields) {
        //return this.$store.state.roleStrc;
        return {
          catName: "",
          subcatName: "",
          instrText: "",
          instrLink: "",
          keywords: "",
        }
      }
      return this.fields;
    }
  },
  created() {
    //console.log(this.fieldsC)
  }
}

</script>