function bai_1() {
  for (let i = 1; i <= 100; i++) {
    document.write(i + "<br>");
    if (i == 99) {
      alert("Đã hoàn thành");
    }
  }
}

function bai_2() {
  let nhietdo = Number(prompt("Nhập vào nhiệt độ"));
  while (nhietdo < 20 || nhietdo > 100) {
    if (nhietdo < 20) {
      alert("Nhiệt độ quá lạnh");
      nhietdo = Number(prompt("Nhập vào nhiệt độ"));
    } else if (nhietdo > 100) {
      alert("Nhiệt độ quá nóng");
      nhietdo = Number(prompt("Nhập vào nhiệt độ"));
    }
  }
  alert("Nhiệt độ bình thường");
}

function bai_3() {
  let F = 0,
    F0 = 0,
    F1 = 0;
  let fibonacci = "";
  for (let i = 0; i < 20; i++) {
    if (i == 0) {
      F = 1;
      F1 = 1;
      fibonacci += F + " ";
    } else {
      F = F0 + F1;
      F0 = F1;
      F1 = F;
      fibonacci += F + " ";
      console.log(i + " = " + F);
    }
  }
  document.write(fibonacci);
}

function bai_4() {
  let F = 0,
    F0 = 0,
    F1 = 0;
  let chia5 = "";
  let fibonacci = "";
  for (let i = 0; i < 20; i++) {
    if (i == 0) {
      F = 1;
      F1 = 1;
      fibonacci += F + " ";
    } else {
      F = F0 + F1;
      F0 = F1;
      F1 = F;
      fibonacci += F + " ";
      console.log(i + " = " + F);
      if (F % 5 == 0) {
        chia5 = F;
        break;
      }
    }
  }

  document.write("Sô chia hết cho 5 trong dãy là " + chia5);
}

function bai_5() {
  let F = 0,
    F0 = 0,
    F1 = 0,
    tong = 0;
  let fibonacci = "";
  for (let i = 0; i < 20; i++) {
    if (i == 0) {
      F = 1;
      F1 = 1;
      fibonacci += F + " ";
      tong += F;
    } else {
      F = F0 + F1;
      F0 = F1;
      F1 = F;
      fibonacci += F + " ";
      tong += F;
      console.log(i + " = " + F);
    }
  }
  document.write("Dãy Fibonacci là " + fibonacci + "<br>");
  document.write("Tổng của các số = " + tong);
}

function bai_6() {
  let count = 0,
    tong = 0;
  let dayso = "";
  for (let i = 1; ; i++) {
    if (i % 7 == 0) {
      dayso += i + " ";
      console.log(dayso);
      tong += i;
      count++;
      if (count == 30) break;
    }
  }
  document.write(dayso + "<br>");
  document.write("Tổng bằng " + tong);
}

function bai_7() {
  document.write("<br>");
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      document.write(i + " FizzBuzz <br>");
    } else {
      if (i % 3 == 0) {
        document.write(i + " Fizz <br>");
      } else if (i % 5 == 0) {
        document.write(i + " Buzz <br>");
      }
    }
  }
}

function bai_8() {
  let phamvi = Number(prompt("Trò chơi đoán số từ 0 - "));
  let nhapso = Number(prompt("Nhập vào số muốn đoán"));
  let soRamdom;
  if (phamvi) {
    soRamdom = Math.floor(Math.random() * phamvi);
    if (soRamdom == nhapso) {
      alert("Bạn đã đoán đung");
    } else {
      while (soRamdom != nhapso) {
        alert("Bạn đoán sai số đúng là " + soRamdom);
        nhapso = Number(prompt("Nhập vào số muốn đoán"));
      }
      alert("Bạn đoán đúng");
    }
  }
}
