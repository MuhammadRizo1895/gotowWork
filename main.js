const b=[];

function goWork(idsi){
    var soz=document.getElementById("demo").value;
    var satr='';
    
    switch (idsi) {
        case "left":
            b.unshift(soz);  
            break;
        case "left2":
            b.shift();  
            break;
        case "right":
            b.push(soz); 
            break;
        case "right2":
            b.pop();  
            break;
    }    
     for (let i = 0; i < b.length; i++) {
         satr += b[i] + '<br>';
    } 
    document.getElementById("demo").value='';
    document.getElementById("demo").focus();
    document.getElementById("mass").innerHTML=satr;
}

// alert(b);

