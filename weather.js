let date = new Date();

console.log(date.getMonth());

switch(date.getMonth()+1){
    case 12:
    case 1:
    case 2:
        console.log("겨울");
    break;
    case 3:
    case 4:
    case 5:
        console.log("봄");
    break;
    case 6:
        case 7:
        case 8:
            console.log("여름");
        break;
            default:
                console.log("가을");
                break;
}