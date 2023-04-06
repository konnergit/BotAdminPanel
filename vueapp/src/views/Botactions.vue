<template>
    <div class="py-4 container-fluid">
      <div class=" row">
        <div class="col-12">
          <h2>Выберите, что требуется сделать с базой знаний:</h2>
          <div class=" row py-4">
          <div class="col-3">
            <argon-button color="success" size="lg" class="ms-auto"
                  >Добавить запись</argon-button
                >
          </div>
          <div class="col-3">
            <argon-button color="info" size="lg" class="ms-auto"
                  >Редактировать запись</argon-button
                >
          </div>
          <div class="col-3">
            <argon-button color="danger" size="lg" class="ms-auto"
                  >Удалить запись</argon-button
                >
          </div>
        </div>
        </div>
      </div>
    </div>
  </template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "botactions",
  components: { ArgonButton },
}

</script>