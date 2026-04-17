let body = document.querySelector('body')


let submit = document.querySelector('#submit')
let input = document.querySelector('.input')
let game = document.querySelector('#game')
let guessItem = document.querySelector('.para-item')
let resultElem = document.querySelector('.over')


function RandomNum() {
    let number = Math.floor(Math.random() * 101)
    return number
}
let result = RandomNum()


let storeNum = []
let attemp = 0
let maxAttemp = 10

submit.addEventListener('click', () => {
    // console.log(result)
    let inputVal = Number(input.value)
    attemp++
    storeNum.push(inputVal)

    if (inputVal > result) {
        input.value = ''
        resultElem.innerHTML = ` ${inputVal} is to high ! `
    } else if (inputVal < result) {
        input.value = ''
        resultElem.innerHTML = ` ${inputVal} is to Low ! `
    } else if (inputVal == result) {
        input.value = ''
        resultElem.innerHTML = ` You got it in ${storeNum.length} guesses!The number was ${inputVal}. `
        submit.disabled = true
    }
    guessItem.innerHTML = ` your guesses : ${storeNum.join(', ')} `
    if (attemp === maxAttemp) {
        submit.disabled = true
        resultElem.innerHTML = `Game Over! The number was ${result} `
    } else if (inputVal == '') {
        attemp--
        return alert('Enter guess number ')
    }


})
input.addEventListener('keydown', (event) => {
    console.log(result)
    let inputVal = Number(input.value)
    if(event.key==='Enter'){
        attemp++
        storeNum.push(inputVal)
        if (inputVal > result) {
        input.value = ''
        resultElem.innerHTML = ` ${inputVal} is to high ! `
    } else if (inputVal < result) {
        input.value = ''
        resultElem.innerHTML = ` ${inputVal} is to Low ! `
    } else if (inputVal == result) {
        input.value = ''
        resultElem.innerHTML = ` You got it in ${storeNum.length} guesses!The number was ${inputVal}. `
        input.disabled = true
        submit.disabled = true
    }
        guessItem.innerHTML = ` your guesses : ${storeNum.join(', ')} `
    if (attemp === maxAttemp) {
        input.disabled = true
        submit.disabled = true  
        resultElem.innerHTML = `Game Over! The number was ${result} `
    } else if (inputVal == '') {
        attemp--
        return alert('Enter guess number ')
    }
    }


})
game.addEventListener('click', () => {
    // RandomNum()
    result = RandomNum()
    console.log(result)
    storeNum = []
    attemp = 0
    maxAttemp = 10
    resultElem.innerHTML = ''
    guessItem.innerHTML = ''
    input.value = ''
    submit.disabled = false
    input.disabled = false
})