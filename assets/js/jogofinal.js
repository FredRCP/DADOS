//MÚSICAS

const audio = new Audio('./assets/audio/menu.wav'); 
const dice= new Audio('./assets/audio/dice.wav');
const yeah= new Audio('./assets/audio/ohyeah.wav');
const yeah1= new Audio('./assets/audio/ohyeah1.wav');
const drink= new Audio('./assets/audio/agua.wav')
const fim= new Audio('./assets/audio/win.wav');
const mul= new Audio('./assets/audio/mul.wav');
const hom= new Audio('./assets/audio/hom.wav');
const stripman= new Audio('./assets/audio/stripman.mp3');
const stripmulher= new Audio('./assets/audio/stripmulher.mp3');
audio.volume=0.6;
yeah.volume=0.7;
yeah1.volume=0.7;
mul.volume=0.5;
hom.volume=0.5;
stripman.volume=0.5;
stripmulher.volume=0.5;

audio.loop = true;
addEventListener('click', e=>{
    
    const el= e.target;
    if(ativar===false){
    if(el.classList.contains('menuplay')){
        audio.play();
        el.classList.add('ativo');
        el.setAttribute('title', 'Desativar áudio');
        ativar=true;
    }}
    else{
    if(ativar=true){
        audio.pause();
        ativar=false;
        el.classList.remove('ativo');
        el.setAttribute('title', 'Ativar áudio')
    }}    
})

//CRIAÇÃO DA CLASSE DOS JOGADORES
let ativar=false;
let timer;
let iniciar=0;
let nudez=0;
let transa=0;

class Jogador{
    constructor(nome, pecas, roupas, lista, contador){
        this.nome= nome.toUpperCase();
        this.pecas= pecas;
        if(this.pecas===0){nudez+=1};
        this.roupas= roupas;
        this.lista=lista;
        this.contador=contador;
    }

    get sortear1m(){
        if(this.pecas===0&&nudez===2){return this.sortear2m}
        else{
            let num1= Math.floor(Math.random()*34);
            this.contador+=1;
            if(this.contador%3===0){this.perguntar};
            if(this.contador%6===0){this.beber};
            if(num1===33&&this.pecas>0){let missao= corpoh[num1]; this.retirarpecam; return missao} 
            else{let missao= corpoh[num1]; return missao};}
    };

    get sortear1h(){
        if(this.pecas===0&&nudez===2){return this.sortear2h}
        else{
            let num1= Math.floor(Math.random()*34);
            this.contador+=1;
            if(this.contador%3===0){this.perguntar};
            if(this.contador%6===0){this.beber};
            if(num1===33&&this.pecas>0){let missao= corpom[num1]; this.retirarpecah; return missao} 
            else{let missao= corpom[num1]; return missao};}
    };

    get sortear2m(){
        const botaodadom= document.querySelector('.levelm');
        botaodadom.classList.add('level2');
        let num= Math.floor(Math.random()*7);
        let missao= acaom2[num];
        transa+=1;
        if(transa>=10){alert("FIM DE JOGO! HORA DE TRANSAR!!!"); return  final();};
        return missao;
    };

    get sortear2h(){
        const botaodadoh= document.querySelector('.levelh');
        botaodadoh.classList.add('level2');
        let num= Math.floor(Math.random()*7);
        let missao= acaoh2[num];
        transa+=1;
        if(transa>=10){alert("FIM DE JOGO! HORA DE TRANSAR!!!"); return final(); };
        return missao;
    };

    get perguntar(){
        if(document.querySelector('#perguntas').checked===true){
            let numero= Math.floor(Math.random()*40);
            if(this.lista.indexOf(perguntas[numero])===-1){
            this.lista.push(perguntas[numero]);
            alert(perguntas[numero]);} else(alert("pergunte o que quiser ao seu parceiro(a)"));
    }}

    get listar(){
        console.log(this.lista);
    }

