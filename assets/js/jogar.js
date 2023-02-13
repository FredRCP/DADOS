var mulher= prompt("Qual seu nome moça?")
var rmulher= prompt("Quantas peças de roupa voçê está vestindo?")
rmulher=parseInt(rmulher)
/*var roupasm=[]
for(i=1; i<=rmulher; i++){roupasm.push(prompt('peça ' + i+ ": "))}*/



var homem= prompt("Qual seu nome rapaz?")
var rhomem= prompt("Quantas peças de roupa voçê está vestindo?")
rhomem=parseInt(rhomem)
/*var roupash=[]
for(i=1; i<=rhomem; i++){roupash.push(prompt('peça ' + i+ ": "))}*/



var n=11
var level=''  
var z=0  //contador fase 2//
var a=0  //contador feminino//
var b=0  //contador masculino//
var escolhap= document.querySelector('input[name="perg"]:checked').value;
var escolhad= document.querySelector('input[name="beb"]:checked').value;
var batalha= mulher+ " X "+ homem;


function resetar(){
    mulher= prompt("Qual o seu nome moça?")
    rmulher= prompt("Quantas peças de roupa?")
    rmulher=parseInt(rmulher)
/*var roupasm=[]
for(i=1; i<=rmulher; i++){roupasm.push(prompt('peça ' + i+ ": "))}*/

    homem= prompt("E você rapaz?")
    rhomem= prompt("Quantas peças de roupa?")
    rhomem=parseInt(rhomem)
/*var roupash=[]
for(i=1; i<=rhomem; i++){roupash.push(prompt('peça ' + i+ ": "))}*/
    n=11
    level=''
    z=0
    m=''
    var resultado=''
    xxx=''
    a=0; b=0
    document.querySelector("#output").innerHTML=""
    document.querySelector("#jog1").innerHTML=mulher
    document.querySelector("#jog2").innerHTML=homem
}

document.querySelector("#jog1").innerHTML=mulher
document.querySelector("#jog2").innerHTML=homem


var corpo=["os lábios","as orelhas","a nuca","o pescoço","os seios/peito","as costas","o abdome","as coxas","a virilha","o bumbum",
"o que quiser","o púbis"]
   
var acao=["acaricie ", "apalpe/toque ", "beije ", "dê uma lambida n", "mordisque ", "use sua imaginação com ","arranhe de leve ",
 "acaricie ", "apalpe/toque ", "beije ", "assopre ", "tire uma peça de roupa"]

var perguntas=['descreva sua lingerie/roupa debaixo','cor preferida de lingerie?','posição preferida?','sexo romântico ou selvagem?',
'conte uma fantasia sexual','parte do corpo que mais gosta no parceiro?','o que ele/ela faz que te deixa com mais tesão?',
'já fez alguma loucura? conte!','qual parte do seu corpo você mudaria?','já transou em lugares exóticos? quais?',
'já transou no primeiro encontro?','é importante o tamanho do pênis/seios do parceiro(a)?','já foi em um strip club?',
'como fica qdo está muito bêbado(a)? (inconveniente? deprimido? eufórico? tarado?)','com que idade perdeu a virgindade?',
'ja deu PT após beber?','lugar favorito para transar?','já saiu com alguém famoso?','transar de manhã, à tarde ou à noite?',
'já ficou nu/nua em público?','tem vontade de ir em uma praia de nudismo?','o que compraria em um sex shop?',
'faria amor em público/ar livre?','já trocou nudes?','assiste pornografia? vejam um vídeo juntos agora!',
'o que melhoraria em seu parceiro/parceira?','qual parte do corpo preferida no sexo oposto?',
'sexo no escuro ou luz acesa?','o que seu parceiro(a) faz que mais te dá tesão?','o que você faz melhor na cama?',
'penetração rápida e profunda ou lenta e carinhosa?','com que idade viu pela primeira vez um(a) pepeka/pau?',
'quando foi seu primeiro bjo?','dominar ou ser dominado(a)?','o que mais gosta no seu corpo?',
'gostar de falar sacanagem? palavrões? xingar?','qual sua fantasia/fetiche mais safado?','gosta de apanhar no sexo?',
 'sussurre uma sacanagem no ouvido do seu parceiro(a)']



