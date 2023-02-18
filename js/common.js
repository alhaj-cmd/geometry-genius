function displayData(serial, sixcardName, totalCardCalculation) {
    const calculation = document.getElementById('calculation');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <div>
    <td>${serial}</td>    
    <td>${sixcardName}</td>    
    <td>${totalCardCalculation}cm<sup>2</sup> </td>
    <button>submit</button>   
    </div>
     
    
    `
    calculation.appendChild(tr);
}