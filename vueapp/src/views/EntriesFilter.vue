<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
                  <entry-item></entry-item>
                                <argon-button
                                              @click="filterEntries"
                                              class="mt-4"
                                              variant="gradient"
                                              color="success"
                                              size="lg">Найти записи в базе знаний</argon-button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ArgonButton from "@/components/ArgonButton.vue";
import EntryItem from "./components/EntryItem.vue";

export default {
  name: "entries-filter",
  computed: {
    getSerName() { return this.$store.state.roleName;},
    getSerId() { return this.$store.state.roleSelected;},
  },
  components: { ArgonButton, EntryItem },
  methods: {
    filterEntries() {
        let pageData = null;
        let serName = this.getSerName;

        document.querySelectorAll(".data-row-entry").forEach(function(node) {
          let field = {};
          for (const child of node.children) {
                let entryKey = child.children[0].textContent; 
                let entryValue = child.children[1].value; 
                field[entryKey] = entryValue;
            }
            pageData = field;
        });

        let data = { ServiceName:serName, Fields:pageData };

        this.$store.dispatch("setFilterObj", data);
        this.$router.push('/entriesedit/' + this.getSerId);


    },
  },

  mounted() {
    setNavPills();
    setTooltip();
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.getSerName == null) vm.$router.push('/botlist');
      //console.log(this.filterObj);
    })
  },
  beforeMount() {
    this.$store.state.imageLayout = "profile-overview";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = false;
    //this.$store.state.showSidenav = false;
    this.$store.state.hideConfigButton = true;
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    //this.$store.state.showSidenav = true;
    this.$store.state.showFooter = false;
    this.$store.state.hideConfigButton = false;
  }
};
</script>
