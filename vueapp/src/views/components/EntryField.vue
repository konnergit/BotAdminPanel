<template>
   <div :class="isSmol ? 'col-md-2' : 'col-md-3'">
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
        },
        isSmol: {
            type: Boolean,
            default: false
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