document.addEventListener('DOMContentLoaded', function () {
    var rows = document.querySelectorAll('.data-table tbody tr');

    rows.forEach(function (row) {
        row.addEventListener('click', function () {
            window.location.href = '../editEquipment/editEquipment.html';
        });
    });
});

function filterRows() {
  var nameFilter = document.getElementById('nameFilter').value.toLowerCase();
  var statusFilter = document.getElementById('statusFilter').value.toLowerCase();

  var rows = document.querySelectorAll('.data-table tbody tr');

  rows.forEach(function (row) {
    var rowName = row.children[0].textContent.toLowerCase();
    var rowStatus = row.children[3].textContent.toLowerCase();
    var nameMatch = rowName.includes(nameFilter);
    var statusMatch = statusFilter === '' || rowStatus === statusFilter;

    if (nameMatch && statusMatch) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  });
}

document.getElementById('nameFilter').addEventListener('input', filterRows);
document.getElementById('statusFilter').addEventListener('input', filterRows);