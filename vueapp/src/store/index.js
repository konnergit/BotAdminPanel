import { createStore } from "vuex";
import { auth } from './auth.module';
import UserService from '../services/user.service';

const roles = JSON.parse(localStorage.getItem('roles'));

export default createStore({
  state: {
    roleSelected: (roles != undefined && roles.length === 1) ? 0 : null,
    roleName: null, 
    roleStrc: null,
    filterObj: null,
    totalPages: 4,
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
      //console.log(payload.selIndex + " and " + payload.selName);
      state.roleSelected = payload.selIndex;
      state.roleName = payload.selName;
    },
    getServiceFields(state, payload) {
      state.roleStrc = payload;
    },
    setFilterObj(state, payload) {
      state.filterObj = payload;
    },
    setTotalPages(state, payload) {
      state.totalPages = payload;
    },
    clearWorkingData(state) {
      state.roleSelected = null;
      state.roleName = null;
      state.roleStrc = null;
      state.filterObj = null;
    }
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
    chooseRole({ commit, state }, payload) {
      commit('selectRole', { selIndex:payload, selName:state.auth.roles[payload] });
      //console.log(state.roleName + " IMPORTANT!!!!!!!!!");
      return UserService.getServiceFields(state.roleName).then(
        response => {
            commit('getServiceFields', response.data.fields);
            return Promise.resolve(response);
        },
        error => {
            console.log(error);
            return Promise.reject(error);
        });
    },
    setFilterObj({ commit }, payload) {
      commit("setFilterObj", payload);
    },
    setTotalPages({ commit }, payload) {
      commit("setTotalPages", payload);
    },
    clearWorkingData({ commit }) {
      commit("clearWorkingData");
    },
  },
  modules: {
     auth
  }
});