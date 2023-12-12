function toggleSidebar() {
  var sidebar = document.getElementById('mySidebar');
  sidebar.classList.toggle('sidebar-expanded');
}
function redirectToOrders() {
  window.location.href = '../orders.html';
}
function newOrderClick() {
  window.location.href = '../newOrder/newOrder.html';
}
function recurringCustClick() {
  window.location.href = '../cust&equip/recurringCust.html';
}
function redirectHome(){
  window.location.href = '../index.html';
}

function redirectToCust(){
  window.location.href = "../customers/customers.html"
}

function redirectToInventory(){
  window.location.href = "../inventory.html"
}

document.addEventListener('DOMContentLoaded', function () {

  var rows = document.querySelectorAll('.order-table tbody tr');
  rows.forEach(function (row) {
    row.addEventListener('click', function () {
      var orderId = row.children[0].textContent;
      window.location.href = 'orderDetailsEditable/orderDetailsEditable.html?orderId=' + orderId;
    });
  });
});

function filterRows() {
  var nameFilter = document.getElementById('nameFilter').value.toLowerCase();
  var dateFilter = document.getElementById('dateFilter').value.toLowerCase();
  var statusFilter = document.getElementById('statusFilter').value.toLowerCase();

  var rows = document.querySelectorAll('.order-table tbody tr');

  rows.forEach(function (row) {
    var rowName = row.children[1].textContent.toLowerCase();
    var rowDate = row.children[0].textContent.toLowerCase();
    var rowStatus = row.children[3].textContent.toLowerCase();
    var nameMatch = rowName.includes(nameFilter);
    var dateMatch = rowDate.includes(dateFilter);
    var statusMatch = statusFilter === '' || rowStatus === statusFilter;

    if (nameMatch && dateMatch && statusMatch) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  });
}

document.getElementById('nameFilter').addEventListener('input', filterRows);
document.getElementById('dateFilter').addEventListener('input', filterRows);
document.getElementById('statusFilter').addEventListener('change', filterRows);

function NewCustClick() {
  window.location.href = '../newCustomer/newCustomer.html';
}

function NewOrderEquipOnClick() {
  window.location.href = '../newOrderNewCustEquip/newOrderNewCustEquip.html';
}
function GoBackToNewOrder() {
  window.location.href = '/newOrder/newOrder.html';
}
function AddNewEquipmentOnClick() {
  window.location.href = '/newEquipment/newEquipment.html';
}
function recurringEquipClick() {
  window.location.href = '../cust&equip/recurringEquip.html';
}
function ToOrderOnClick() {
  window.location.href = '../order/order.html';
}

function OrderWoutEquipOnClick() {
  window.location.href = '../orderWoutEquip/orderWoutEquip.html';
}

document.addEventListener('DOMContentLoaded', function () {
  var rows = document.querySelectorAll('.data-table tbody tr');

  rows.forEach(function (row) {
      row.addEventListener('click', function () {
          window.location.href = '../newOrderEquip/newOrderEquip.html';
      });
  });
});

function ToOrderFromNewOnClick() {
  window.location.href = '../orderFromNewEquip/orderFromNewEquip.html';
}

function saveOrderFromNewEquipClick() {
  window.location.href = '../orderFromNewEquip/orderDetailFromNewEquip.html';
}

function editOrderFromNewEquipClick() {
  window.location.href = '../orderFromNewEquip/orderEditFromNewEquip.html';
}