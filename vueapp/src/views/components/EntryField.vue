<template>
   <div class="col-md-2">
        <label for="example-text-input" class="form-control-label">{{ valueModel }}</label>
        <input type="text" class="form-control" :value="keyModel"/>
    </div>
</template>

<script>
export default {
    name: "entry-field",
    props: { 
        keyModel: {
            default: ""
        },
        valueModel: {
            default: ""
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('update:valueModel', event.target.value);
        }
    },
    created() {
        //console.log(this.keyModel + 'and' + this.valueModel);
    }
}
</script>