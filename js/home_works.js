
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


const parent = document.querySelector('.parent_block');
const child = document.querySelector('.child_block');

let position = 0;

const moveBlock = () => {
    const parentWidth = parent.clientWidth;
    const childWidth = child.clientWidth;

    if (position < parentWidth - childWidth) {
        position += 1.5; 
        child.style.left = `${position}px`;

        requestAnimationFrame(moveBlock);
    }
};

moveBlock();

