// Function to append values to the display
function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to send calculation to the server
function calculateResult() {
    let display = document.getElementById('display');
    let expression = display.value;
    
    // Send the expression to the Python backend
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ expression: expression })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            display.value = 'Error';
        } else {
            display.value = data.result;
        }
    })
    .catch(error => {
        display.value = 'Error';
    });
}

// Function to handle backspace
function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

then(data => {
    console.log(data);  // Add this line to log the data returned from the server
    if (data.error) {
        display.value = 'Error';
    } else {
        display.value = data.result;  // Ensure the result is correctly placed in the display
    }
})
fetch('/calculate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ expression: expression })
})
.then(response => {
    console.log(response);  // Log the raw response to inspect its status
    return response.json();
})
.then(data => {
    console.log(data);  // Check what the server returns
    if (data.error) {
        display.value = 'Error';
    } else {
        display.value = data.result;
    }
})
.catch(error => {
    display.value = 'Error';
    console.log(error);  // Log any fetch errors
});

