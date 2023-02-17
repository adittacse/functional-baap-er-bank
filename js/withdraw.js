// step 1: add event handler with the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function() {
    // step 2: get the previous withdraw amount from the withdraw field and clear field
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");

    // step 3: get previous withdraw total by id
    const previousWithdrawTotal = getTextElementValueById("withdraw-total");

    // step 4: calculate new withdraw total
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // step 5: set new withdraw value
    setTextElementValueById("withdraw-total", newWithdrawTotal);

    // step 6: get previous balance
    const previousBalanceTotal = getTextElementValueById("balance-total");

    // step 7: reduce withdraw amount from previous balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // step 8: set the current balance amount
    setTextElementValueById("balance-total", currentBalanceTotal);
});