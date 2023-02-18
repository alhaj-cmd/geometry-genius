// console.log('card')
let number = 0;
document.getElementById('btn-triangle').addEventListener('click', function(){
    number +=1;
    const triangleField =document.getElementById('baseline-Field').value;
  

    const baselineField = document.getElementById('height-Field').value;
    const triangleName = document.getElementById('triangle-name').innerText;

    const triangleArea = 0.5*triangleField*baselineField;
    const triangleAreaParse = parseInt(triangleArea);
    // console.log(triangleArea,triangleName);
    displayData( triangleAreaParse, triangleName)
    

})
 
function displayData(triangleAreaParse, triangleName){
    const calculation =document.getElementById('calculation');
    const tr= document.createElement("tr");
    tr.innerHTML= `
    <td>${1}</td>    
    <td>${triangleName}</td>    
    <td>${triangleAreaParse}</td>cm<sup>2</sup>    
     
    
    `
    calculation.appendChild(tr);
}