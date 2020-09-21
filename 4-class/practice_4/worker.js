// TODO 17: 在这里写实现代码
import Student from './student';
class Worker extends Student {
  introduce() {
    return super.basic_introduce() + ' I am a Worker. I have a job';
  }
}

export default Worker;
