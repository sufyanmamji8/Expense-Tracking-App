let amountInput = document.getElementById("amountinput");
let balanceSpan = document.getElementById("balanceid");
let incomeSpan = document.getElementById("incomeid");
let expenseSpan = document.getElementById("expenseid");
let nameInput = document.getElementById("nameinput");
let incomebutton = document.getElementById("btn1");
let expensebutton = document.getElementById("btn2");
let tbody = document.querySelector("tbody"); // Assuming tbody is the tbody element in your table

let balance = 0;
let income = 0;
let expense = 0;
let sNo = 1;

function getCurrentTime() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  return { time, date };
}

function updateBalanceColor() {
  if (balance < 0) {
    balanceSpan.style.color = "red";
  } else {
    balanceSpan.style.color = "green";
  }
}

expensebutton.addEventListener("click", function () {
  if (nameInput.value === "" || amountInput.value === "") {
    alert("Enter both name and amount");
    return;
  }
  const amount = parseFloat(amountInput.value);
  if (amount > 0) {
    expense += amount;
    balance -= amount;
  } else {
    alert("Enter a valid amount");
    return;
  }
  const { time, date } = getCurrentTime();
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${sNo++}</td>
        <td>Expense</td>
        <td>${time}</td>
        <td>${date}</td>
        <td>${nameInput.value}</td>
        <td>-${amount.toFixed(2)}</td>
    `;
  tbody.appendChild(tr);
  balanceSpan.innerText = balance.toFixed(2);
  expenseSpan.innerText = expense.toFixed(2);
  updateBalanceColor();
  nameInput.value = "";
  amountInput.value = "";
});

incomebutton.addEventListener("click", function () {
  if (nameInput.value === "" || amountInput.value === "") {
    alert("Enter both name and amount");
    return;
  }
  const amount = parseFloat(amountInput.value);
  if (amount > 0) {
    income += amount;
    balance += amount;
  } else {
    alert("Enter a valid amount");
    return;
  }
  const { time, date } = getCurrentTime();
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${sNo++}</td>
        <td>Income</td>
        <td>${time}</td>
        <td>${date}</td>
        <td>${nameInput.value}</td>
        <td>+${amount.toFixed(2)}</td>
    `;
  tbody.appendChild(tr);
  balanceSpan.innerText = balance.toFixed(2);
  incomeSpan.innerText = income.toFixed(2);
  updateBalanceColor();
  nameInput.value = "";
  amountInput.value = "";
});

balanceSpan.innerText = balance.toFixed(2);
incomeSpan.innerText = income.toFixed(2);
expenseSpan.innerText = expense.toFixed(2);
updateBalanceColor();
