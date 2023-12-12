document.addEventListener('DOMContentLoaded', function () {
    var rows = document.querySelectorAll('.data-table tbody tr');

    rows.forEach(function (row) {
        row.addEventListener('click', function () {
            window.location.href = '../newOrderEquip/newOrderEquip.html';
        });
    });
});

function filterRows() {
    var nameFilter = document.getElementById('nameFilter').value.toLowerCase();
    var emailFilter = document.getElementById('emailFilter').value.toLowerCase();
    var phoneFilter = document.getElementById('phoneFilter').value.toLowerCase();
  
    var rows = document.querySelectorAll('.data-table tbody tr');
  
    rows.forEach(function (row) {
      var rowName = row.children[0].textContent.toLowerCase();
      var rowEmail = row.children[2].textContent.toLowerCase();
      var rowPhone = row.children[1].textContent.toLowerCase();
      var nameMatch = rowName.includes(nameFilter);
      var phoneMatch = rowPhone.includes(phoneFilter);
      var emailMatch = rowEmail.includes(emailFilter);
  
      if (nameMatch && phoneMatch && emailMatch) {
        row.style.display = 'table-row';
      } else {
        row.style.display = 'none';
      }
    });
  }
  
  document.getElementById('nameFilter').addEventListener('input', filterRows);
  document.getElementById('emailFilter').addEventListener('input', filterRows);
  document.getElementById('phoneFilter').addEventListener('input', filterRows);