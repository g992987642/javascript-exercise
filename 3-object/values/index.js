export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let result = 0;
  Object.values(source).forEach(e => (result = result + Number.parseInt(e)));
  return result;
}
