let a = 5;
for (i = 1; i <= a; i++) {
  for (j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

for (let i = a; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
for (i = 1; i <= a; i++) {
  for (j = 1; j <= a; j++) {
    if (j <= a - i) {
      document.write(" &#160;");
    } else {
      document.write("*");
    }
  }
  document.write("<br>");
}

for (i = 1; i <= a; i++) {
  for (j = 1; j <= a; j++) {
    if (j < i) {
      document.write(" &#160;");
    } else {
      document.write("*");
    }
  }
  document.write("<br>");
}
let b = 7;
let c = 21;
for (i = 1; i <= b; i++) {
  for (j = 1; j <= c; j++) {
    if (i == 1 || i == b || j == 1 || j == c) {
      document.write("*");
    } else {
      document.write(" &#160;");
    }
  }
  document.write("<br>");
}
let d = 7;
let e = 11;
for (i = 1; i < d; i++) {
  for (j = 1; j <= e; j++) {
    if (
      !(
        (i == 1 && (j == 1 || j == 2 || j == 6 || j == 10 || j == 11)) ||
        (i == 2 &&
          (j == 1 ||
            j == 3 ||
            j == 4 ||
            j == 6 ||
            j == 8 ||
            j == 9 ||
            j == 11)) ||
        (i == 3 &&
          (j == 2 ||
            j == 3 ||
            j == 4 ||
            j == 5 ||
            j == 7 ||
            j == 8 ||
            j == 9 ||
            j == 10)) ||
        (i == 4 &&
          (j == 1 ||
            j == 3 ||
            j == 4 ||
            j == 5 ||
            j == 6 ||
            j == 7 ||
            j == 8 ||
            j == 9 ||
            j == 11)) ||
        (i == 5 &&
          (j == 1 ||
            j == 2 ||
            j == 4 ||
            j == 5 ||
            j == 6 ||
            j == 7 ||
            j == 8 ||
            j == 10 ||
            j == 11)) ||
        (i == 6 && (j <= 5 || j >= 7))
      )
    ) {
      document.write(" * ");
    } else {
      document.write(" &#160; ");
    }
  }
  document.write("<br>");
}
