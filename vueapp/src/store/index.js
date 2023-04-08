import { createStore } from "vuex";
import { auth } from './auth.module';
import UserService from '../services/user.service';

const roles = JSON.parse(localStorage.getItem('roles'));

export default createStore({
  state: {
    roleSelected: (roles != undefined && roles.length === 1) ? 0 : null,
    roleName: null, 
    roleStrc: null,
    filteredData: null,
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    sidebarType: "bg-white",
    isRTL: false,
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default"
  },
  mutations: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");

      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    selectRole(state, payload) {  
      state.roleSelected = payload;
      //state.roleName = state.auth.roles[payload];
      state.roleName = 'Operbot'; //!!!!!!!!!!!!ИЗМЕНИТЬ ПЕРЕД ПРОДОМ
      //console.log('SelectRole:' + state.auth.roles[payload]);
    },
    getServiceFields(state, payload) {
      state.roleStrc = payload;
    },
    setFilteredData(state, payload) {
      state.filteredData = payload;
    }
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
    chooseRole({ commit, state }, payload) {
      console.log(payload);
      commit('selectRole', payload);
      UserService.getServiceFields(state.roleName).then(
        response => {
          if (response.data.Fields) {
            commit('getServiceFields', response.data.Fields);
          }
          else console.log('Структура бота не получена в результате ошибки')
        });
    },
    setFilteredData({ commit }, payload) {
      commit("setFilteredData", payload);
    }
  },
  modules: {
     auth
  }
});