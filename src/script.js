const outputElement = document.querySelector('.output');

const input = (newValue) => {
    if (outputElement.textContent === '0' || outputElement.textContent === 'error' || outputElement.textContent === 'Infinity') {
        outputElement.textContent = newValue;
    } else {
        outputElement.textContent += newValue;
    }
}

const clearInput = () => {
    outputElement.textContent = '0';
}

const result = () => {
    try {
        outputElement.textContent = eval(outputElement.textContent);
    } catch (error) {
        outputElement.textContent = 'error';
    }
}
const deleteInput = () => {

    if (outputElement.textContent.length === 1 || outputElement.textContent === 'error' || outputElement.textContent === 'Infinity') {
        outputElement.textContent = '0';
    } else { outputElement.textContent = outputElement.textContent.slice(0, -1); }

}
