document.addEventListener("DOMContentLoaded", function () {

    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
    /*console.log(display);
    console.log(buttons);*/

    let currentValue = "";

    function evaluateResult() {
        console.log('currentValue:', currentValue)
        const convertedValue = currentValue
            .replace("×", "*")
            .replace("+", "/")
            .replace("%", "*0.01")
            .replace("sin", "Math.sin")
            .replace("π", "Math.PI")
            .replace("e", "Math.E")
            .replace("√", "Math.sqrt")
            ;

        console.log('convertedValue:', convertedValue)
        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;

            try {
                if (value == "AC") {
                    currentValue = "";
                    display.value = currentValue;
                } else if (value == "=") {
                    evaluateResult();
                } else {
                    currentValue += value;
                    display.value = currentValue;
                }
            } catch (error) {
                console.error(Error);
                currentValue = "ERROR";
                display.value = currentValue;
            }

        })
    }
})