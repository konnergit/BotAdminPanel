<template>
    <div class="row">
      <div class="col-md-10">
        <div class="row data-row-entry">
            <entry-field v-for="(key, value) in fieldsC"  v-show="value != 'Id'" :key="key" :keyModel="key" :valueModel="value"></entry-field>
        </div>
      </div>
      <template v-if="checkboxed">
            <div class="col-md-2" style="text-align: center;">
              <div class="row align-items-center" style="height: 100%">
                <div class="form-check" style="position: relative; text-align: left; padding-left: 4em; margin-bottom: 0px;">
                  <input class="form-check-input" type="checkbox" />
                  <label class="custom-control-label" style="margin-bottom: 0px;">Удаление</label>
                </div> 
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