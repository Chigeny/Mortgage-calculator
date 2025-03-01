function reset() {
    document.getElementByid("mortgageAmount"). value = "0";
    document.getElementByid("mortgageTerm"). value = "0";
    document.getElementByid("interestRate"). value = "0";
}

function multiplyBy() {
 var num1=   Number(document.getElementByid("mortgageAmount"). value);
 var num2 = Number(document.getElementByid("mortgageTerm"). value);
 var num3= Number(document.getElementByid("InterestRate"). value);
 var sum = Number(document.getElementById("calculateRepayment"));
 alert(sum);
}