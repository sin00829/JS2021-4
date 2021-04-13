# shin seong won[201840215]

## [04월 13일] <br>
> [수업내용] </br>
## 1. 익명함수<br>이름을 붙이지 않고 함수 생성
let(변수이름)=function(){};<br>

let hamsu = function(){<br>

let hamsu = function(){<br>
  console.log("첫 줄");<br>
  console.log("둘째줄");<br>
}<br>
hamsu();<br>
console.log(hamsu);<br>
변수이름을 사용 <br>

## 2.선언적함수

function foo(){<br>
  console.log("첫 줄");<br>
  console.log("둘째줄");<br>
}<br>
foo()<br>
console.log(foo);<br>
메서드를 바로사용 <br>

## 3.화살표 함수 
() => { }<br>
하나의 표현식을 리턴하는 함수 를 만들때는 중괄호 생략가능<br>
let foo= ()=>{<br>
  console.log("첫째줄")<br>
  console.log("둘째줄")<br>
}<br>
foo();<br>

## 4.함수의 기본 형태
function <함수이름>(<매개변수>){<br>
  <함수코드><br>
  return <리턴값><br>
}<br>

function power(x){<br>
  return x * x;<br>
}
console.log(power(10));<br>
console.log(power(20));<br>

function power(x,y){<br>
  bar = x * y;<br>
  return bar;<br>
}<br>
console.log(power(10,20));<br>
console.log(power(20,30));<br>

function print(x){<br>
  console.log(`"${x}"이라고 말했습니다`);<br>
}
print("안녕하세요");<br>
*리턴하는 함수의 기본형태*<br>
function(<매개변수>,<매개변수>){<br>
  let output =<초깃값>;<br>
  //output 계산<br>
  return output;<br>
}<br>

function sum(min,max){<br>
  let output = 0;<br>
  for(let i = min; i<=max;i++){<br>
    output += i;<br>
  }<br>
  return output;<br>
}<br>
console.log(sum(1,100));<br>

## 4. 함수 매개 변수 초기화
//함수를 선언합니다.<br>
function print(name,count){<br>
  console.log(`${name}이/가 ${count}개 있습니다.`)<br>
}<br>
print("사과",10);<br>
print("사과");(실행하면 undefined가 출력)<br>

function print(name,count){<br>
  if(!count){<br>
    count="오류입니다";<br>
  }<br>
  console.log(`${name}가 ${count}개 있습니다.`)<br>
}<br>
print("사과");<br>

function print(name,count){<br>
    count= count || 1;
  console.log(`${name}가 ${count}개 있습니다.`)<br>
}
print("사과");<br>
print("사과",10);<br>

function print(name,count=1){<br>
  console.log(`${name}가 ${count}개 있습니다.`)<br>
}
print("사과");<br>
print("사과",10);<br>

## 5.콜백 함수 
함수의 매개 변수로 전달되는 함수 <br>
function callTenTimes(foo){<br>
  for(let i=0; i<10;i++){<br>
    foo();<br>
  }<br>
}<br>

callTenTimes(function() {<br>
  console.log("함수호출");<br>
})<br>

## 6. 표준 내장 함수
parseInt() 문자열을 정수로 변환합니다.<br>
parseFloat() 문자열을 실수로 변환합니다.<br>

let inputA ="52";<br>
let inputB ="52.273";<br>
let inputC ="1401동";<br>

console.log(parseInt(inputA));<br>
console.log(parseInt(inputB));<br>
console.log(parseFloat(inputB));<br>
console.log(parseInt(inputC));<br>
console.log(Number(inputC)); (문자는 다사라짐 예)동x)<br>
## [04월 06일] <br>
> [수업내용] </br>

## 1. for 반복문 <br>
let output= 0; //반복문을 선언합니다.<br>
for (let i=0; i<=100; i++){  //반복을 수행합니다.<br>
  output +=i;<br>
}<br>
console.log(output);//출력합니다.<br>

