// step 1: add event handler to the deposit button
document.getElementById("btn-deposit").addEventListener("click",function() {
    // step 2: get deposit amount from the deposit input field
    const depositField = document.getElementById("deposit-field");
    const newDepositAmount = parseFloat(depositField.value);

    // step 3: clear the deposit input field after getting the value
    depositField.value = "";

    // step 4: get the previous deposit total
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    // step 5: calculate new deposit total and set the value new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step 6: get previous balance
    const previousBalanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(previousBalanceTotalElement.innerText);

    // step 7: calculate total current balance and set the balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    previousBalanceTotalElement.innerText = currentBalanceTotal;
});