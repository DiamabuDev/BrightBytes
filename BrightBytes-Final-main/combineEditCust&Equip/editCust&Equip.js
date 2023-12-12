document.addEventListener('DOMContentLoaded', function () {
    // Initially hide the Equipment form
    toggleEquipmentForm(false);

    // Add event listener to the EquipList dropdown
    document.getElementById('equipList').addEventListener('change', function() {
        if (this.value !== 'Select') {
            // Show Equipment form
            toggleEquipmentForm(true);
        } else {
            // Hide Equipment form
            toggleEquipmentForm(false);
        }
    });
});

function toggleEquipmentForm(isVisible) {
    var form = document.querySelector('.equipment-form');

    if (form) {
        // Toggle visibility
        form.style.display = isVisible ? 'block' : 'none';

        // Enable or disable all inputs and buttons within the form
        var inputs = form.getElementsByTagName('input');
        var selects = form.getElementsByTagName('select');
        var buttons = form.getElementsByTagName('button');
        var buttonContinue = document.getElementById('btn-continue');

        for (var input of inputs) {
            input.disabled = !isVisible;
        }

        for (var select of selects) {
            select.disabled = !isVisible;
        }

        for (var button of buttons) {
            button.disabled = !isVisible;
        }

        buttonContinue.disabled = !isVisible;
    }
}

document.getElementById('customer-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Flags to track if all fields are filled
    let allFieldsFilled = true;

    // List of all input and select field IDs
    const fieldIds = ['txtFirstName', 'txtLastName', 'txtPhone', 'txtEmail', 'txtAddress', 'txtPostal', 'cities', 
    'province'];

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

    // If all fields are filled
    if (allFieldsFilled) {
        document.getElementById('customer-message').innerHTML = "Changes saved";
    }
});

document.getElementById('equipment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Flags to track if all fields are filled
    let allFieldsFilled = true;

    // List of all input and select field IDs
    const fieldIds = ['txtEquipName', 'txtEquipModel', 'txtVIN', 'txtManufacturer', 'txtColor', 'warranty'];

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
        document.getElementById('equipment-message').innerHTML = "Changes saved";
    }
});
