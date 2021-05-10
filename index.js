// $("body").css({"background-color":"blue"}); 
var num1 = [];
var num2 = [];
var secondChoice = false;
var opperand;
var answer;
$(".numButtons").click(function(e){
    var idClicked = e.target.id;
    if (idClicked == "="){
        var num1Sum = loopThrough(num1);
        var num2Sum = loopThrough(num2);
        answer = calculation(parseInt(num1Sum), parseInt(num2Sum), opperand);
        $('.sum').attr('placeholder', answer);

    }else if(idClicked == "+" || idClicked == "-" || idClicked == "*" || idClicked == "/"){
        opperand = idClicked;
        var placeholdertxt = loopThrough(num1);
        $('.sum').attr('placeholder', placeholdertxt + " " + opperand);
        if (!secondChoice) {
            secondChoice = true;
        }
    }else{
        if (!secondChoice) {
            num1.push(idClicked);
            var placeholderTxt = loopThrough(num1);
            $('.sum').attr('placeholder', placeholderTxt);
        }else{
            num2.push(idClicked);
            var placeholderTxt1 = loopThrough(num1);
            var placeholderTxt2 = loopThrough(num2);

            $('.sum').attr('placeholder', placeholderTxt1 + " " + opperand + " "+ placeholderTxt2);
        }
    }
    $(this).removeClass("unclicked");
    $(this).addClass("clicked");
    setTimeout(() => {

        $(this).removeClass("clicked");
        $(this).addClass("unclicked");
    }, 100);
    
})

function calculation (a, b, opp){
    switch (opp) {
        case "+":
            restart();
            return a + b;
        case "-":
            restart();
            return a - b;
        case "*":
            restart();
            return a * b;
        case "/":
            restart();
            return a / b;
        default:
            alert("Something went wrong with the calculation, please only enter /, *, -, or +");
            break;
    }
}

function restart(){
    num1 = [];
    num2 = [];
    secondChoice = false;
}

function loopThrough(array){
    var result = "";
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}