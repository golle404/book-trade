export default {
  user: {
    _id: null,
    username: "",
    email: "",
    country: "",
    citty: "",
    auth: false
  },
  bookData: {
    books: [],
    filterType: "FILTER_ALL"
  },
  ajaxCallsNum: 0,
  notifications:{
    show: false,
    type: "info",
    message: "test"
  }
};
