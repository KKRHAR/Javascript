///if there is multiple condition it is better to write switch condition.

// switch(key){
//     case value:
//         break;

// default:
//     break;
// }

const month = 3

switch(month){// month is written because we need to check month every time
    case 1:
        console.log("Januray");
        break;

        case 2:
            console.log("Feburary");
            break;

            case 3:
                console.log("March");
                break;

                case 4:
                    console.log("April");
                    break;

        default:
            console.log("Default Case Match");
            break;
}

