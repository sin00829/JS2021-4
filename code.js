const repl = require('repl');

repl.start({
    prompt:"숫자를 입력하세요---->",
    eval:(command,context,filename,callback) => {
        let number =Number(command);

        if (isNAN(number)){
          console.log("숫자가 아닙니다.");
        }
        else{
            console.log("숫자가 입니다.");
        }
        callback();
    }
})  