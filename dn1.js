document.getElementById('dniForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dniLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    const dniNumber = document.getElementById('dniNumber').value;
    const userLetter = document.getElementById('dniLetter').value.toUpperCase();
    const resultMessage = document.getElementById('resultMessage');

    if (dniNumber < 0 || dniNumber > 99999999) {
        resultMessage.innerHTML = 'El número de DNI no es válido.';
        resultMessage.style.color = 'red';
        return;
    }

    const calculatedLetter = dniLetters[dniNumber % 23];

    if (calculatedLetter !== userLetter) {
        resultMessage.innerHTML = 'La letra ingresada es incorrecta.';
        resultMessage.style.color = 'red';
    } else {
        resultMessage.innerHTML = 'El DNI es válido.';
        resultMessage.style.color = 'green';
    }
});
