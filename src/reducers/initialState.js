export default {
  user: {
    _id: null,
    username: "",
    email: "",
    country: "",
    city: "",
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
    message: ""
  }
};
