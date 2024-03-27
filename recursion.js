// Что такое рекурсия
// Факториал - это
// 5! = 5*4*3*2*1 = 120;
function factorial(num) {
  if (num === 1) return num;
  return num * factorial(num- 1);
}

factorial(5); // 120
