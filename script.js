document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const heightFeet = parseFloat(document.getElementById('height-feet').value);
    const heightInches = parseFloat(document.getElementById('height-inches').value);
    const height = (heightFeet * 12) + heightInches; // convert height to inches
    const heightInMeters = height * 0.0254; // convert inches to meters

    const bmi = calculateBMI(weight, heightInMeters);
    const { category, description } = interpretBMI(bmi);

    document.getElementById('bmi-result').innerText = `Your BMI is ${bmi.toFixed(2)}.`;
    document.getElementById('bmi-category').innerText = category;
    document.getElementById('bmi-description').innerText = description;
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function interpretBMI(bmi) {
    let category = '';
    let description = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        description = 'You are under the ideal weight for your height. It may be beneficial to gain some weight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        description = 'You are at a healthy weight for your height. Keep up the good work!';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        description = 'You are above the ideal weight for your height. Consider making lifestyle changes to lose weight.';
    } else {
        category = 'Obese';
        description = 'You are significantly above the ideal weight for your height. It is advisable to seek medical guidance to reduce weight.';
    }

    return { category, description };
}
