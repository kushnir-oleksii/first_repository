let user = {
  name: "Bob",
  getName: function () {
    console.log(this.name);
  },
};
user.getName();
