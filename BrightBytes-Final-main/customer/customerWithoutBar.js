document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Flags to track if all fields are filled
    let allFieldsFilled = true;

    // List of all input and select field IDs
    const fieldIds = ['txtFirstName', 'txtLastName', 'txtPhone', 'txtEmail', 'txtAddress', 'txtPostal', 'cities', 'province'];

    // Check each field
    fieldIds.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const errorSpan = document.getElementById('error' + fieldId.charAt(0).toUpperCase() + fieldId.slice(1));
        
        // For select, check if the selected value is 'Select'
        // For input, check if the value is empty
        if ((field.tagName === 'SELECT' && field.value === 'Select') || (field.tagName === 'INPUT' && field.value.trim() === '')) {
            errorSpan.style.display = 'block'; // Show error message
            allFieldsFilled = false;
        } else {
            errorSpan.style.display = 'none'; // Hide error message
        }
    });

    // If all fields are filled, execute ToOptionEquipOrNoEquip
    if (allFieldsFilled) {
        ToEquipOption();
    }
});