    get retirarpecam(){
        if(this.pecas>0){
            this.pecas-=1;
            alert(this.nome + ' retire ' + this.roupas[this.pecas]);
            stripmulher.play();
            this.roupas.pop();
            mulher.listarroupasm;
            if(this.pecas===1){return alert("O clima está esquentando! Você está quase nua!")}
            if(this.pecas<=0){nudez+=1; alert("O clima está esquentando! Você está completamente nua!")}
            if(nudez===2){alert("Casal, vocês passaram para o nível 2! Se preparem para cenas mais picantes!")};}
        else{alert(this.nome +" você nao tem mais roupas!")}   
    };

    get retirarpecah(){
        if(this.pecas>0){
            this.pecas-=1;
            alert(this.nome + ' retire ' + this.roupas[this.pecas]);
            stripman.play();
            this.roupas.pop();
            homem.listarroupash;
            if(this.pecas===1){return alert("O clima está esquentando! Você está quase nu!")}
            if(this.pecas<=0){nudez+=1; alert("O clima está esquentando! Você está completamente nu!")};
            if(nudez===2){alert("Casal, vocês passaram para o nível 2! Se preparem para cenas mais picantes!")};}
        else{alert(this.nome +" você nao tem mais roupas!")}
    };

    get beber(){
        if(document.querySelector('#drink').checked===true){
        drink.play();
        alert('tome um gole do seu drink');
    }}

    get listarroupasm(){
        let armariom="";
        for(let i in this.roupas){
            armariom+="peça "+ (Number(i)+1) + ": " + this.roupas[i] + "<br>";
        }
        //if(armariom===""){ return document.querySelector(".armariom").innerHTML="NUA"}
        //document.querySelector(".armariom").innerHTML= armariom;
    }

    get listarroupash(){
        let armarioh="";
        for(let i in this.roupas){
            armarioh+="peça "+ (Number(i)+1) + ": " + this.roupas[i] + "<br>";
        }
        //if(armarioh===""){ return document.querySelector(".armarioh").innerHTML="NU"}
        //document.querySelector(".armarioh").innerHTML= armarioh;
    }
}

 function final(){
    yeah1.play();
    setTimeout(() => {
        yeah.play();
    }, 1200);
    setTimeout(() => {
        fim.play();
    }, 2500);
    return document.querySelector('.resultadojogo').innerHTML= "FIM DE JOGO! HORA DE TRANSAR!!!"; 
 }

