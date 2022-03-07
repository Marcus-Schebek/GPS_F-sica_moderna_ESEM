var Dsatelite = 20200;
var c = 300000;
var DsinalA;
var DsinalB;
var DsinalC;
var DeltaTA;
var DeltaTB;
var DeltaTC;

var UserBnt = document.querySelector("#user_data");



function GetUserData(){
    UserBnt.addEventListener("click", function(){
        
        var DchaoA = parseFloat(document.getElementById("kmAuser").value);
        var DchaoB = parseFloat(document.getElementById("kmBuser").value);
        var DchaoC = parseFloat(document.getElementById("kmCuser").value);

        var NameA = document.getElementById("nameAuser").value;
        var NameB = document.getElementById("nameBuser").value;
        var NameC = document.getElementById("nameCuser").value;
       

        DsinalA = Math.sqrt((20200*20200)+(DchaoA*DchaoA));
        DsinalB = Math.sqrt((20200*20200)+(DchaoB*DchaoB));
        DsinalC = Math.sqrt((20200*20200)+(DchaoC*DchaoC));

        DeltaTA = DsinalA/c;
        DeltaTB = DsinalB/c;
        DeltaTC = DsinalC/c;

       console.log(DeltaTA);
       console.log(DeltaTB);
       console.log(DeltaTC);

       var mensagem1 = document.createElement("h4");
       document.body.appendChild(mensagem1);
       mensagem1.innerHTML = "O satélite A está a 20.200 km acima da Cidade " + NameA + " e o sinal levou DeltaT = " + DeltaTA + " segundos";
       var mensagem2 = document.createElement("h4");
       document.body.appendChild(mensagem2);
       mensagem2.innerHTML = "O satélite A está a 20.200 km acima da Cidade " + NameB + ", e o sinal levou DeltaT = " + DeltaTB+ " segundos";
       var mensagem3 = document.createElement("h4");
       document.body.appendChild(mensagem3);
       mensagem3.innerHTML = "O satélite A está a 20.200 km acima da Cidade " + NameC + ", e o sinal levou DeltaT = " + DeltaTC+ " segundos";

    });
    

}

