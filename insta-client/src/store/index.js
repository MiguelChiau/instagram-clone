import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api_url: "http://localhost:3000/",
    isAuthenticated: false,

    //dummy data for the news feed
    feed: [
      {
        id: 0,
        display_name: "Miguel Chiau",
        user_id: 0,
        desc: "Views from Squamish",
        image:
          "https://images.unsplash.com/photo-1508080616348-b9b19ce377b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
        timestamp: 1551052800000
      },
      {
        id: 1,
        display_name: "Micah Chiau",
        user_id: 0,
        desc: "Views from Squamish",
        image:
          "https://images.unsplash.com/photo-1507817373809-339e82b9d0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
        timestamp: 1549065600000
      },
      {
        id: 2,
        display_name: "Mia Chiau",
        user_id: 0,
        desc: "Views from Squamish",
        image:
          "https://images.unsplash.com/photo-1544731059-8485db0c69e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
        timestamp: 1541569600000
      }
    ]
  },
  mutations: {
    // check if user is authenticated
    isAuthenticated(state) {
      if (localStorage.getItem("jwt") != null) state.isAuthenticated = true;
      else state.isAuthenticated = false;
    }
  },
  actions: {},
  modules: {}
});