## 2. 역 for 반복문<br><br>
for (let i = length-1; i>= 0; i--){<br>
}<br>
[예제] <br>
//배열을 생성합니다.<br>
let foo = {1,2,3,4,5,6};<br>
//요소의 길이를 출력합니다.<br>
for(let i= foo.length -1 ; i >= 0;i--){<br>
  console.log(array[i]);<br>
}<br>
## 3. for in 반복문과 for of 반복문<br>
// 변수를 선언<br>
let foo =["사과","배","포도","멜론"]<br>
for(let i in foo){<br>
  console.log(`${i}번째 요소:${foo[i]}`);<br>

  for(let item in foo){<br>
  console.log(item);<br>
}<br>
## 4. 중첩 반복문 <br>
let output="";<br>
for(let i=0; i < 10; i++){<br>
  for(let j =0; j < i+1; j++){<br>
    output +="*"<br>
  }<br>
  output+="\n";<br>
}<br>
console.log(output0);<br>

## 5. break 키워드 <br>
let i=0;<br>
let foo = [1,31,273,57,8]<br>
let output;<br>

while (true){<br>
if(foo[i]%2==0){<br>
  ouput =foo[i];<br>
  break;<br>
}<br>
i++<br>
}<br>
comsole.log("처음 발견할 짝수는 ${output}입니다.");<br>
// 선언 동시에 초기화<br>
// let foo=new Array(1,10,오렌지)<br>
## 추가적으로 알아야할 함수들<br>
push 배열 마지막 주소에 값을 추가해주는 함수 <br>
pop 배열 마지막 주소에 있는 값을 제거해주는 함수<br>
shift 배열 첫번째 주소에있는 값을 제거한후에 변환해주는 함수<br>
concat 두개를 합쳐주는 함수<br>
reverse 역방향으로 하는 함수<br>
slice(1,5) 1부터 5전까지만 출력해주는 함수 (자료들이 사라짐)<br>
splice 슬라이스와 같으나 자료들이 없어지지 않고 복사해서 가져옴<br>
join("/") /사용할때 많이쓰임 <br>
##6. continue 키워드 <br>
계속해서 반복할때 사용<br>
for(let i = 1; i<10; i++){<br>
  if(i%2==0){<br>
    continue;<br>
  }<br>
  console.log(i)<br>
}<br>
## 7. 스코프<br>
변수를 사용할 수 있는 범위<br>
스코프 == 블록 / 전역변수,지역변수<br>
메서드안에서만정의되있는것은 그안에서만 사용가능 <br>
(중괄호로 둘러싸는 부분만 사용가능)<br>
## 8. 호이스팅 <br>
해당 블록에서 사용할 변수를 미리 확인해서 정리하는작업 <br>
## 9. var키워드<br>
let:일반적으로 let을 사용함 <br>
var:익스플로러는 var키워드로 생성한변수로 바꿔주면됨 <br>
## [03월 30일] <br>
> [수업내용] </br>
## 1.if/else if 조건문 <br>
if(조건문)=if (<불 표현식>){<br>
  불 표현식이 true이면 문장을 실행,flase이면 문장을 무시함<br>
}<br>
<b>예시) <br>
let input =32;<br>
if(input % 2 ==0){<br>
  console.log("짝수입니다");<br> 
}<br>
if (input % 2 ==1){<br> 
  console.log("홀수입니다")<br>
}<br>
if else(조건문) <br>
if(<불표현식>){<br> 
  불 표현식이 참일때 실행할 문장<br>
}<br> 
else{<br>
  불 표현식이 거짓일때 실행할 문장<br>  
}<br>
예시)<br>
let input=32;<br>
if(input %2 ==0){<br>
 console.log("짝수입니다");<br>
}<br>
else{<br>
  console.log("홀수입니다")<br>
}<br>
## 2.switch case 조건문 <br>
switch (<비교값>){<br>
  case <값>:<br>
  <문장><br>
  break;<br>
  case<값>:<br>
  <문장><br>
  break;<br>
  default:<br>
  <문장><br>
  break;<br>
}<br>
let date = new Date();<br>
console.log(date.getMonth());<br>
switch(date.getMonth()+1){<br>
    case 12:<br>
    case 1:<br>
    case 2:<br>
        console.log("겨울");<br>
    break;<br>
    case 3:<br>
    case 4:<br>
    case 5:<br>
        console.log("봄");<br>
    break;<br>
    case 6:<br>
        case 7:<br>
        case 8:<br>
            console.log("여름");<br>
        break;<br>
            default:<br>
                console.log("가을");<br>
                break;<br>
} 
## 3.삼항 연산자 <br>
<불 표현식>? <참>:<거짓><br>
참과 거짓 위치에 불 자료형<br>
console.log(number % 2 ==0 ? true:false);<br>
참과 거짓 위치에 문자열 자료형<br>
console.log(number % 2 ==0 ? 짝수:홀수);<br>
## 4.짧은 초기화 조건문<br>
|| 연산자를 불이 아닌 자료에 사용할 경우<br>
A || B에서 A가 참이라면 A로대치<br>
A || B에서 A가 거짓이라면 B로대치<br>
## 5. 조금더 나아가기<br>
웹 브라우저에서 작동하는 자바스크립트:prompt() 이름의 함수를 받음<br>
node.js에서 작동하는 자바스크립트:단순한 코드로 입력받을 수없음<br>
const repl = require('repl');<br>
repl.start({<br>
    prompt:"숫자를 입력하세요---->",<br>
    eval:(command,context,filename,callback) => {<br>
        let number =Number(command);<br>
        if (isNaN(number)){<br>
          console.log("숫자가 아닙니다.");<br>
        }<br>
        else{<br>
            console.log("숫자 입니다.");<br>
        }<br>
        callback();<br>
    }
})<br>
## [03월 23일]
> [수업내용] </br>
## 1.문자 선택 연산자
console.log("안녕하세요"[0])</br>
console.log("안녕하세요"[1])</br>
console.log("안녕하세요"[3])</br>
문자열의 0번째,1번째,3번째에 있는 문자를 선택 </br>
안 녕 세 </br>

## 2.템플릿 문자열(Backitit 사용)
`10+20=${10+20}`</br>
'10+20=30'</br>

