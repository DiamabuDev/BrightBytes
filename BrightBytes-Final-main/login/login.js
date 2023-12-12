
document.getElementById('signIn').addEventListener('click', function() {
    // Get the selected role from the dropdown
    
    var selectedRole = document.getElementById('role').value;
    localStorage.setItem('userRole', selectedRole);
    if(selectedRole == "technician"){
        window.location.href = '../repairs/repairs.html';
    }else{
        window.location.href = '../index.html';
    }
  });
  
  