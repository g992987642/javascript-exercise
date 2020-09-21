// TODO 20: 在这里写实现代码
import Person from './person';
class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }
  introduce() {
    if (this.klass === null || this.klass === undefined) {
      return super.basic_introduce() + ' I teach No Class.';
    }
    return super.basic_introduce() + ' I am a Student. I am at Class 2.';
  }
}

export default Teacher;
