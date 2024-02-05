
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
//  expList:[{
//     name:'shopping', amount:500 ,
//     name:'salary' , amount:4000 
// }]
// }

}
const balanceEl=document.querySelector('#balance-amt')
const incomeEl=document.querySelector('#income-amt')
const expenseEl=document.querySelector('#expense-amt')
const formItems=document.querySelector('.formTransac')
const listItems=document.querySelector('.items')
const textEl=document.querySelector('#text')
const amount=document.querySelector('#amount')
// const buttonClick=document.querySelector('remove-btn')

function init(){
    balanceEl.innerHTML= `$${state.balanceAmt}`
    incomeEl.innerHTML= `$${state.incomeAmt}`
    expenseEl.innerHTML= `$${state.expenseAmt}`

}
init();

// function removeItems(){
//     var remove=document.getElementsByClassName('remove-btn');
//     remove.addEventListener("click",function()){
          
//     }
const transactions=[{
    name:'shopping', amount:-500, id:1 ,
    name:'salary' , amount:4000 ,id:2 ,
    name:'toys' , amount:-300, id:3,
    name:'clothes',amount:-500, id:4
}]
let transactionsEl=transactions;

function addTransaction(transactionEl){
    const sign= transactionEl.amount < 0 ? "-" : "+";
    const item=document.createElement('li');

    item.classList.add(
        transactionEl[0].amount < 0 ? "expense" : "income"   
    );

    item.innerHTML=`
        ${transactionEl[0].name}<span>${sign}${Math.abs(transactionEl[0].amount
        )}</span>
        <button class="remove-btn" onclick="">-</button>
        `;
    
listItems.appendChild(item);
}
addTransaction(transactionsEl);

 // spanText.value=text;
    // spanAmt.value=amount;







