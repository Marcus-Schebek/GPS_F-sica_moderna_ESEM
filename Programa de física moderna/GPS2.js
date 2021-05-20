var Dsatelite = 20200;
var c = 300000;
var DsinalA;
var DsinalB;
var DsinalC;
var DeltaTA;
var DeltaTB;
var DeltaTC;


var CoworkerBnt = document.querySelector("#coworker_data");



function GetCoWorkerData(){
    CoworkerBnt.addEventListener("click", function(){
        
        var DeltaTA = parseFloat(document.getElementById("kmAcoworker").value);
        var DeltaTB = parseFloat(document.getElementById("kmBcoworker").value);
        var DeltaTC = parseFloat(document.getElementById("kmCcoworker").value);

        console.log("O DeltaTA é ", DeltaTA)
        console.log("O DeltaTB é ", DeltaTB)
        console.log("O DeltaTC é ", DeltaTC)


        var NameA = document.getElementById("nameAcoworker").value;
        var NameB = document.getElementById("nameBcoworker").value;
        var NameC = document.getElementById("nameCcoworker").value;
       
        
        DsinalA = parseFloat(DeltaTA*c);
        DsinalB = parseFloat(DeltaTB*c);
        DsinalC = parseFloat(DeltaTC*c);

        console.log("O DsinalA é ", DsinalA);
        console.log("O DsinalB é ", DsinalB);
        console.log("O DsinalC é ", DsinalC);


        DchaoA = Math.sqrt((DsinalA*DsinalA)-(20200*20200));
        DchaoB = Math.sqrt((DsinalB*DsinalB)-(20200*20200));
        DchaoC = Math.sqrt((DsinalC*DsinalC)-(20200*20200));
      


        console.log("DChao A é ", DchaoA);
        console.log( "DChao B é ", DchaoB);
        console.log( "DChao C é ", DchaoC);

        var KmFinalA = (DchaoA.toFixed(2));
        var KmFinalB = (DchaoB.toFixed(2));
        var KmFinalC = (DchaoC.toFixed(2));

        console.log(KmFinalA);  
        console.log(KmFinalB);  
        console.log(KmFinalC);  

    
       var mensagem1 = document.createElement("h4");
       document.body.appendChild(mensagem1);
       mensagem1.innerHTML = "A distancia do chao da Cidade " + NameA + " é " + KmFinalA + " Km";
       var mensagem2 = document.createElement("h4");
       document.body.appendChild(mensagem2);
       mensagem2.innerHTML = "A distancia do chao da Cidade " + NameB + " é " + KmFinalB + " Km";
       var mensagem3 = document.createElement("h4");
       document.body.appendChild(mensagem3);
       mensagem3.innerHTML = "A distancia do chao da Cidade " + NameC + " é " + KmFinalC + " Km";

    });

}