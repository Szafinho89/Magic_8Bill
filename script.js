const input = document.querySelector('input')
const ball = document.querySelector('img')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')


const drawAnswer = () => {
    const number = Math.floor(Math.random()*5)
    const answers = ['Tak', 'Nie', 'Może', 'Ciężko powiedzieć', 'Nie chcesz wiedzieć']

    answer.innerHTML= `<span>ODPOWIEDŹ:</span> ${answers[number]}`

}

const animation = () => {
    ball.classList.add('shake-animation')
    setTimeout(checkInput, 1000)
}

const checkInput = () => {
    error.textContent= ''
    ball.classList.remove('shake-animation')


    if (input.value === '') {
        answer.textContent= ''
        error.textContent= 'Podaj pytanie.'
    } else if (input.value.slice(-1) !== '?') {
        answer.textContent= ''
        error.textContent= 'Musisz wpisać na końcu pytania znak "?"'
    } else {
        drawAnswer()
    }
}

const checkEnter = (e) => {
    if (e.key === 'Enter') {
        animation()
    }
}


ball.addEventListener('click', animation)
input.addEventListener('keyup', checkEnter)