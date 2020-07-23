const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((numbers) => {
    numbers.addEventListener("click", () => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

let prevNumber = ""
let calculationOperator = ""
let currentNumber = "0"

const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === "") {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ""
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ""
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseInt(prevNumber) - parseInt(currentNumber)
            break
        case "*":
            result = parseInt(prevNumber) * parseInt(currentNumber)
            break
        case "/":
            result = parseInt(prevNumber) / parseInt(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ""
}

const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ""
    calculationOperator = ""
    currentNumber = "0"
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener("click", () => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return
    }
    currentNumber += dot
}

const percent = document.querySelector(".percentage")

percent.addEventListener('click', () => {
    countPercen()
    updateScreen(currentNumber)
})

const countPercen = () => {
    currentNumber = parseInt(currentNumber) / 100
}
