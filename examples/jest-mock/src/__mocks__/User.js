class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(`this is ${this.name} in testf file`);
    return `This is testing ${this.name}`;
  }
}

export default User;