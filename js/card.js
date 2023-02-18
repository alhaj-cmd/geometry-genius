// console.log('card')
let number = 0;
// Name of the Triangle card one
document.getElementById('btn-triangle').addEventListener('click', function () {
    number += 1;
    const triangleField = document.getElementById('baseline-Field').value;
    const baselineField = document.getElementById('height-Field').value;
    const triangleName = document.getElementById('triangle-name').innerText;

    // validation
    if (triangleField === '' || baselineField === '' || triangleField <= 0 || baselineField <= 0) {
        return alert('please enter number')
    }

    const triangleAreaCalculate = 0.5 * triangleField * baselineField;
    const triangleAreaTotal = parseInt(triangleAreaCalculate);
    displayData(number, triangleName, triangleAreaTotal)


})

// Name of the Rectangle card two

document.getElementById('btn-rectangle').addEventListener('click', function () {
    number += 1;
    const rectangleFieldOne = document.getElementById('rectangleFieldOne').value;
    const rectangleFieldTwo = document.getElementById('rectangleFieldTwo').value;
    const rectangleNameText = document.getElementById('rectangle-name').innerText;
    // validation
    if (rectangleFieldOne === '' || rectangleFieldTwo === '' || rectangleFieldOne <= 0 || rectangleFieldTwo <= 0) {
        return alert('please enter number')
    }

    const rectangleCalculate = rectangleFieldOne * rectangleFieldTwo;
    const rectangleCalculateNumber = parseFloat(rectangleCalculate);
    displayData(number, rectangleNameText, rectangleCalculateNumber)


})
// Name of the Triangle card three

document.getElementById('btn-parallelogram').addEventListener('click', function () {
    number += 1;
    const parallelogramFieldOne = document.getElementById('parallelogramFieldOne').value;
    const parallelogramFieldTwo = document.getElementById('parallelogramFieldTwo').value;
    const parallelogramNameText = document.getElementById('parallelogram-name').innerText;

    if (parallelogramFieldOne === '' || parallelogramFieldTwo === '' || parallelogramFieldOne <= 0 || parallelogramFieldTwo <= 0) {
        return alert('please enter number')
    }
    const parallelogramCalculate = parallelogramFieldOne * parallelogramFieldTwo;
    const parallelogramCalculateTotal = parseFloat(parallelogramCalculate);
    displayData(number, parallelogramNameText, parallelogramCalculateTotal)


})
// Name of the Triangle card four

document.getElementById('btn-rhombusField').addEventListener('click', function () {
    number += 1;
    const rhombusFieldOne = document.getElementById('rhombusFieldOne').value;
    const rhombusFieldTwo = document.getElementById('rhombusFieldTwo').value;
    const rhombusName = document.getElementById('rhombus-name').innerText;
    // validation
    if (rhombusFieldOne === '' || rhombusFieldTwo === '' || rhombusFieldOne <= 0 || rhombusFieldTwo <= 0) {
        return alert('please enter number')
    }

    const rhombusCalculate = 0.5 * rhombusFieldOne * rhombusFieldTwo;
    const rhombusCalculateTotal = parseInt(rhombusCalculate);
    displayData(number, rhombusName, rhombusCalculateTotal)


})
// Name of the Triangle card five

document.getElementById('btn-pentagon').addEventListener('click', function () {
    number += 1;
    const pentagonFieldOne = document.getElementById('pentagonFieldOne').value;
    const pentagonFieldTwo = document.getElementById('pentagonFieldTwo').value;
    const pentagonName = document.getElementById('pentagon-name').innerText;
    // validation
    if (pentagonFieldOne === '' || pentagonFieldTwo === '' || pentagonFieldOne <= 0 || pentagonFieldTwo <= 0) {
        return alert('please enter number')
    }

    const pentagonCalculate = 0.5 * pentagonFieldOne * pentagonFieldTwo;
    const pentagonCalculateTotal = parseFloat(pentagonCalculate);
    displayData(number, pentagonName, pentagonCalculateTotal)


})
// Name of the ellipse card six

document.getElementById('btn-ellipse').addEventListener('click', function () {
    number += 1;
    const ellipseFieldOne = document.getElementById('ellipseFieldOne').value;
    const ellipseFieldTwo = document.getElementById('ellipseFieldTwo').value;
   
    const ellipseName = document.getElementById('ellipse-name').innerText;
    // validation
    if (ellipseFieldOne === '' || ellipseFieldTwo === '' || ellipseFieldOne === null || ellipseFieldTwo === null || ellipseFieldOne <= 0 || ellipseFieldTwo <= 0) {
        return alert('please enter number')
    }
  

    const ellipseCalculate = 3.14159 * ellipseFieldOne * ellipseFieldTwo;
    const ellipseCalculateTotal = ellipseCalculate.toFixed(2);
    displayData(number, ellipseName, ellipseCalculateTotal)

    ellipseCalculate.value = '';
    ellipseFieldTwo.value = ''

})


// card uses in random color

randomColor = function(e) {
    e.style.background =  "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
}