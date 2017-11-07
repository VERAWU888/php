// var times = 99;
// for (i=0; i<times; i++) {
// $('.test').append('<div>3</div>');
// }


// 別人的模版
// var temp=0;  //暫存被運算數

// var strOper=0;  //暫存運算符號

// var valueM=0;  // ac 暫存使用


//     //數字鍵與小數點

//     function numBtn(str) {

//         //避免填入運算後的數字的後面

//         if (strOper==null) {
//             document.getElementById("box").value = str;
//             strOper=0;
//             return;
//         };

//        if (document.getElementById("box").value == 0) { 
//             document.getElementById("box").value = str;
//         } else {
//         document.getElementById("box").value += str;
//         }

//     }


//     //運算符號

//     function operBtn(str){

//         //不按等號的連續運算

//         equal();

//         valueA=document.getElementById("box").value;
//         strOper=str;

//         document.getElementById("box").value=0;
//     }

//     //等於

//     function equal(){   

//         switch (strOper){
//             case '+':
//                 document.getElementById("box").value=parseFloat(valueA)+parseFloat(document.getElementById("box").value);
//                 break;
//             case '-':
//                 document.getElementById("box").value=parseFloat(valueA)-parseFloat(document.getElementById("box").value);
//                 break;
//             case '*':
//                 document.getElementById("box").value=parseFloat(valueA)*parseFloat(document.getElementById("box").value);
//                 break;
//             case '/':
//                 document.getElementById("box").value=parseFloat(valueA)/parseFloat(document.getElementById("box").value);
//                 break;
//              // case '%':
//                 document.getElementById("box").value=parseFloat(valueA)/100;
//              //    break;   
//             default:
//                 break;
//         }


//         //防呆用

//         temp=null;
//         strOper=null;
//     }

//     //M鍵

//     function buttonM(str){

//         switch  (str) {
//             case 'M+':
//                 valueM += parseFloat(document.getElementById("box").value);
//                 break;
//             case 'M-':
//                 valueM -= parseFloat(document.getElementById("box").value);
//                 break;
//             case 'CE':
//                 temp=0;
//                 strOper=0;
//                 valueM=0;
//                 document.getElementById("box").value = '0';
//                 break;
//             // case 'percent':
//             //     document.getElementById("box").value  =  parseFloat(valueM);
//             //     //防呆用

//             //     temp=null;
//             //     strOper=null;
//             //     break;
//             default:
//                 break;
//         }

//     }