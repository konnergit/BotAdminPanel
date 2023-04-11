<template>
    <div class="py-4 container-fluid">
      <div class=" row">
        <div class="col-12">
          <h2>Выберите, что требуется сделать с базой знаний:</h2>
          <div class="row py-4" style="display: flex;">
            <Transition>
              <div v-show="messageE" class="alert alert-danger" role="alert">
                  {{ messageE }}
              </div>
            </Transition>
            <Transition>
              <div v-show="messageS" class="alert alert-success" role="alert">
                  {{ messageS }}
              </div>
            </Transition>
            <argon-button color="light" size="lg" class="btn mb-0 btn-gradient-dark btn-lg mt-4" style="max-width: 300px; margin-right: 2rem;" @click="addEntries"
                  >Добавить запись</argon-button
                >
                <argon-button color="success" size="lg" class="btn mb-0 bg-gradient-primary btn-lg  mt-4" style="max-width: 300px; margin-right: 2rem;" data-bs-toggle="modal" data-bs-target="#exampleModal"
                  >Добавить из файла</argon-button
                >
            <argon-button color="info" size="lg" class="btn mb-0 bg-gradient-info btn-lg mt-4" style="max-width: 300px;" @click="editEntries"
                  >Редактировать записи</argon-button
                >
                
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Выберите файл</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input 
                type="file" 
                id="files" 
                style="display: none;"
                accept=".csv" 
                ref="file"
                v-on:change="handleFileUpload()"
                />
                <button class="btn mb-0 bg-gradient-info btn-md" @click="onImport"> Import </button>

                <div v-if="uploaded">
                  <div class="row mt-4">
                    <div class="col-6">
                        <ul>
                          <!-- <li v-for="item in getStrc"></li> -->
                          <my-dropdown v-for="(item, key, index) in getStrc" :itemList="getStrc" :itemSelected="key" class="strc-field" :id="'strc-field-' + index"></my-dropdown> 
                          
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul>
                          <!-- <li v-for="item in getStrc"></li> -->
                          <my-dropdown v-for="(item, index) in csvStrc" :itemList="csvStrc" :itemSelected="item" class="file-field" :id="'file-field-' + index" valueSelect></my-dropdown> 
                          
                        </ul>
                    </div>
                  </div>
                </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button type="button" class="btn bg-gradient-primary" data-bs-dismiss="modal" @click="sendFile">Отправить файл</button>
              </div>
            </div>
          </div>
        </div>
          <!-- <div class="col-3">
            <argon-button color="danger" size="lg" class="ms-auto" @click="deleteEntries"
                  >Удалить запись</argon-button
                >
          </div> -->
        </div>
        </div>
      </div>
    </div>
  </template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
import MyDropdown from "@/components/MyDropdown.vue";
import userService from "@/services/user.service";

export default {
  name: "botactions",
  data() {
    return {
      file: "",
      uploaded: false,
      csvStrc: [],
      messageS: "",
      messageE: ""
    };
  },
  components: { ArgonButton, MyDropdown },
  computed: {
    getRole() { return this.$store.state.roleSelected; },
    getRoleName() {return this.$store.state.roleName; },
    getStrc() { return this.$store.state.roleStrc; },
    getRoles() { return this.$store.state.auth.roles;}
  },
  //beforeRouteEnter (to, from, next) {
    //next(vm => {
      //if (!vm.getStrc) vm.$router.push('/botlist');
      //console.log(this.filterObj);
    //})
  //},
  methods: {
    addEntries() {
      this.$router.push('entriesadd');
    },
    editEntries() {
      this.$router.push('/entriesedit/' + this.getRole);
    },
    onImport() {
        document.getElementById('files').click();
        //console.log('Hey');   
    },
     handleFileUpload() {
      this.file = this.$refs.file.files[0];

      const reader = new FileReader();

      reader.readAsText(this.file);

      reader.onload = () => {
        this.uploaded = true;
        let res = reader.result;
        this.csvStrc = res.substring(0, res.indexOf("\r")).split(';');
        //console.log(this.csvStrc); // contains the file content as a string
      };

      reader.onerror = () => {
        console.log(reader.error);
      };
    },
    sendFile() {
      const reader = new FileReader();
      let RefillIsRequired = true;

      reader.readAsDataURL(this.file);

      reader.onload = () => {
        let compareObj = {};
        let strcFields = [];
        let fileFields = [];
        document.querySelectorAll('.strc-field').forEach(function(node) {
          strcFields.push(node.value);
        });
        document.querySelectorAll('.file-field').forEach(function(node) {
          fileFields.push(node.value);
        });
        strcFields.forEach(function (value, index) {
          compareObj[value] = fileFields[index];
        });

        let dataObj = { FileBody:reader.result, RefillIsRequired, ServiceName:this.getRoleName, Fields:compareObj }
        //console.log(dataObj);

        userService.addServiceDataFile(dataObj)
        .then(
            () => {
              this.messageS = "Операция добавления из файла прошла успешно!";
              setTimeout(() => this.messageS = "", 2500);
            })
          .catch(error => {
            if (error.response) {
              this.messageE = "Произошла ошибка с кодом " + error.response.status;
              console.log(error.response.data);
            } else if (error.request) {
              this.messageE = "Произошла ошибка:" + error.request;
              console.log(error.request);
            } else {
              console.log('Error', error.message);
              this.messageE = "Произошла ошибка:" + error.message;
            }
            setTimeout(() => this.messageE = "", 2500);
          });
         
      };

      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  },
  created() {
    //console.log(this.getRole);
    if (this.getRole == null) {
      this.$router.push('/botlist');
    }
    else if (this.getRoles.length == 1) {
      this.$store.dispatch('chooseRole', 0)
    }
    this.$store.state.showFooter = false;
  },
  beforeUnmount() {
    this.$store.state.showFooter = true;
  },
}

</script>