// for(i=1;i<=5;i++){
//     for(i=1;i<=5;i++){
//         document.write(i);
//     }
//     document.write(</br>);
// }

// [1,5,1,69,8,4,3,6,7,52,6]
   
// var a = "121212112";

// var b = a.toString().split("").reverse().join("");

// document.write(b);
let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');


let users = [1,5,1,69,8,4,3,6,7,52,6];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, users.length-1);
    result.innerText = users[index];
});