function updatePhoneNumber(isIncrase){
    const phoneNumberField = document.getElementById('phone-number-field');

    const phoneNumberString = phoneNumberField.value;
    const prevPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if(isIncrase === true){
        newPhoneNumber = prevPhoneNumber + 1;
    }
    else{
        newPhoneNumber = prevPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;

    
}
function phonePrice(phoneNumber){
    const phonePriceField = document.getElementById('phone-price');

    const newPrice = phoneNumber * 1219;

    phonePriceField.innerText = newPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(true);
    phonePrice(newPhoneNumber)

    //calculate total
    calculateSubTotal();
    

});

document.getElementById('btn-phone-minus').addEventListener('click', function(){


    const newPhoneNumber = updatePhoneNumber(false);
    phonePrice(newPhoneNumber);
    calculateSubTotal();
    
})