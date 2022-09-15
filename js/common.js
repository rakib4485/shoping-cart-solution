function getTextElementById(elemntId){
    const phoneTotalElement = document.getElementById(elemntId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setElementValueById(elemntId, value){
    const subTotalElement = document.getElementById(elemntId);
    subTotalElement.innerText = value;
}
function calculateSubTotal(){
    const currentPhoneTotal = getTextElementById('phone-price');
    const currentCaseTotla = getTextElementById('case-price');
    const currentSubTotal = currentPhoneTotal + currentCaseTotla;
    
    setElementValueById('sub-total', currentSubTotal);

    // calculate tax total
    const taxAmmountString = (currentSubTotal * 0.05).toFixed(2);
    const taxAmmount = parseFloat(taxAmmountString);
    setElementValueById('tax-total', taxAmmount);

    //calculate total ammount
    const finalAmmount = currentSubTotal + taxAmmount;
    setElementValueById('final-total', finalAmmount);
}