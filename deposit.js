document.getElementById("btn-deposit").addEventListener('click', function(){
    const depositField =document.getElementById('deposit-field');
    const newdepositAmountString = depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountString);


    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);

    const currentDepositAmount = previousdepositTotal+newdepositAmount;

    depositTotalElement.innerText=currentDepositAmount;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalance+newdepositAmount;
    balanceTotalElement.innerText=currentBalanceTotal;


    





    depositField.value='';

})