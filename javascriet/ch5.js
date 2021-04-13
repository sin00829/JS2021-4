// 무명함수 ES6 이전에 사용 
/* let hamsu = function(){
  console.log("첫 줄");
  console.log("둘째줄");
}

hamsu();
console.log(hamsu);
 */
//선언적 함수 
/* function foo(){
  console.log("첫 줄");
  console.log("둘째줄");
}

foo()
console.log(foo); */

/* let foo= ()=>{
  console.log("첫째줄")
  console.log("둘째줄")
}
foo(); */

/* function power(x){
  bar = x * x;
  return bar;
}
console.log(power(10));
console.log(power(20)); */
/* function power(x,y){
  bar = x * y;
  return bar;
}
console.log(power(10,20));
console.log(power(20,30));
 */
/* function print(x){
  console.log(`"${x}"이라고 말했습니다`);
}
print("안녕하세요"); */

/* function sum(min,max){
  let output = 1;
  for(let i = min; i<=max;i++){
    output *= i;
  }
  return output;
}
console.log(sum(1,10)); */
//함수를 선언합니다.
/* function print(name,count){
  console.log(`${name}이/가 ${count}개 있습니다.`)
}
print("사과",10);
print("사과"); */

/* function print(name,count){
  if(!count){
    count="수량을 알수없습니다.";
  }
  console.log(`${name}가 ${count}개 있습니다.`)
}
print("사과"); */

/* function print(name,count){
    count= count || 1;
  console.log(`${name}가 ${count}개 있습니다.`)
}
print("사과"); */

/* function callTenTimes(foo){
  for(let i=0; i<10;i++){
    foo();
  }
}

callTenTimes(function() {
  console.log("함수호출");
}) */

/* let inputA ="52";
let inputB ="52.273";
let inputC ="1401동";

console.log(parseInt(inputA));
console.log(parseInt(inputB));
console.log(parseFloat(inputB));
console.log(parseInt(inputC));

console.log(Number(inputA)); */
/* 
setTimeout(function(){
  console.log("1초지남")
},1000);

setInterval(() => {
  console.log("1초지남")
}, 1000); */

