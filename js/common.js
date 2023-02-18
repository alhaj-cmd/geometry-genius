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

// card uses in random color

randomColor = function(e) {
    e.style.background =  "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
}

// question file add in js

document.getElementById("btn-submit").onclick = function () {
//     console.log('hello')
    window.location.href= "http://127.0.0.1:5500/question.html";
};
