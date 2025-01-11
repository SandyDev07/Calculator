let currentValue = ''; // Store the current value being typed

// Select all number and operator buttons
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const screen = document.querySelector('.screen'); // Screen where we display the value

// Add event listeners to number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentValue += button.textContent; // Add the clicked number to the current value
        screen.textContent = currentValue; // Update the screen
    });
});

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        // If 'C' is clicked, reset the screen
        if (buttonText === 'C') {
            currentValue = '';
            screen.textContent = ''; // Clear the screen
        }

        // If '=' is clicked, calculate the result
        if (buttonText === '=') {
            // Check if currentValue has a valid expression
            if (currentValue !== '') {
                // Evaluate the expression and check for errors
                const result = eval(currentValue);
                if (isNaN(result)) {
                    screen.textContent = 'Error'; // If the result is not a number, show 'Error'
                } else {
                    currentValue = result.toString(); // Update the current value with the result
                    screen.textContent = currentValue; // Show the result on the screen
                }
            } else {
                screen.textContent = ''; // If nothing is entered, just clear the screen
            }
        }

        // Otherwise, if an operator is clicked, add it to the current value
        if (buttonText !== '=' && buttonText !== 'C') {
            currentValue += buttonText;
            screen.textContent = currentValue; // Update the screen
        }
    });
});
