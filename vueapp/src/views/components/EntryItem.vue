<template>
    <div class="row">
      <div class="col-md-11">
        <div class="row data-row-entry">
            <entry-field v-for="(key, value) in fieldsC" :key="key" :keyModel="key" :valueModel="value"></entry-field>
        </div>
      </div>
      <template v-if="checkboxed">
            <div class="col-md-1" style="text-align: center;">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" />
                  <label class="custom-control-label">Удаление</label>
                </div> 
            </div>
      </template>
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
    },
    checkboxed: {
      default: false
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