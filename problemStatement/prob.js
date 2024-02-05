
// var balanceAmt=document.getElementById('balance-amt');
// var incomeAmt=document.getElementById('income-amt');
// var expenseAmt=document.getElementById('expense-amt');
// var text=document.getElementById('text');
// var amount=document.getElementById('amount');

 
// var balanceAmt=document.getElementById('balance-amt')
//     balanceAmt,innerHTML=$('balance-amt')
var state={
 balanceAmt : 10000,
 incomeAmt:30000,
 expenseAmt:2000,
 expList:[{
    name:'shopping', amount:500 ,
    name:'salary' , amount:4000 
}]
}


const balanceEl=document.querySelector('#balance-amt')
const incomeEl=document.querySelector('#income-amt')
const expenseEl=document.querySelector('#expense-amt')

function init(){
    balanceEl.innerHTML= `$${state.balanceAmt}`
    incomeEl.innerHTML= `$${state.incomeAmt}`
    expenseEl.innerHTML= `$${state.expenseAmt}`

}
init();