function sortearx(){
    var dado1=sorteio()
    var dado2=sorteio()
    a+=1
    var escolhap= document.querySelector('input[name="perg"]:checked').value
    var escolhad= document.querySelector('input[name="beb"]:checked').value
    if(a%3===0){if(escolhap==="sim"){perguntar()}}
    if(a%6===0){if(escolhad==="com"){alert("Tome uma agora!")}}
    n=12
    if(rhomem<=0 && rmulher<=0){level= "AMBOS NUS! CLIMA ESQUENTANDO!!! FASE 2"; return sortearx2()}
    if(dado1===11 && rmulher>0){rmulher-=1;var m="<h2>" 
        switch(rmulher){
            case 0: m+="<h2>" +  mulher + " Tire sua calcinha e fique completamente nua! Rumo ao NÍVEL 2!!"; n=11
                break
            case 1: m+="<h2>" +  mulher + " Tire uma peça de roupa, restará apenas uma! O clima está esquentando!!!"
                break
            default: m+="<h2>" + mulher +" Tire uma peça de roupa"}return document.querySelector("#output").innerHTML= m }else{if(rmulher<=0){n=11}}
    
                    
        var resultado="<h2>" + "FASE 1"+"<p>" + level + "<h1>" +mulher+"<p>" + acao[dado1] + corpo[dado2]+ " dele!"
        document.querySelector("#output").innerHTML=resultado}
 

function sorteary(){
    var dado1=sorteio()
    var dado2=sorteio()
    b+=1
    var escolhap= document.querySelector('input[name="perg"]:checked').value
    var escolhad= document.querySelector('input[name="beb"]:checked').value
    if(b%3===0){if(escolhap==="sim"){perguntar()}}
    if(b%6===0){if(escolhad==="com"){alert("Tome uma agora!")}}
    n=12
    if(rhomem<=0 && rmulher<=0){level= "AMBOS NUS! CLIMA ESQUENTANDO!!! FASE 2"; return sorteary2()}
    if(dado1===11&& rhomem>0){rhomem-=1;var m="<h2>"
        switch(rhomem){
            case 0: m="<h2>" +  homem + " Tire sua cueca e fique completamente nu! Rumo ao NÍVEL 2!!!"; n=11
               break
            case 1:m="<h2>" +  homem + " Tire uma peça de roupa, restará apenas uma! O clima está esquentando!!!"
               break
            default: m="<h2>" + homem +" Tire uma peça de roupa!"}return document.querySelector("#output").innerHTML= m }else{if(rhomem<=0){n=11}}
       
        var resultado= "<h2>"+"FASE 1"+"<p>"+ level+ "<h1>" +homem +"<p>" + acao[dado1] +corpo[dado2] + " dela!"
        document.querySelector("#output").innerHTML=resultado}

function sorteio(){
    return Math.floor(Math.random()*n)
}

function apelar(){rmulher-=1; rhomem-=1; alert("Ambos tirem uma peça de roupa!")}

function sortearx2(){
  n=10
  var acao2=sorteio()
  var xxx=''
  if(z>=5){document.querySelector("#output").innerHTML="<h4>"+"FIM DE JOGO, APROVEITEM......."+"</h1>" +"<p>"+"<p>"+"<p>"+
     "created by RCP technology"; return alert("HORA DE TRANSAR GOSTOSO!");}
  

    switch(acao2){
        case 0: xxx= " chupe o pau dele"; z+=1
             break
        case 1: xxx= " masturbe ele";
             break
        case 2: xxx= " façam um 69"
             break
        case 3: xxx= " sente na cara dele"
             break
        case 4: xxx= " deem um amasso bem gostoso"
             break
        case 5: xxx= " deem um amasso bem gostoso"; z+=1
             break
        case 6: xxx= " chupe o pau dele"
             break
        case 7: xxx= " masturbe ele"; z+=1
             break
        case 8: xxx= " façam um 69"
             break
        case 9: xxx= " sente na cara dele"
             break
        default:}
        var resultado= "<h2>" + level+ "<h1>" +mulher+" "+ xxx+"!"
        document.querySelector("#output").innerHTML=resultado}

function sorteary2(){
    n=10
    var acao2=sorteio()
    var xxx=''
    if(z>=5){document.querySelector("#output").innerHTML="<h4>"+"FIM DE JOGO, APROVEITEM......."+"</h1>" +"<p>"+"<p>"+"<p>"+ 
        "created by RCP technology"; return alert("HORA DE TRANSAR GOSTOSO!")}
    
    switch(acao2){
    case 0: xxx= " chupe a bucetinha dela"; z+=1
            break
    case 1: xxx= " masturbe ela";
            break
    case 2: xxx= " façam um 69"
            break
    case 3: xxx= " chupe os seios dela"
            break
    case 4: xxx= " deem um amasso bem gostoso "; z+=1
            break
    case 5: xxx= " deem um amasso bem gostoso "
            break
    case 6: xxx= " chupe a bucetinha dela"
            break
    case 7: xxx= " masturbe ela"; z+=1
            break
    case 8: xxx= " façam um 69"
            break
    case 9: xxx= " chupe os seios"
            break
    default:}
        var resultado= "<h2>"+ level + "<h1>" +homem+" " + xxx+"!"
        document.querySelector("#output").innerHTML=resultado}



function perguntar(){
    n=40
    var p=sorteio()
    alert(perguntas[p])}

