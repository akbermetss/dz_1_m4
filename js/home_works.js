
const emailInput = document.querySelector('#gmail_input');
const form = document.querySelector('#gmail_button');

const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

form.addEventListener('click', function (e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();

    if (gmailRegex.test(emailValue)) {
        alert('Gmail валиден');
    } else {
        alert('Введите корректный Gmail !');
    }
});


// const parent = document.querySelector('.parent_block');
// const child = document.querySelector('.child_block');

// let position = 0;

// const moveBlock = () => {
//     const parentWidth = parent.clientWidth;
//     const childWidth = child.clientWidth;

//     if (position < parentWidth - childWidth) {
//         position += 1.5; 
//         child.style.left = `${position}px`;

//         requestAnimationFrame(moveBlock);
//     }
// };

// moveBlock();

const parent = document.querySelector('.parent_block');
const child = document.querySelector('.child_block');

let x = 0;
let y = 0;
const step = 2;

const maxX = parent.clientWidth - child.clientWidth;
const maxY = parent.clientHeight - child.clientHeight;

let direction = 'right';

function moveBlock() {
    if (direction === 'right') {
        x += step;
        if (x >= maxX) direction = 'down';
    } 
    else if (direction === 'down') {
        y += step;
        if (y >= maxY) direction = 'left';
    } 
    else if (direction === 'left') {
        x -= step;
        if (x <= 0) direction = 'up';
    } 
    else if (direction === 'up') {
        y -= step;
        if (y <= 0) direction = 'right';
    }

    child.style.left = `${x}px`;
    child.style.top = `${y}px`;

    requestAnimationFrame(moveBlock);
}

moveBlock();

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const seconds = document.querySelector('#seconds');

let count = 0;
let timerId = null;

startBtn.addEventListener('click', () => {
    if (timerId !== null) return; 

    timerId = setInterval(() => {
        count++;
        seconds.textContent = count;
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    count = 0;
    seconds.textContent = count;
});

