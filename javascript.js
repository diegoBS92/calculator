let num = document.querySelectorAll('.num')
let operator = document.querySelectorAll('.operator')
let reset = document.querySelector('.reset')
let result = document.querySelector('.result')
let display = document.querySelector('.number')

display.textContent= '0'
let a = ''
let b = ''
let c = ''
let results = ''

num.forEach(num => {
    num.addEventListener('click', getNum)
});
operator.forEach(operator => {
    operator.addEventListener('click', getOperator)
});

result.addEventListener("click", getResult)
reset.addEventListener('click', ()=> {
    display.textContent = 0
    a, b, c, result  = ''
})


function getNum() {
    
    display.textContent += this.textContent
}
function getOperator() {
    a = display.textContent  
    display.textContent = this.textContent 
    b = this.textContent
    display.textContent =0
    

}
function getResult() {
    c = display.textContent 
    console.log(a,b,c)
    switch (b) {
        case '*':
            result = (+(a)) * (+(c))
            break;
        case '/':
            result = (+(a)) / (+(c))
            break;
        case '+':
            result = (+(a)) + (+(c))
            break;
        case '-':
            result = (+(a)) - (+(c))
            break; 
    }
    display.textContent = result
}

