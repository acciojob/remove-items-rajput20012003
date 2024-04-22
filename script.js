//your JS code here. If required.
// Function to remove the selected color from the dropdown list
function removeColor() {
    // Get the select element
    var selectElement = document.getElementById('colorSelect');
    // Get the index of the selected option
    var selectedIndex = selectElement.selectedIndex;
    // Remove the selected option
    selectElement.remove(selectedIndex);
}

// Add event listener to the button to trigger the removal of the selected color
document.querySelector('input[type="button"]').addEventListener('click', removeColor);

