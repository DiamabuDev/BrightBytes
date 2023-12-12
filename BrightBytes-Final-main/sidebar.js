document.addEventListener('DOMContentLoaded', function() {
    // Get the selected role from localStorage (assuming it's stored there after login)
    var selectedRole = localStorage.getItem('userRole');

    if(selectedRole == "technician"){
        var sidebar = document.getElementById('mySidebar');

    // Get all the links inside the sidebar
        var links = sidebar.getElementsByTagName('a');

// Loop through the links and hide all except "Repairs"
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            link.style.display = 'block'; // Show "Repairs"
            if (selectedRole === 'technician') {
                // Check if the link is not for "Repairs"
                if (link.textContent.trim().toLowerCase() !== 'repairs') {
                  link.style.display = 'none'; // Hide other links
                } else {
                  link.style.display = 'block'; // Show "Repairs"
                }
              }}
  }
if(selectedRole == "salesperson"){
    var sidebar = document.getElementById('mySidebar');

  // Get all the links inside the sidebar
  var links = sidebar.getElementsByTagName('a');

  // Loop through the links and hide "Repairs"
  for (var i = 0; i < links.length; i++) {
    var link = links[i];

    // Check if the link is for "Repairs"
    if (link.textContent.trim().toLowerCase() === 'repairs') {
      link.style.display = 'none'; // Hide "Repairs"
    } else {
      link.style.display = 'block'; // Show other links
    }
  }

}});