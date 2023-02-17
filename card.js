// console.log('card')
document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleField =document.getElementById('baseline-Field').value;
    // const triangleFieldValue = triangleField.value;
    // console.log(triangleField);
    // const triangleFieldString = parseFloat(triangleFieldValue);
    // // triangleField.value=triangleFieldString;

    const baselineField = document.getElementById('height-Field').value;
    const triangleName = document.getElementById('triangle-name').innerText;
    // const baselineFieldValue = baselineField.value;
    // const baselineFieldString = parseFloat(baselineFieldValue);
    // console.log(baselineFieldString);
    // // baselineField.value = baselineFieldString;

    const triangleArea = 0.5*triangleField*baselineField;
    console.log(triangleArea,triangleName);
    const calculation =document.getElementById('calculation')
    // const calculationFiled =calculation.innerText;
    const tr= document.createElement("tr");
    tr.innerHTML= `
    <td>${1}</td>
    <td>${triangleArea}</td>
    <td>${1}</td>
    <td>${1}</td>
    <h1>{name}</h1>
    </div>
    
    `
    calculation.appendChild(tr);

})