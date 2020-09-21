export default function find00OldPerson(collection) {
  let result = collection.find(e => e.age > 10 && e.age <= 20);

  return result.name;
  // TODO 4: 在这里写实现代码
}
