// TODO 18: 在这里写实现代码
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return this.basic_introduce();
  }

  basic_introduce() {
    return 'My name is Tom. I am 21 years old.';
  }
}

export default Person;
