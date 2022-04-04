document.getElementById('deposite-button').addEventListener('click', function () {
    const depsositeField = document.getElementById('deposite-input');
    const depsiteValue = depsositeField.value;
    const depositeShow = document.getElementById('deposite');
    const finalDeposite = parseFloat(depositeShow.innerText) + parseFloat(depsiteValue);
    depositeShow.innerText = finalDeposite;

    const previousBalance = document.getElementById('balance');
    const previousBalanceText = previousBalance.innerText;
    const updatedPreviousBalance = parseFloat(previousBalanceText)
    
    const finalBalance = updatedPreviousBalance + parseFloat(depsiteValue);
    previousBalance.innerText = finalBalance

    depsositeField.value = "";

})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawInput = withdrawField.value;
    const withdrawShow = document.getElementById('withdraw');
    const finalWithdraw = parseFloat(withdrawShow.innerText) + parseFloat(withdrawInput);

    withdrawShow.innerText = finalWithdraw;

    const withdrawBalance = document.getElementById('balance');
    const balanceText = withdrawBalance.innerText;
    const balanceTotal = parseFloat(balanceText);
    const updatedBalance = balanceTotal - parseFloat(withdrawInput);
    withdrawBalance.innerText = updatedBalance;

    

    withdrawField.value = "";
})