//DADOS FASE 1
//34
const corpom=["toque os lábios dela", "beije os lábios dela", "mordisque os lábios dela", "dê uma lambida no cantinho da boca dela", "dêem um beijão de cinema", "assopre os lábios dela", "massageie as orelhas dela", "dê mordidinhas nas orelhas dela", 
"assopre as orelhas dela", "dê lambidas nas orelhas dela", "massageie a nuca dela", "arranhe levemente a nuca dela", "dê vários beijos na nuca dela", "assopre e mordisque a nuca dela", "beije o pescoço dela", 
"dê lambidas e leves chupadas no pescoço dela", "acaricie os seios dela", "apalpe os seios dela", "massageia as costas dela", 
"se ela estiver de roupas íntimas: beije, dê lambidas e assopre suas costas, em toda a sua extensão, senão role o dado novamente", "beije todo o abdome dela", " deslize as mãos, suavemente, por todo o abdome dela", "dê mordidinhas no abdome dela",
"massageie as coxas dela", "deslize as mãos pela parte interna das coxas dela, arranhando levemente de baixo pra cima", "beije a parte interna das coxas dela; inicie próximo aos joelhos e suba até a virilha",
"se ela estiver apenas com roupa íntima, dê lambidinhas na virilha, senão role o dado novamente", "apalpe e massageie a bunda dela", "se ela estiver apenas com roupa íntima, dê mordidinhas na bunda dela, senão role o dado novamente",
"a escolha é livre, faça o quiser com ela!", "se ela estiver apenas com roupas debaixo, toque as partes íntimas, senão role o dado novamente",
"se ela estiver apenas com roupas debaixo, toque e acaricie as partes íntimas, senão role o dado novamente",
"se ela estiver apenas com roupas debaixo, dê vários beijos nas partes íntimas (por cima da roupa), senão role o dado novamente", "retire uma peça de roupa!"];
//34
const corpoh=["toque os lábios dele", "beije os lábios dele", "mordisque os lábios dele", "dê uma lambida no cantinho da boca dele", "dêem um beijão de cinema", "assopre os lábios dele", "massageie as orelhas dele", "dê mordidinhas nas orelhas dele", 
"assopre as orelhas dele", "dê lambidas nas orelhas dele", "massageie a nuca dele", "arranhe levemente a nuca dele", "dê vários beijos na nuca dele", "assopre e mordisque a nuca dele", "dê beijos no pescoço dele", 
"dê lambidas e leves chupadas no pescoço dele", "acaricie o peito dele", "apalpe o peito dele", "massageia as costas dele", 
"se ele estiver de roupas íntimas: beije, dê lambidas e assopre as costas, em toda a sua extensão, senão role o dado novamente", "beije todo o abdome dele", " deslize as mãos, suavemente, por todo o abdome dele", "dê mordidinhas no abdome dele",
"massageie as coxas dele", "deslize as mãos pela parte interna das coxas dele, arranhando levemente de baixo pra cima", "beije a parte interna das coxas dele; inicie próximo aos joelhos e suba até a virilha",
"se ele estiver apenas com roupa íntima, dê lambidinhas na virilha dele, senão role o dado novamente", "apalpe e massageie a bunda dele", "se ele estiver apenas com roupa íntima, dê mordidinhas na bunda dele, senão role o dado novamente",
"a escolha é livre, faça o quiser com ele!", "se ele estiver apenas com roupas debaixo, toque as partes íntimas, senão role o dado novamente",
"se ele estiver apenas com roupas debaixo, toque e acaricie, apalpe as partes íntimas, senão role o dado novamente",
"se ele estiver apenas com roupas debaixo, dê vários beijos nas partes íntimas (por cima da roupa), senão role o dado novamente", "retire uma peça de roupa!"];


//DADOS FASE 2
//7
const acaom2=["masturbe seu parceiro (se tiver um EGG, use-o!)", "faça sexo oral nele", "deem um amasso gostoso", "esfregue sua buceta na cara dele",
"façam um 69", "sente sobre o quadril e esfregue sua buceta no pau dele (sem penetrar)", "se masturbe para ele (se tiver algum brinquedinho, você pode usá-lo)"];
//7
const acaoh2=["masturbe sua parceira (se tiver algum brinquedinho,você pode usá-lo)", "faça sexo oral nela", "deem um amasso gostoso", "façam um 69",
"acaricie e chupe os seios dela", "esfregue a cabecinha no clitóris dela (sem penetrar)", "se masturbe para ela"];

//PERGUNTAS
//40
const perguntas=['descreva sua lingerie/roupa debaixo','qual a cor preferida de lingerie/roupa debaixo?','posição preferida?','sexo romântico ou selvagem?',
'conte uma fantasia sexual','parte do corpo que mais gosta no parceiro?','o que ele/ela faz que te deixa com mais tesão?',
'já fez alguma loucura? conte!','qual parte do seu corpo você mudaria?','já transou em lugares exóticos? se sim, quais?',
'já transou no primeiro encontro?','é importante o tamanho do pênis/seios do(a) parceiro(a)?','já foi em um strip club?',
'como fica qdo está muito bêbado(a)? (inconveniente? deprimido(a)? eufórico(a)? tarado(a)?)','com que idade foi sua primeira transa?',
'ja deu PT após beber? conte!','lugar favorito para transar?','já saiu com alguém famoso?','transar de manhã, à tarde ou à noite?',
'já ficou nu/nua em público?','tem vontade de ir em uma praia de nudismo? Conte!','o que compraria em um sex shop?',
'faria amor em público/ar livre?','já trocou nudes?','assiste pornografia? vejam um vídeo juntos agora!',
'o que melhoraria em seu parceiro/parceira?','qual parte do corpo preferida no sexo oposto?',
'sexo no escuro ou luz acesa?','o que seu parceiro(a) faz que mais te dá tesão?','o que você faz melhor na cama?',
'penetração rápida e profunda, ou lenta e carinhosa?','com que idade viu pela primeira vez um(a) pepeka/pau?',
'quando foi seu primeiro bjo?','dominar ou ser dominado(a)?','o que mais gosta no seu corpo?',
'gostar de falar sacanagem? palavrões? xingar?','qual sua fantasia/fetiche mais safado?','gosta de apanhar no sexo?',
 'sussurre uma sacanagem no ouvido do seu parceiro(a)'];

