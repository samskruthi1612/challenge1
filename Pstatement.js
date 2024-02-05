let transactionButton = document.querySelector('.submit-transaction');

// adding transactions

transactionButton.addEventListener('click', function () {
    let text = document.querySelector('#text');
    let amount = document.querySelector('#amount');

// Displaying transaction items

    let li = document.createElement('li');
    let spanText = document.createElement('span');
    let spanAmt = document.createElement('span');
    let btn = document.createElement('button');
    let spanTextNode = document.createTextNode(text.value);
    let spanAmtNode = document.createTextNode(`${amount.value}`);
    let btnTextNode = document.createTextNode('-')

    spanText.appendChild(spanTextNode);
    spanAmt.appendChild(spanAmtNode);
    btn.classList.add('remove-btn');
    btn.appendChild(btnTextNode);
    li.appendChild(spanText);
    li.appendChild(spanAmt);
    li.appendChild(btn);

    let ul = document.querySelector('.transactions');
    ul.appendChild(li);

    // showing balance,expense and income

    let parseAmt = parseFloat(amount.value);
    let incomeInc = document.querySelector('.incomeInc');
    let expenseInc = document.querySelector('.expenseInc');
    if (parseAmt > 0) {
        if (parseInt(incomeInc.innerHTML) == 0) {
            incomeInc.innerHTML = parseAmt;
            li.classList.add('border-green');
        }
        else {
            incomeInc.innerHTML = +incomeInc.innerHTML + parseAmt;
            li.classList.add('border-green');

        }
    }
    else {
        if (parseInt(expenseInc.innerHTML) == 0) {
            expenseInc.innerHTML = parseAmt * -1;
            li.classList.add('border-red');

        }
        else {
            expenseInc.innerHTML = +expenseInc.innerHTML + parseAmt * -1;
            li.classList.add('border-red');

        }
    }
    // if(typeof(parseAmt) = =
    
    document.querySelector('.balanceInc').innerHTML = parseFloat(incomeInc.innerHTML) - parseFloat(expenseInc.innerHTML)
    // clering the input fields
    text.value = '';
    amount.value = '';

    // deleting items from DOM

    btn.addEventListener('click', function () {        
        console.log(this.parentElement);
        let removeAmt = this.parentElement.children[1].innerHTML;
        if (removeAmt > 0) incomeInc.innerHTML = +incomeInc.innerHTML - removeAmt;
        else expenseInc.innerHTML = +expenseInc.innerHTML + (+removeAmt);
        document.querySelector('.balanceInc').innerHTML = parseFloat(incomeInc.innerHTML) - parseFloat(expenseInc.innerHTML)


        console.log(removeAmt)
        this.parentElement.remove();
    })


});


// let key = prompt('enter the key value')
// let value = prompt('enter the value')

// localStorage.setItem(key, value)
// console.log(`the value of ${key} is ${value}`)

// 



