
var nameFilterDiv = document.getElementById('nameFilter');
var manufacturerFilterDiv = document.getElementById('manufacturerFilter');
var customerDiv = document.getElementById('customer_report');
var warrantyDiv = document.getElementById('warranty_report');
var orderDiv = document.getElementById('order_report');
var dateDiv = document.getElementById('dateTo');
var dateFromDiv = document.getElementById('dateFrom');
var btnGenerate = document.getElementById('btn_generate');

var reportSelect = document.getElementById('reportTypes');

document.addEventListener('DOMContentLoaded', function () {
  var rows = document.querySelectorAll('.data-table tbody tr');

  rows.forEach(function (row) {
    row.addEventListener('click', function () {
      window.location.href = " ";
    });
  });

  var generateBtn = document.getElementById('btn_generate');

  nameFilterDiv.style.display = 'none';
  manufacturerFilterDiv.style.display = 'none';
  customerDiv.style.display = 'none';
  warrantyDiv.style.display = 'none';
  orderDiv.style.display = 'none';
  dateDiv.style.display = 'none';
  dateFromDiv.style.display = 'none';
  btnGenerate.style.display = 'none';

  reportSelect.addEventListener('change', function () {
    handleReportChange(this.value);
  });

  generateBtn.addEventListener('click', function (event) {
    event.preventDefault();
    handleReportGeneration(reportSelect.value);
  });

});

function handleReportChange(selectedReport) {

  var reportTitle = document.getElementById('reportTitle');

  switch (selectedReport) {
    case 'select':
      // Logic for Customer Report
      nameFilterDiv.style.display = 'none';
      dateDiv.style.display = 'none';
      dateFromDiv.style.display = 'none';
      btnGenerate.style.display = 'none';
      manufacturerFilterDiv.style.display = 'none';
      reportTitle.textContent = 'Choose a report';
      break;
    case 'customerReport':
      // Logic for Customer Report
      nameFilterDiv.style.display = 'flex';
      dateDiv.style.display = 'flex';
      dateFromDiv.style.display = 'flex';
      btnGenerate.style.display = 'flex';
      manufacturerFilterDiv.style.display = 'none';
      reportTitle.textContent = 'Customer Report';
      break;
    case 'warrantyReport':
      // Logic for Warranty Report
      nameFilterDiv.style.display = 'none';
      manufacturerFilterDiv.style.display = 'flex';
      dateDiv.style.display = 'flex';
      dateFromDiv.style.display = 'flex';
      btnGenerate.style.display = 'flex';
      reportTitle.textContent = 'Warranty Report';
      break;
    case 'orderReport':
      // Logic for Order Report
      nameFilterDiv.style.display = 'flex';
      manufacturerFilterDiv.style.display = 'none';
      dateDiv.style.display = 'flex';
      dateFromDiv.style.display = 'flex';
      btnGenerate.style.display = 'flex';
      reportTitle.textContent = 'Order Report';
      break;
    default:
      console.log('No report selected');
  }
}

function handleReportGeneration(selectedReport) {
  switch (selectedReport) {
    case 'customerReport':
      customerDiv.style.display = 'flex';
      warrantyDiv.style.display = 'none';
      orderDiv.style.display = 'none';
      break;
    case 'warrantyReport':
      customerDiv.style.display = 'none';
      warrantyDiv.style.display = 'flex';
      orderDiv.style.display = 'none';
      break;
    case 'orderReport':
      customerDiv.style.display = 'none';
      warrantyDiv.style.display = 'none';
      orderDiv.style.display = 'flex';
      break;
  }
}
