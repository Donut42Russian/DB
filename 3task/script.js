function number_click(){
    var num = document.getElementById("numbers_input").value

    if(num % 2 == 0){
        document.getElementById('result').innerHTML = factirial(num)
    }
    else {
        document.getElementById('result').innerHTML = avg(num)
    }
}

function factirial(digit){
    var new_digit = 1

    for(let i=1;i <= digit; i++) {
        new_digit *= i
    }

    return new_digit
}

function avg(digit) {
    var new_digit = 0

    for(let i=1;i <= digit; i++) {
        new_digit += i
    }

    return new_digit / digit
}