function apelar(){
    if(iniciar===0){return alert('você precisa iniciar o jogo!')};
    if(mulher.pecas>0){mulher.retirarpecam; mulher.listarroupasm;} else{alert(mulher.nome + ", você já está nua!")};
    setTimeout(() => {
        if(homem.pecas>0){homem.retirarpecah; homem.listarroupash;} else{alert(homem.nome + ", você já está nu!")};    
    }, 6000);
    };

//RELÓGIO

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
});}


function iniciaRelogio() {
const relogio = document.querySelector('.crono');
relogio.classList.add('cronoligado');
segundos=0;
timer = setInterval(function() {
segundos++;
relogio.innerHTML = criaHoraDosSegundos(segundos);
}, 1000);
}

//INICIAR

function resetar(){
    
    clearInterval(timer);
    segundos=0;
    iniciar=1;
    nudez=0;
    transa=0;
    //CRIAÇÃO DOS JOGADORES
    jog1= prompt("Qual o nome da jogadora?") || "Jogadora 1";
    jog1p= Number(prompt("Quantas peças de roupa está usando? Não inclua os calçados."));
    if(jog1p!==0){alert("A seguir, liste primeiro as peças íntimas.")};
    roupas1=[];
    for(i=0; i<jog1p; i++){
    roupas1[i]= prompt( 'Qual a peça número ' + (i+1) + '?');
    };
    lista1=[];
    bebida1=0;
    contador1=0;
    jog2= prompt("Qual o nome do jogador?") || "Jogador 2";
    jog2p= Number(prompt("Quantas peças de roupa está usando? Não inclua os calçados."));
    roupas2=[];
    if(jog2p!==0){alert("A seguir, liste primeiro as peças íntimas.")};
    for(i=0; i<jog2p; i++){
    roupas2[i]= prompt( 'Qual a peça número ' + (i+1) + '?');
    };
    lista2=[];
    bebida2=0;
    contador2=0;
    mulher= new Jogador(jog1, jog1p, roupas1, lista1, bebida1, contador1);
    homem= new Jogador(jog2, jog2p, roupas2, lista2, bebida2, contador2);
    document.querySelector(".jogador1").innerHTML=mulher.nome;
    document.querySelector(".jogador2").innerHTML=homem.nome;
    mulher.listarroupasm;
    homem.listarroupash;
    document.querySelector('.resultadojogo').innerHTML="💜";
    iniciaRelogio();
    setTimeout(()=>{fim.play(); alert("Casal já se passaram alguns bons minutinhos, cliquem em avançar")}, 720000);
    const botaodadoh=document.querySelector('.levelh');
    const botaodadom=document.querySelector('.levelm');
    botaodadom.classList.remove('level2');
    botaodadoh.classList.remove('level2');
};


//DADOS

function dadoele(){
    if(iniciar===0){return alert('você precisa iniciar o jogo!')};
    dice.play();
    document.querySelector('.resultadojogo').innerHTML= homem.nome +"<br>" +homem.sortear1h; 
};

function dadoela(){
    if(iniciar===0){return alert('você precisa iniciar o jogo!')};
    dice.play();
    document.querySelector('.resultadojogo').innerHTML=mulher.nome +"<br>"  +mulher.sortear1m;
};












