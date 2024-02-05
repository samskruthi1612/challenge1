// const incomeAmt=document.querySelector('#income-amt')
// const expenseAmt=document.querySelector('#expense-amt')
// const trans=document.querySelector('.transactions')
// const formItems=document.querySelector('.formTransac')
// const textEl=document.querySelector('#text')
// const amount=document.querySelector('#amount')
// const transaction=[{
//     name:'shopping', amount:-500, id:1 ,
//     name:'salary' , amount:4000 ,id:2 ,
//     name:'toys' , amount:-300, id:3,
//     name:'clothes',amount:-500, id:4
// }]

// let transactionEl=transaction;
// function addTransaction(transactionEl){
//     const sign=transactionEl.amount < 0 ? "-" : "+";
//     const items=document.createElement('li');
    
//     items.classList.add(
//         transactionEl[0].amount < 0 ? "income" : "expense"
//         );
//     trans.appendChild(items)
        

// }
let text = '';
let amount = '';
let button = document.querySelector('.submit-transaction')
// console.log(button)
button.addEventListener('click',function(){
    text = document.querySelector('#text').value;
    amount =  document.querySelector('#amount').value;
    document.querySelector('#text').value = "";
    document.querySelector('#amount').value = "";

    const li=document.createElement('li');
    const span=document.createElement('span');
    const txt=document.createTextNode(`${text}`);
    const amt=document.createTextNode(`${amount}`);

    li.appendChild(txt);
    li.appendChild(span);
    span.appendChild(amt);
    console.log(li);
    buttonclassList.add('remove-btn')

    let income = document.querySelector('.transactions')
    income.appendChild(li);
    
})


