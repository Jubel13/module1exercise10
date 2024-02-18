//2

function findOne(arr) {
  let objNum = {};

  for (let i = 0; i < arr.length; i++) {
    if (!objNum[arr[i]]) {
      objNum[arr[i]] = 1;
    } else {
      objNum[arr[i]]++;
    }
  }

  for (let key in objNum) {
    if (objNum[key] === 1) {
      return key;
    }
  }
}

console.log(findOne([4, 1, 2, 1, 2]));

//anagram

function anagram(s, t) {
  let sArr = s.split("").sort();
  let tArr = t.split("").sort();

  let sArrString = "";
  let tArrString = "";

  for (let i = 0; i < sArr.length; i++) {
    sArrString += sArr[i];
    tArrString += tArr[i];
  }

  if (sArrString === tArrString) {
    return true;
  } else {
    return false;
  }
}

console.log(anagram("car", "rat"));
