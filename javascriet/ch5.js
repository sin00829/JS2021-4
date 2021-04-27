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
  console.log(`${x}"이라고 말했습니다`);
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




/* let foo = setInterval(() =>{
  console.log("출력합니다.");
},1000);

setTimeout(function(){
  clearInterval(foo);
},3000); */

/* let bar;
bar = 10;
bar = 20;
console.log(bar);

//코드 5-19 
//
let foo;
foo = function(){
  console.log("첫번째 함수")
}
foo= ()=>{
  console.log("두번째 함수")
}
foo(); */

//코드 5-20
//
/* foo = function (){
  console.log("첫번째 함수")
}
function foo(){
  console.log("두번째 함수")
}
foo();   //선언적함수보다 무명함수가 우선순위
 */
let foo=[
  {name:"바나나",price:1200},
  {name:"딸기",price:3000},
  {name:"수박",price:10000},
  {name:"사과",price:2000},
];
function bar(foo){
  console.log(`${foo.name}의가격은 ${foo.price}원입니다.`);
}

for(let foo1 of foo){
 bar(foo1);
}