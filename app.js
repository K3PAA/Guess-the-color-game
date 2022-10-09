const randomColor = document.querySelector('.random-color')
let nums = []

const colors = []
const scoreDisplay = document.querySelector('.score')
const timeLeftDisplay = document.querySelector('.timeLeft')
const reset = document.querySelector('.reset')
const easy = document.querySelector('.easy')
const hard = document.querySelector('.hard')
const grid = document.querySelector('.colors-container')

let points = 0
let timeLeft = 30
let goodAnswer
let amount
let random = []

function checkForDifficulty(){
let div
    if(easy.className.includes('active')){
        amount = 4
        for(let i=1; i<=amount; i++){
            div = document.createElement('div')
            div.classList.add('color')
            div.setAttribute('id', i)
            grid.appendChild(div)
            colors.push(div)
        }
        randomColors(amount)
    }
     if(hard.className.includes('active')){
        amount = 8
        for(let i=1; i<=amount; i++){
            div = document.createElement('div')
            div.classList.add('color')
            div.setAttribute('id', i)
            grid.appendChild(div)
            colors.push(div)
        }
        randomColors(amount)
    }

}

checkForDifficulty()

function randomColors(amount){
    for(let i=0; i<amount; i++){
    for(let i=0; i<3; i++){
        random[i] = Math.floor(Math.random() * 255)
        }   
        colors[i].style.background = `rgb(${random[0]}, ${random[1]}, ${random[2]})`
    }

    for(let i = 0; i<3; i++){
    const random = Math.floor(Math.random() * 255)
    nums[i] = random
    }
    randomColor.innerHTML = `${nums[0]},${nums[1]},${nums[2]}`

    let answerColor = colors[Math.floor(Math.random() * amount)]
    answerColor.style.background = `rgb(${nums[0]},${nums[1]},${nums[2]})`
    goodAnswer = answerColor.id
    console.log(goodAnswer)
}

colors.forEach(color => {
    color.addEventListener('click', ()=>{
        if(color.id == goodAnswer){
            points ++
            scoreDisplay.innerHTML = points
        }
        randomColors(amount)
    })
})


reset.addEventListener('click', ()=>{
        points = 0
        timeLeft = 30
        
        randomColors(amount)
})
    
easy.addEventListener('click', (e)=> {
    const curr = e.currentTarget.className

    if(curr.includes('active')){
        easy.classList.remove('active')
        hard.classList.add('active')
    }else{
        easy.classList.add('active')
        hard.classList.remove('active')
    }
    checkForDifficulty()
})

hard.addEventListener('click', (e)=> {
    const curr = e.currentTarget.className

    if(curr.includes('active')){
        hard.classList.remove('active')
        easy.classList.add('active')
        
    }else{
        hard.classList.add('active')
        easy.classList.remove('active')
    }
    checkForDifficulty()
})

