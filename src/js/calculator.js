(function () {
    // Shortcut to get elements
    var el = function (element) {
        if (element.charAt(0) === "#") {
            // If passed an ID...
            return document.querySelector(element); // ... returns single element
        }

        return document.querySelectorAll(element); // Otherwise, returns a nodelist
    };

    // Variables
    var calculatorContainer = el("#calculator"); // Calculator container
    var viewer = el("#viewer"); // Calculator screen where result is displayed
    var equalsButton = el("#equals"); // Equals button
    var clearButton = el("#clear"); // Clear button
    var numberButtons = el(".num"); // List of numbers
    var operatorButtons = el(".ops"); // List of operators
    var currentNumber = ""; // Current number
    var previousNumber = ""; // First number
    var resultNumber = 0; // Result
    var operator = ""; // Selected operator
    var DECIMAL_SEPARATOR = ".";

    // When: Number is clicked. Get the current number selected
    var setNum = function () {
        if (resultNumber) {
            // If a result was displayed, reset number
            currentNumber = this.getAttribute("data-num");
            resultNumber = "";
        } else {
            // Otherwise, add digit to previous number (this is a string!)

            // If '.' is clicked and was already set, ignore it.
            if (this.dataset.num === DECIMAL_SEPARATOR && currentNumber.includes(DECIMAL_SEPARATOR)) {
                return;
            }
            currentNumber += this.getAttribute("data-num");
        }

        viewer.innerHTML = currentNumber; // Display current number
    };

    // When: Operator is clicked. Pass number to oldNum and save operator
    var moveNum = function () {
        if (currentNumber) {
            previousNumber = currentNumber;
            currentNumber = "";
        }

        operator = this.getAttribute("data-ops");

        equalsButton.setAttribute("data-result", ""); // Reset result in attr
    };

    // When: Equals is clicked. Calculate result
    var displayNum = function () {
        // Convert string input to numbers
        previousNumber = parseFloat(previousNumber);
        currentNumber = parseFloat(currentNumber);

        // Perform operation
        switch (operator) {
            case "plus":
                resultNumber = previousNumber + currentNumber;
                break;

            case "minus":
                resultNumber = previousNumber - currentNumber;
                break;

            // If equal is pressed without an operator, keep number and continue
            default:
                resultNumber = currentNumber;
        }

        // If NaN or Infinity returned
        if (!isFinite(resultNumber)) {
            if (isNaN(resultNumber)) {
                // If result is not a number; set off by, eg, double-clicking operators
                resultNumber = "You broke it!";
            } else {
                // If result is infinity, set off by dividing by zero
                resultNumber = "Look at what you've done";
                calculatorContainer.classList.add("broken"); // Break calculator
            }
        }

        // Display result, finally!
        viewer.innerHTML = resultNumber;
        equalsButton.setAttribute("data-result", resultNumber);

        // Now reset oldNum & keep result
        previousNumber = 0;
        currentNumber = resultNumber;
    };

    // When: Clear button is pressed. Clear everything
    var clearAll = function () {
        previousNumber = "";
        currentNumber = "";
        viewer.innerHTML = "0";
        equalsButton.setAttribute("data-result", resultNumber);
    };

    /* The click events */

    // Add click event to numbers
    for (var i = 0, l = numberButtons.length; i < l; i++) {
        numberButtons[i].onclick = setNum;
    }

    // Add click event to operators
    for (var i = 0, l = operatorButtons.length; i < l; i++) {
        operatorButtons[i].onclick = moveNum;
    }

    // Add click event to equal sign
    equalsButton.onclick = displayNum;

    // Add click event to clear button
    clearButton.onclick = clearAll;
})();