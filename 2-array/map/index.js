export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  let retult = collection.map(e => String.fromCharCode(96 + e));
  return retult;
}
