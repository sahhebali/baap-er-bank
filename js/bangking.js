// handle addEventListener
document.getElementById('diposit-button').addEventListener('click', function () {
    // get amount diposited
    const dipositInput = document.getElementById('diposit-input')
    const newDipositAmountText = dipositInput.value;
    const newDipositAmount = parseFloat(newDipositAmountText);

    // update deposit total
    const dipositTotal = document.getElementById('diposit-total');
    const previousDipositText = dipositTotal.innerText;
    const previousDipositAmount = parseFloat(previousDipositText);

    const newDipositTotal = previousDipositAmount + newDipositAmount;
    dipositTotal.innerText = newDipositTotal;
    // update account blance
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousblanceTotal = parseFloat(blanceTotalText);
    const newBlancetotal = previousblanceTotal + newDipositAmount;
    blanceTotal.innerText = newBlancetotal;

    // clear the diposit input field
    dipositInput.value = '';
})

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);



    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // clear withdraw input
    withdrawInput.value = '';


    // update balance
    const balanceTotal = document.getElementById('blance-total');
    const previousBlanceText = balanceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceText);
    const availableBlance = previousBlanceTotal - newWithdrawAmount;
    balanceTotal.innerText = availableBlance;

})




