import { createStore } from "vuex";

export default createStore({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Blog Card #1",
        blogCoverPhoto: "stock-1",
        blogDate: "may 3 2023",
      },
      {
        blogTitle: "Blog Card #2",
        blogCoverPhoto: "stock-2",
        blogDate: "may 3 2023",
      },
      {
        blogTitle: "Blog Card #3",
        blogCoverPhoto: "stock-3",
        blogDate: "may 3 2023",
      },
      {
        blogTitle: "Blog Card #4",
        blogCoverPhoto: "stock-4",
        blogDate: "may 3 2023",
      },
    ],
    editPost: null,
  },
  getters: {},
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload
      console.log(payload)
    }
  },
  actions: {},
  modules: {},
});
