var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var likeArray = ["bóng đá", "bóng chuyền", "bóng bàn", "đá cầu"];

function getLessThan(n) {
  var list = [];
  var dem = 0;
  for (i = 0; i < n; i++) {
    list.push(i);
    dem++;
  }
  return list;
}

function getOddLessThan(n) {
  var list = [];
  var dem = 0;
  for (i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      // console.log(i);
      list.push(i);
    }
  }
  return list;
}

function findFirst(arr, chuoiCanTim) {
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === chuoiCanTim) {
      index++;
      return index;
    } else if (arr[i] !== chuoiCanTim) {
      return false;
    }
  }
  return chuoiCanTim;
}

function add(arr, chuoiCanThem) {
  arr.push(chuoiCanThem);

  // return  [arr];
  // Hoặc
  return arr;
}

function addIfNotExist(arr, chuoiCanThem) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === chuoiCanThem) {
      break;
    } else if (arr[i] !== chuoiCanThem) {
      arr.push(chuoiCanThem);
      break;
    }
  }
  return arr;
}

var mangs = ["bóng chuyền", "bóng rổ", "bóng đá"];
console.log(`Trùng phần tử thì ko thêm: `+addIfNotExist(mangs, "bóng rổ"));

function detected(arr, chuoiCanXoa) {
  var newArr = [];
  var newArrayDeleted = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== chuoiCanXoa) {
      newArr.push(arr[i]);
      // return newArr;
    } else if (arr[i] === chuoiCanXoa) {
      newArrayDeleted.push(arr[i]);
      // return newArrayDeleted;
    }
  }
  return newArr;
}

var mang = ["bóng chuyền", "bóng rổ", "bóng đá", "bóng chuyền"];

console.log(/* `Xóa phần tử trùng tên `+ */ detected(mang, "bóng chuyền"));
