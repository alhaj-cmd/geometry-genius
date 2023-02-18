// console.log('card')
let number = 0;
// Name of the Triangle card one
document.getElementById('btn-triangle').addEventListener('click', function(){
    number +=1;
    const triangleField =document.getElementById('baseline-Field').value;
    const baselineField = document.getElementById('height-Field').value;
    const triangleName = document.getElementById('triangle-name').innerText;

    const triangleAreaCalculate = 0.5*triangleField*baselineField;
    const triangleAreaTotal = parseInt(triangleAreaCalculate);
    displayData(number, triangleName, triangleAreaTotal)
    

})

// Name of the Rectangle card two

document.getElementById('btn-rectangle').addEventListener('click', function(){
    number +=1;
    const rectangleFieldOne =document.getElementById('rectangleFieldOne').value;
    const rectangleFieldTwo = document.getElementById('rectangleFieldTwo').value;
    const rectangleNameText = document.getElementById('rectangle-name').innerText;

    const rectangleCalculate = rectangleFieldOne*rectangleFieldTwo;
    const rectangleCalculateNumber = parseInt(rectangleCalculate);
    displayData(number, rectangleNameText, rectangleCalculateNumber)
    

})
// Name of the Triangle card three
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    number +=1;
    const parallelogramFieldOne = document.getElementById('parallelogramFieldOne').value;
    const parallelogramFieldTwo = document.getElementById('parallelogramFieldTwo').value;
    const parallelogramNameText = document.getElementById('parallelogram-name').innerText;

    const parallelogramCalculate = parallelogramFieldOne*parallelogramFieldTwo;
    const parallelogramCalculateTotal = (parallelogramCalculate);
    displayData(number, parallelogramCalculateTotal, parallelogramNameText)
    

})
// Name of the Triangle card four
document.getElementById('btn-rhombusField').addEventListener('click', function(){
    number +=1;
    const rhombusFieldOne =document.getElementById('rhombusFieldOne').value;
    const rhombusFieldTwo = document.getElementById('rhombusFieldTwo').value;
    const rhombusName = document.getElementById('rhombus-name').innerText;

    const rhombusCalculate = 0.5*rhombusFieldOne*rhombusFieldTwo;
    const rhombusCalculateTotal = parseInt(rhombusCalculate);
    displayData(number, rhombusCalculateTotal, rhombusName)
    

})
// Name of the Triangle card five
document.getElementById('btn-pentagon').addEventListener('click', function(){
    number +=1;
    const pentagonFieldOne =document.getElementById('pentagonFieldOne').value;
    const pentagonFieldTwo = document.getElementById('pentagonFieldTwo').value;
    const pentagonName = document.getElementById('pentagon-name').innerText;

    const pentagonCalculate = 0.5*pentagonFieldOne*pentagonFieldTwo;
    const pentagonCalculateTotal = parseFloat(pentagonCalculate);
    displayData(number, pentagonCalculateTotal, pentagonName)
    

})
// Name of the Triangle card six
document.getElementById('btn-ellipse').addEventListener('click', function(){
    number +=1;
    const ellipseFieldOne =document.getElementById('ellipseFieldOne').value;
    const ellipseFieldTwo = document.getElementById('ellipseFieldTwo').value;
    const ellipseName= document.getElementById('ellipse-name').innerText;

    const ellipseCalculate =3.14159*ellipseFieldOne*ellipseFieldTwo;
    const ellipseCalculateTotal = ellipseCalculate.toFixed(2);
    displayData(number, ellipseCalculateTotal, ellipseName)
    

})
 
