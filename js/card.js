// console.log('card')
let number = 0;
// Name of the Triangle card one
document.getElementById('btn-triangle').addEventListener('click', function () {
    number += 1;
    const triangleFieldValue = document.getElementById('baseline-Field');
    const triangleField = triangleFieldValue.value;
    const baselineFieldValue = document.getElementById('height-Field');
    const baselineField = baselineFieldValue.value;
    const triangleName = document.getElementById('triangle-name').innerText;

    // validation
    if (triangleField > 0 && baselineField > 0) {

        const triangleAreaCalculate = 0.5 * triangleField * baselineField;
        const triangleAreaTotal = parseInt(triangleAreaCalculate);
        displayData(number, triangleName, triangleAreaTotal)
    }
    else {
        alert('please enter number')
    }
    triangleFieldValue.value = '';
    baselineFieldValue.value = '';


})

// Name of the Rectangle card two

document.getElementById('btn-rectangle').addEventListener('click', function () {
    number += 1;
    const rectangleField1 = document.getElementById('rectangleFieldOne');
    const rectangleFieldOne = rectangleField1.value;
    const rectangleField2 = document.getElementById('rectangleFieldTwo');
    const rectangleFieldTwo = rectangleField2.value;
    const rectangleNameText = document.getElementById('rectangle-name').innerText;
    // validation
    if (rectangleFieldOne > 0 && rectangleFieldTwo > 0) {

        const rectangleCalculate = rectangleFieldOne * rectangleFieldTwo;
        const rectangleCalculateNumber = parseFloat(rectangleCalculate);
        displayData(number, rectangleNameText, rectangleCalculateNumber);
    }

    else {
        alert('please enter number')
    }

    rectangleField1.value = ''
    rectangleField2.value = ''



})
// Name of the parallelogram card three

document.getElementById('btn-parallelogram').addEventListener('click', function () {
    number += 1;
    const parallelogramField1 = document.getElementById('parallelogramFieldOne');
    const parallelogramFieldOne = parallelogramField1.value;
    const parallelogramField2 = document.getElementById('parallelogramFieldTwo');
    const parallelogramFieldTwo = parallelogramField2.value;
    const parallelogramNameText = document.getElementById('parallelogram-name').innerText;

    if (parallelogramFieldOne > 0 && parallelogramFieldTwo > 0) {

        const parallelogramCalculate = parallelogramFieldOne * parallelogramFieldTwo;
        const parallelogramCalculateTotal = parseFloat(parallelogramCalculate);
        displayData(number, parallelogramNameText, parallelogramCalculateTotal)
    }

    else {
        alert('please enter number')
    }


    parallelogramField1.value = ''
    parallelogramField2.value = ''


})
// Name of the rhombus card four

document.getElementById('btn-rhombusField').addEventListener('click', function () {
    number += 1;
    const rhombusField1 = document.getElementById('rhombusFieldOne');
    const rhombusFieldOne = rhombusField1.value;
    const rhombusField2 = document.getElementById('rhombusFieldTwo');
    const rhombusFieldTwo = rhombusField2.value;
    const rhombusName = document.getElementById('rhombus-name').innerText;
    // validation
    if (rhombusFieldOne > 0 && rhombusFieldTwo > 0) {

        const rhombusCalculate = 0.5 * rhombusFieldOne * rhombusFieldTwo;
        const rhombusCalculateTotal = parseInt(rhombusCalculate);
        displayData(number, rhombusName, rhombusCalculateTotal);
    }

    else {
        alert('please enter number')
    }

    rhombusField1.value = ''
    rhombusField2.value = ''


})
// Name of the pentagon card five

document.getElementById('btn-pentagon').addEventListener('click', function () {
    number += 1;
    const pentagonField1 = document.getElementById('pentagonFieldOne');
    const pentagonFieldOne = pentagonField1.value;
    const pentagonField2 = document.getElementById('pentagonFieldTwo');
    const pentagonFieldTwo = pentagonField2.value;
    const pentagonName = document.getElementById('pentagon-name').innerText;
    // validation
    if (pentagonFieldOne > 0 && pentagonFieldTwo > 0) {

        const pentagonCalculate = 0.5 * pentagonFieldOne * pentagonFieldTwo;
        const pentagonCalculateTotal = parseFloat(pentagonCalculate);
        displayData(number, pentagonName, pentagonCalculateTotal);
    }

    else {
        alert('please enter number')
    }

    pentagonField1.value = ''
    pentagonField2.value = ''


})
// Name of the ellipse card six

document.getElementById('btn-ellipse').addEventListener('click', function () {
    number += 1;
    const ellipseFieldOne = document.getElementById('ellipseFieldOne')
    const ellipseFieldOneValue = ellipseFieldOne.value;
    const ellipseFieldTwo = document.getElementById('ellipseFieldTwo');
    const ellipseFieldTwoValue = ellipseFieldTwo.value;

    const ellipseName = document.getElementById('ellipse-name').innerText;
    // validation
    if (ellipseFieldOneValue > 0 && ellipseFieldTwoValue > 0) {

        const ellipseCalculate = 3.14159 * ellipseFieldOneValue * ellipseFieldTwoValue;
        const ellipseCalculateTotal = ellipseCalculate.toFixed(2);
        displayData(number, ellipseName, ellipseCalculateTotal)
    }

    else {
        alert('please enter number')
    }

    ellipseFieldOne.value = ' ';
    ellipseFieldTwo.value = ' ';

})



