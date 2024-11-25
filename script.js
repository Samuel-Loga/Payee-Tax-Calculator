document.getElementById('calculateButton').addEventListener('click', function () {
  const grossPay = parseFloat(document.getElementById('grossPay').value);
  if (isNaN(grossPay) || grossPay <= 0) {
    alert('Please enter a valid gross pay amount.');
    return;
  }

  let deduction = 0;

  if (grossPay > 2550000) {
    deduction += (grossPay - 2550000) * 0.35;
  }
  if (grossPay > 2050000) {
    deduction += Math.min(grossPay - 2050000, 500000) * 0.30;
  }
  if (grossPay > 150000) {
    deduction += Math.min(grossPay - 150000, 350000) * 0.25;
  }

  const netPay = grossPay - deduction;

  document.getElementById('resultGrossPay').textContent = grossPay.toFixed(2);
  document.getElementById('resultDeduction').textContent = deduction.toFixed(2);
  document.getElementById('resultNetPay').textContent = netPay.toFixed(2);

  document.getElementById('results').classList.remove('hidden');
});
