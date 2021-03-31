console.log('hello world...!');
//console.log('hello world...!');
//console.log('hello world...!');
String("성원");
console.log(5+3*2);
let a=(new Date()).getHours();
console.log(a<3 || a<8);
console.log (a=10);
console.log(a)
a++ 
a-- 
typeof"문자열"
'string'
typeof 10
'number'
let c= true
typeof(c)
'boolean'
const con1=("문자열상수");
con1 = "";
console.log(con1);  
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getTime());
console.log(date.getMinutes());
console.log(date.getSeconds());

if(date.getHours() < 12){
    console.log ("오전입니다");
}
console.log("오후입니다");

let input=32;
if(input %2==0){
    console.log("짝수입니다")
}
if(input %1==0){
    console.log("홀수입니다");
}

let date = new Date();

console.log(date.getmonth(3));

switch(date.getmonth()+1){
    case 12:
    case 1:
    case 2:
        console.log("겨울");
    break;
    case 3:
    case 4:
    case 5:
        console.log("봄")
    break;
    case 6:
        case 7:
        case 8:
            console.log("여름")
        break;
        case 9:
            case 10:
            case 11:
                console.log("가을")
            break;
            default:
                console.log("????????");
                break;
}
let test =777;
test = test ? test:"초기화";
console.log(test);

test = test || "초기화";
console.log(test); 

const repl = require('repl');

repl.start({
    prompt:"숫자를 입력하세요---->",
    eval:(command,context,filename,callback) => {
        let number =Number(command);

        if (isNAN(number)){
            
        }else{
            console.log("숫자가 입니다.");
        }
        callback();
    }
})