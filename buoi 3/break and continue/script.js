//  break
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
}
// => khi x =3 kết thúc vòng lặp
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>";
}
//  khi i = 3 continue bỏ qua nó  và chạy lần lặp tiếp theo
