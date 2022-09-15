function updateCaseNumber(isIncrase){
    const caseNumberField = document.getElementById('case-number-field');

    const caseNumberString = caseNumberField.value;
    const prevCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrase === true){
        newCaseNumber = prevCaseNumber + 1;
    }
    else{
        newCaseNumber = prevCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;

    
}
function casingPrice(caseNumber){
    const casePriceField = document.getElementById('case-price');

    const newPrice = caseNumber * 59;

    casePriceField.innerText = newPrice;
}
document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(true);
    casingPrice(newCaseNumber);
    calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    

    const newCaseNumber = updateCaseNumber(false);
    casingPrice(newCaseNumber);
    calculateSubTotal();
    
})