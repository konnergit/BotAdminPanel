<template>
                  <div class="row">
                <div class="col-md-2">
                  <label for="example-text-input" class="form-control-label"
                    >Название раздела</label
                  >
                  <argon-input type="text" :value="catName" />
                </div>
                <div class="col-md-2">
                  <label for="example-text-input" class="form-control-label"
                    >Название подраздела</label
                  >
                  <argon-input type="text" :value="subcatName" />
                </div>
                <div class="col-md-2">
                  <label for="example-text-input" class="form-control-label"
                    >Текст инструкции</label
                  >
                  <input class="form-control" type="text" :value="instrText" />
                </div>
                <div class="col-md-2">
                  <label for="example-text-input" class="form-control-label"
                    >Ссылка на инструкцию</label
                  >
                  <argon-input type="text" :value="instrLink" />
                </div>
                <div class="col-md-2">
                  <label for="example-text-input" class="form-control-label"
                    >Ключевые слова</label
                  >
                  <argon-input type="text" :value="keywords" />
                </div>
              </div>
              <hr class="horizontal dark" />
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";

export default {
  name: "entry-item",
  props: {
    catName: {
      type: String,
    },
    subcatName: {
      type: String,
    },
    instrText: {
      type: String
    },
    instrLink: {
      type: String
    },
    keywords: {
      type: String
    },
  },
  components: { ArgonInput },
}

</script>