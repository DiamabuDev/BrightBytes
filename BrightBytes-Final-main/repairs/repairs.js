document.addEventListener('DOMContentLoaded', function () {
    var rows = document.querySelectorAll('.order-table tbody tr');

    rows.forEach(function (row) {
        row.addEventListener('click', function () {
            window.location.href = '../repairEdit/repairEdit.html';
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