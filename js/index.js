var app = new Vue({
  el: "#app",
  data: {
    message2: "Hello Vue!",
    message: "You loaded this page on " + new Date().toLocaleString(),
    seen: true,
    inputData: "Hey Vue!!",
    data: [{ text: "Hey" }, { text: "Hey you" }, { text: "Hey you who" }],
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" }
    ]
  },
  methods: {
    toggleMessageVisibility: function() {
      this.seen = !this.seen;
      var msg = "";
      this.message = this.message
        .split(" ")
        .reverse()
        .join(" ");
    }
  }
});
