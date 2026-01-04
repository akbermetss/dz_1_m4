// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0
let sliderInterval

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}

const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)

const startAutoSlider = () => {
    sliderInterval = setInterval(() => {
        index++
        if (index > slides.length - 1) {
            index = 0
        }
        hideSlide()
        showSlide(index)
    }, 5000) 
}

startAutoSlider()


next.onclick = () => {
    clearInterval(sliderInterval) 
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
    startAutoSlider() 
}

prev.onclick = () => {
    clearInterval(sliderInterval)
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
    startAutoSlider()
}

const modal = document.getElementById('modal');
const closeBtn = modal.querySelector('.close');

function openModal() {
  modal.classList.add('show');
}

function closeModal() {
  modal.classList.remove('show');
}

closeBtn.addEventListener('click', closeModal);

function onScroll() {
  const scrollTop = window.pageYOffset;
  const windowHeight = document.documentElement.clientHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= documentHeight) {
    openModal();
    window.removeEventListener('scroll', onScroll); // 🔥 важно
  }
}

window.addEventListener('scroll', onScroll);

setTimeout(openModal, 10000);