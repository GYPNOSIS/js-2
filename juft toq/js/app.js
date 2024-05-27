'use strict'

let num = prompt('Son kiriting', '');

if (num == 0) {
    alert(`${num} soni murakkab son`);
} else if (num > 0){
    if (num % 2 === 0){
        alert(`${num} soni juft va musbat son`)
    }
    else{
        alert(`${num} soni toq va musbat son`)
    }
} else {
    if (num % 2 === 0){
        alert(`${num} soni juft va manfiy son`)
    }
    else{
        alert(`${num} soni toq va manfiy son`)
    }
}