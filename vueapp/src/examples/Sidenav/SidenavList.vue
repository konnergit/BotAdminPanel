<template>
  <div
    class="collapse navbar-collapse w-auto h-auto h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item" v-if="roles != undefined && roles.length != 1">
        <sidenav-item
          url="/botlist"
          :class="getRoute() === 'botlist' ? 'active' : ''"
          :navText="'Список ботов'"
          :isDisabled="true"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/botactions"
          :class="getRoute() === 'Botactions' ? 'active' : ''"
          :navText="'Управление записями'"
        >
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/UserCreate"
          :class="getRoute() === 'UserCreate' ? 'active' : ''"
          :navText="'Создание пользователя'"
        >
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item" style="cursor:pointer;" @click="toggleEdit">
        <span class="nav-link">
          <div
            class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </div>
          <span class="nav-link-text ms-1">Редактирование записей</span
          >
        </span>
      </li>
      <li class="nav-item" v-for="(item, index) in roles" :key="index" v-show="toggleEditFlag">
        <sidenav-item
          :url="'/entriesedit/' + index"
          :class="index === this.$store.state.roleSelected ? 'active' : ''"
          :navText="item"
          :isSubcat="true"
          :isPersEdit="true"
        >
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <!-- <li class="nav-item">
        <sidenav-item
          url="/entriesfilter"
          :class="getRoute() === 'EntriesFilter' ? 'active' : ''"
          :navText="'Фильтр записей'"
        >
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li> -->
      <li class="nav-item" style="cursor:pointer;" @click="logOut">
        <span class="nav-link">
          <div
            class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
            <i class="ni ni-single-copy-04 text-danger text-sm opacity-10"></i>
          </div>
          <span class="nav-link-text ms-1">Выйти из системы</span
          >
        </span>
      </li>
    </ul>
  </div>
  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <sidenav-card
      :class="cardBg"
      textPrimary="Need Help?"
      textSecondary="Please check our docs"
    />
  </div>
</template>
<script>
import SidenavItem from "./SidenavItem.vue";
import SidenavCard from "./SidenavCard.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String
  },
  data() {
    return {
      title: "Argon Dashboard 2",
      controls: "dashboardsExamples",
      isActive: "active",
      toggleEditFlag: false
    };
  },
  computed: {
    roles() { return this.$store.state.auth.roles;}
  },
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
        this.$router.push('/entriesedit');


    },
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
    toggleEdit() {
      this.toggleEditFlag = !this.toggleEditFlag;
    },
    logOut() {
          this.$store.dispatch('auth/logout');
          this.$router.push('/signin');
      }
  },
  components: {
    SidenavItem,
    SidenavCard
  },
  watch: {
  '$store.state.drawer': function() {
    console.log(this.$store.state.roleSelected)
  }
}
};
</script>
