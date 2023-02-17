// step 1: add event handler to the deposit button
document.getElementById("btn-deposit").addEventListener("click",function() {
    // step 2: get the previous withdraw amount from the withdraw field and clear field
    const newDepositAmount = getInputFieldValueById("deposit-field");

    // step 3: get previous deposit total by id
    const previousDepositTotal = getTextElementValueById("deposit-total");

    // step 4: calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // step 5: set new deposit value
    setTextElementValueById("deposit-total", newDepositTotal);

    // step 6: get previous balance by using function
    const previousBalanceTotal = getTextElementValueById("balance-total");

    // step 7: calculate total current balance and set the balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById("balance-total", currentBalanceTotal);
});