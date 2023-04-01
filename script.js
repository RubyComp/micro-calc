const depositInput = document.getElementById('calculator-val-deposit');
const timeInput = document.getElementById('calculator-val-time');
const resultOutput = document.getElementById('calculator-result');

const depositShow = document.getElementById('calculator-show-deposit');
const timeShow = document.getElementById('calculator-show-time');

const cur = '$USDC';

const spacedNum = (number, digit = ',') => {
	if (number > 9999)
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, /*'\u00A0'*/ digit)
	else
		return number;
}

const format = (numb) => {
	const round = Math.round(numb)
	return spacedNum(round);
}

const calculateProfit = (deposit, months) => {
	const interestRate = 0.15;
	const period = months / 12;

	const profit = deposit * interestRate * period;

	resultOutput.textContent = `${format(profit)} ${cur}`;
	depositShow.textContent = `${format(deposit)} ${cur}`;
	timeShow.textContent = `${months} mounths`;
}

const calcListner = () => {
	const deposit = Number(depositInput.value);
	const months = Number(timeInput.value);

	calculateProfit(deposit, months);
}
depositInput.value = 5000;
timeInput.value = 12;

document.addEventListener("DOMContentLoaded", function(event) { 
	calculateProfit(depositInput.value, timeInput.value);
});

depositInput.addEventListener('input', calcListner);
timeInput.addEventListener('input', calcListner);
