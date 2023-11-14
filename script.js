class Calculator {
  constructor(currentOperator, prevOperator) {
    this.currentOperatorText = currentOperator;
    this.prevOperatorText = prevOperator;
    this.currentOperand = "";
    this.prevOperand = "";
    this.operation = undefined;
  }

  addNumber(number) {
    this.currentOperand += number;
  }
  operations(oper) {
    //errors
    if (!this.currentOperand) {
      return console.log("nema trenutnog");
    }
    if (this.prevOperand && this.operation) {
      if (!this.currentOperand) {
        return console.log("ima prethodnog i operatora ali nema trenutnog");
      }
    }

    //case without two parameters
    if (this.currentOperand && !this.prevOperand) {
      this.operation = oper;
      this.prevOperand = this.currentOperand;
      this.currentOperand = "";
      return;
    }

    //case with two parameters
    if (this.prevOperand) {
      switch (this.operation) {
        case "+": {
          const sum =
            parseFloat(this.prevOperand) + parseFloat(this.currentOperand);
          this.prevOperand = sum.toString();
          this.operation = oper;
          this.currentOperand = "";
          return
        }
        case "-": {
          const sum =
            parseFloat(this.prevOperand) - parseFloat(this.currentOperand);
          this.prevOperand = sum.toString();
          this.operation = oper;
          this.currentOperand = "";
          return
        }
        case "*": {
          const sum =
            parseFloat(this.prevOperand) * parseFloat(this.currentOperand);
          this.prevOperand = sum.toString();
          this.operation = oper;
          this.currentOperand = "";
          return
        }
        case "÷": {
          const sum =
            parseFloat(this.prevOperand) / parseFloat(this.currentOperand);
          this.prevOperand = sum.toString();
          this.operation = oper;
          this.currentOperand = "";
          return
        }
      }
    }
  }

  equal() {
    if(this.operation && this.currentOperand && this.prevOperand){
        this.operations(undefined)
        
        this.currentOperand = this.prevOperand
        this.prevOperand = '';
    }
  }

  update() {
    this.currentOperatorText.innerHTML = this.currentOperand;
    this.prevOperatorText.innerHTML =
      this.prevOperand + " " + (this.operation ? this.operation : "");
  }

  delete() {
    if (currentOperand) {
      this.currentOperand = this.currentOperand.slice(0, -1);
    }
  }
  allClear() {
    this.currentOperand = "";
    this.prevOperand = "";
    this.operation = undefined;
  }
}

const numberButton = document.querySelectorAll("[data-number]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const operationButton = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");

const calculator = new Calculator(currentOperand, previousOperand);

//console.log(`test:${currentOperand}`)

allClearButton.addEventListener("click", () => {
  calculator.allClear();
  calculator.update();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.update();
});
numberButton.forEach((button) => {
  const newNumber = button.innerHTML;
  console.log('pokteece petlju')

  button.addEventListener("click", (b) => {
    calculator.addNumber(newNumber);
    calculator.update();
  });
});
operationButton.forEach((button) => {
  const oper = button.innerHTML;
  button.addEventListener("click", (b) => {
    calculator.operations(oper);
    calculator.update();
  });
});
equalsButton.addEventListener('click' , () => {
    calculator.equal();
    calculator.update();
})
