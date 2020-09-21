function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  let result = collection.filter(e => e % 3 == 0);
  return result;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  let result = [];
  collection.forEach(e => {
    if (!result.includes(e)) {
      result.push(e);
    }
  });
  return result;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
