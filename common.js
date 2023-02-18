function displayData(serial,triangleAreaParse, triangleName){
    const calculation =document.getElementById('calculation');
    const tr= document.createElement("tr");
    tr.innerHTML= `
    <td>${serial}</td>    
    <td>${triangleName}</td>    
    <td>${triangleAreaParse}</td>cm<sup>2</sup>    
     
    
    `
    calculation.appendChild(tr);
}