## 3.참과 거짓의표현/비교연산자,논리연산자</br>
참과 거짓의 표현: true와 false 52 < 273 , 52 > 273
비교연산자:==같습니다 !=다릅니다. >왼쪽 피연산자가 큽니다 <오른쪼 피연산자가 큽니다 >= 왼쪽이크거나같다 <=오른쪽이크거나같다</br>
논리연산자: ! 논리 부정연산자 || 논리합 연산자 (or) &&논리곱 연산자 (and)</br>
console.log(!true) false </br>
console.log(!(52 <273)) false </br>
## 4.변수(let)</br>
변수:값을 지정할 때 사용하는 식별자,변수 선언후 변수에 값을 할당</br>
let 식별자; 변수 선언</br>
let pi pi를 선언</br>
let pi =3.141592</br>
console.log(pi)</br>
## 5.복합 대입 연산자</br>
변수에 사용할 수 있는 몇 개의 특별한 연산자가 존재 </br>
a+=10 은 a=a+10 과 결과가 같음 연산자 += -= *= /= </br>
let output = 0; </br>
ouput += 52; </br>
ouput = ouput +52; </br>
문자도 똑같음 </br>

## 6.증감연산자　</br>
변수++ 기존 변수 값에 1을 더합니다 (한턴쉬고바뀜)　</br>
++변수 기존변수 값에 1을 더합니다  (바로 바뀜)　</br>
변수-- 기존 변수 값에서 1을 뺍니다 (한턴쉬고바뀜) 　</br>
--변수 기존 변수 값에서 1을 뺍니다 (바로 바뀜)　</br>
let number = 10;　</br>
console.log(number++)　</br>
11 　</br>
console.log(number--)　</br>
10　</br>
## 7.자료형 검사(typeof) /Undefined자료형</br>
typeof 해당 변수의 자료형을 추출합니다.</br>
typeof 10 'number'</br>
typeof("문자열") 'string'</br>

## 8.강제 자료형 변환(Boolean()함수(0,nan,"",null,undfined)</br>
lea a undefined 변수를 선언 했으나 초기화하지 않은 자료형 </br>
Number() 숫자로 자료형 변환합니다.</br>
srting() 문자열로 자료형 변환합니다.</br>
Boolean() 불로 자료형 변환합니다.</br>
console.log(Number("52")); 52</br>
console.log(Number("true")); 1</br>
console.log(Number("false")); 0</br>
console.log(Number("안녕하세요")); NAN =NOT A umber</br>
let nan= Number("안녕하세요");</br>
is NAN()함수로 NON인지 확인 is NAN사용 console.log(isNAN(nan));</br>
(Boolean()함수(0,nan,"",null,undfined) 모두 false</br>
## 9.자동 자료형 변환 </br>
숫자와 문자열에 + 연산자를 적용하면 자동으로 숫자가 문자열로 변환</br>
console.log(52+273); 325</br>
console.log("52"+273); 52273</br>
console.log("52"+"273"); 52273</br>
!연산자를 두번 사용해 boolean() 함수를 사용하는 것과 같은 효과</br>
console.log(!!@); false</br>
console.log(!!nan); false</br>
console.log(!!""; false</br>
console.log(!!null); false</br>
## 10. 일치 연산자(자료형검사 포함)</br>
\=\=\=자료형과 값이 같은지 비교 \!\=\= 자료형과 값이 다른지 비교</br>
비교연산자와 일치연산자의 차이 </br>
console.log(`52=="52"): ${52 == "52"}`); 52=="52": true</br>
console.log(`52=="52"): ${52 === "52"}`); 52==="52": false</br>
## 11.상수(const)-변할수없는값</br>
상수:"항상 같은수"라는 의미 변수와 반대되는 개념</br>
const:상수constant를 만드는 키워드 </br>
const constant ="변경할수없어요";</br>
constant = "";</br>
console.log(constant);</br>
## 12.if 조건문 /if else 조건문/ 중첩조건문 </br>
if (조건) {트루일 때 결과}</br>
else if (조건2) {조건2가 트루일때 결과}</br>
else if (조건3) {조건3가 트루일때 결과}</br>
else{모두 false일 때 결과}</br>


## [03월 16일]
> 오늘 배운 내용 요약 <br />
> 요약 <br />
<h4>세계에서 가장 오해를 많이 받는 프로그래밍 언어(자바스크립트)</br>

### 1.자바스크립트의 발전 </br>
> node.js 2008년 9월: 구글은 웹브라우저의 베타 버전을 발표했다.</br>
 node.js:모든 모듈(라이브러리)이 처음부터 비동기 기반의 프로그램을 만들수 있도록 설계되어 초보자도 쉽게만들수있음</br>
>스레드(Thread):효율적인 비동기 방식으로 장보기를 프로그래밍 언어로 구현하는 방법<br>
### 2. 자바스크립트로 할수 있는일 :자바 스크립트는 클라이언트와 서버 개발을 동시에 할수있다</br>
>웹 클라이언트 애플리케이션 개발 </br>
웹 서버 개발 </br>
모바일 애플리케이션 개발 </br>
데스크톱 애플리케이션 개발 </br>
게임 개발 </br>
데이터베이스 관리 등등 많은 일을 할수있다.</br>





