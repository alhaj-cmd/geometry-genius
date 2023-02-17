// console.log('card')
document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleField =document.getElementById('baseline-Field');
    const triangleFieldValue = triangleField.value;
    console.log(triangleField);
    const triangleFieldString = parseFloat(triangleFieldValue);
    triangleField.value=triangleFieldString;

    const baselineField = document.getElementById('height-Field');
    const baselineFieldValue = baselineField.value;
    const baselineFieldString = parseFloat(baselineFieldValue);
    baselineField.value = baselineFieldString;

    
})