class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
    return this.name;
  }
}

export default User;