const BTN_INCREMENT = document.querySelector("[data-btn-increment]");
const BTN_DECREMENT = document.querySelector("[data-btn-decrement]");
const COUNTER = document.querySelector("[data-counter]");

function lessThanTen(){
    if(COUNTER.dataset.counter < 10){
        return 1;
    } else{
        return 0;
    }
}

function greaterThanMinusTen(){
    if(COUNTER.dataset.counter > -10){
        return 1;
    } else{
        return 0;
    }
}

function isNegative(){
    if(COUNTER.dataset.counter < 0){
        COUNTER.style.color = "#ff74d5"
    } else {
        COUNTER.style.color = "#b9b9b9"
    }
}


function counterIncrement(){
        if(lessThanTen()){
            COUNTER.innerHTML = ++COUNTER.dataset.counter;
            isNegative();
        }
}

function counterDecrement(){
        if(greaterThanMinusTen()){
            COUNTER.innerHTML = --COUNTER.dataset.counter;
            isNegative();
        }
}


BTN_DECREMENT.addEventListener('click', counterDecrement);
BTN_INCREMENT.addEventListener('click', counterIncrement);