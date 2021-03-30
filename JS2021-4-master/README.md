# shin seong won[201840215]
## [03월 23일]
> [수업내용] </br>
## 1.문자 선택 연산자
console.log("안녕하세요"[0])</br> dddddd
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





