// CODE HERE
let button = document.querySelector('button')

function setMessage(){
    let para = document.querySelector('p');
    para.classList.remove('hidden');
}

button.addEventListener('click', setMessage);