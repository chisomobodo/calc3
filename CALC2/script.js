// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));

// buttons.map( button => {
//     button.addEventListener('click', (e) => {
        
//         switch(e.target.innerText){
//             case 'AC':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = "Error!"
//                 }
//                 break;
//             case 'DE':
//                 if (display.innerText){
//                    display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 const lastChar = display.innerText.slice(-1);
//                 if (lastChar === "" || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
//                     display.innerText += e.target.innerText;
//                 } else {
//                     display.innerText += e.target.innerText;
//                 }
                
//         }
//     });
// });

// // function isOperator(char) {
// //     return ["+", "-", "*", "/"].includes(char);
// // }


let display = document.getElementById('display');
let lastInputIsOperator = false;

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'DE':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                    lastInputIsOperator = false; 
                }
                break;
            default:
                if (lastInputIsOperator && e.target.innerText.match(/[+\-*/]/)) {
                } else {
                    display.innerText += e.target.innerText;
                    lastInputIsOperator = e.target.innerText.match(/[+\-*/]/); 
                }
        }
    });
});
