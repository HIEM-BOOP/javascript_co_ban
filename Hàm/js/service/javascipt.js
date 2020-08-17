function showLog(message) {
  console.log(message);
}
/* input : hai biến a và b */
/* ouput : Xuất ra hai biến này gắn cho một giá trị cho hai biến để hiện ra kết quả*/

function tong(a, b) {
  var sum = a + b;

  return sum;
}
function hieu(a, b) {
  var tru = a - b;

  return tru;
}

function tich(a, b) {
  var nhan = a * b;

  return nhan;
}

function thuong(a, b) {
  var chia = a / b;
  // xử lý các trường hợp
  if (a == 0) {
    console.log("Kết quả = 0");
  } else {
    console.log("Lỗi");
  }
  return chia;
}

function binhPhuong(a) {
  var binhPhuongMotSo = a * a;

  return binhPhuongMotSo;
}

function max(a, b) {
  var max = { a, b };
  if (a > b) {
    max = a;
  } else if (a < b) {
    max = b
  }
  return max;
}

function min(a, b) {
  var Min = { a, b };
  if (a > b) {
    min = b;
  } else if (a < b) {
    showLog(`số nhỏ nhất là :` + a);
  }
  return Min;
}

function trungBinh(a, b) {
  var avg = (a + b) / 2;

  return avg;
}

function chiaLayDu(a, b) {
  var chiaLayDu = a % b;

  return chiaLayDu;
}

function coChiaHet(a, b) {




}

/* Tính tính chu vi chữ nhật */

  function chuViChuNhat(a,b){
    var p = (a + b)*2;
    
    return p;
  }

  /* Tinnh dien tich hinh chu nhat */

  function dienTichChuNhat(a, b){

    var s = a * b;

    return s ;
  }

  /* Tinh chu vi duong tron */

  function chuViHinhTron(R){
      var c = 2*R*(3,14);

      return c;
  }
  function dienTichHinhTron(R){
    var S = R*R *(3,14);

    return S;
  }

  /* chuổi  */

  function noiChuoi(S1,S2){
    var noiChuoi = S1 + "+" + S2;

    return noiChuoi;
  }

  function inHoa(M){
     
      var chuyenChu = M.toUpperCase();


      return chuyenChu;
  }

  function coTonTai(S1,S2){
    

    
  }

  function doDaiChuoi(M){

    var dodai = M.length;  

    return dodai;
  }
function catChuoi(M){
  var cat = M.substring(1, 3);


  return cat;
}

function kiemTra(s,sa){
  var kiem = s.includes(sa);

  return kiem;


}
