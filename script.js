var vue = new Vue({
  el: "#app",
  data: {
    result: "",
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    operations: ["+", "-", "*", "/"],
  },
  methods: {
    input: function (char) {
      this.result = this.result.toString();// чтобы привести к стрингу после математического действия с eval
      this.result += char;
    },
    reset: function () {
      this.result = "";
    },
    calc: function () {
      this.result = eval(this.result); // eval = переводит стринг в математическую строку и затем считает
    },
  },
});
