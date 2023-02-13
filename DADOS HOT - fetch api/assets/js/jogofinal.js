//CRIAÇÃO DA CLASSE DOS JOGADORES

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
            //if(this.contador%3===0){this.perguntar};
            //if(this.contador%6===0){this.beber};
            if(num1===33&&this.pecas>0){let missao= corpoh[num1]; this.retirarpecam; return missao} 
            else{let missao= corpoh[num1]; return missao};}
    };

    get sortear1h(){
        if(this.pecas===0&&nudez===2){return this.sortear2h}
        else{
            let num1= Math.floor(Math.random()*34);
            this.contador+=1;
            //if(this.contador%3===0){this.perguntar};
            //if(this.contador%6===0){this.beber};
            if(num1===33&&this.pecas>0){let missao= corpom[num1]; this.retirarpecah; return missao} 
            else{let missao= corpom[num1]; return missao};}
    };

    get sortear2m(){
        let num= Math.floor(Math.random()*7);
        let missao= acaom2[num];
        transa+=1;
        if(transa>=10){alert("FIM DE JOGO! HORA DE TRANSAR!!!"); document.querySelector('#output').innerHTML="";
        return document.querySelector('#output').innerHTML= homem.nome + " & " + mulher.nome + "<br>" + "FIM DE JOGO! HORA DE TRANSAR!!!"};
        return missao;
    };

    get sortear2h(){
        let num= Math.floor(Math.random()*7);
        let missao= acaoh2[num];
        transa+=1;
        if(transa>=10){alert("FIM DE JOGO! HORA DE TRANSAR!!!"); document.querySelector('#output').innerHTML="";
        return document.querySelector('#output').innerHTML=homem.nome + " & " + mulher.nome + "<br>" + "FIM DE JOGO! HORA DE TRANSAR!!!"};
        return missao;
    };

    get perguntar(){
        
        let numero= Math.floor(Math.random()*40);
        if(this.lista.indexOf(perguntas[numero])===-1){
        this.lista.push(perguntas[numero]);
        console.log(perguntas[numero]);} else(alert("pergunte o que quiser ao seu parceiro(a)"));
    }

    get listar(){
        console.log(this.lista);
    }

    get retirarpecam(){
        if(this.pecas>0){
            this.pecas-=1;
            this.roupas.pop();
            if(this.pecas===1){return console.log("O clima está esquentando! Você está quase nua!")}
            if(this.pecas<=0){nudez+=1; console.log("O clima está esquentando! Você está completamente nua!")}
            if(nudez===2){alert("Casal, vocês passaram para o nível 2! Se preparem para cenas mais picantes!")};}
        else{alert(this.nome +" você nao tem mais roupas!")}   
    };

    get retirarpecah(){
        if(this.pecas>0){
            this.pecas-=1;
            this.roupas.pop();
            if(this.pecas===1){return console.log("O clima está esquentando! Você está quase nu!")}
            if(this.pecas<=0){nudez+=1; console.log("O clima está esquentando! Você está completamente nu!")};
            if(nudez===2){alert("Casal, vocês passaram para o nível 2! Se preparem para cenas mais picantes!")};}
        else{alert(this.nome +" você nao tem mais roupas!")}
    };

    get beber(){
        alert('tome um gole');
    }

    get listarroupas(){
        for(let i in this.roupas){
            "peça "+ (Number(i)+1) + ": " + this.roupas[i];
        }
    }
}





//DADOS FASE 1
//34
const corpom=["toque os lábios", "beije os lábios", "mordisque os lábios", "dê uma lambida no cantinho dos lábios", "dê um beijão de cinema", "assopre os lábios", "massageie as orelhas", "dê mordidinhas nas orelhas", 
"assopre as orelhas", "dê lambidas nas orelhas", "massageie a nuca", "arranhe levemente a nuca", "dê vários beijos na nuca", "assopre e mordisque a nuca", "dê beijos no pescoço", 
"dê lambidas e leves chupadas no pescoço", "acaricie os seios", "apalpe os seios", "massageia as costas", 
"se ela estiver de roupas íntimas: beije, dê lambidas e assopre as costas, em toda a sua extensão, senão role o dado novamente", "beije todo o abdome", " deslize as mãos suavemente por todo o abdome", "dê mordidinhas no abdome",
"massageie as coxas", "deslize as mãos pela partes internas das coxas, arranhando levemente de baixo pra cima", "beije a parte interna das coxas; comece próximo aos joelhos e suba até a virilha",
"se ela estiver apenas com roupa íntima, dê lambidinhas na virilha, senão role o dado novamente", "apalpe e massageie a bunda", "se ela estiver apenas com roupa íntima, dê mordidinhas na bunda, senão role o dado novamente",
"a escolha é livre, faça o quiser!", "se ela estiver apenas com roupas debaixo, toque as partes íntimas, senão role o dado novamente",
"se ela estiver apenas com roupas debaixo, toque e acaricie as partes íntimas, senão role o dado novamente",
"se ela estiver apenas com roupas debaixo, dê vários beijos nas partes íntimas (por cima da roupa), senão role o dado novamente", "retire uma peça de roupa!"];
//34
const corpoh=["toque os lábios", "beije os lábios", "mordisque os lábios", "dê uma lambida no cantinho dos lábios", "dê um beijão de cinema", "assopre os lábios", "massageie as orelhas", "dê mordidinhas nas orelhas", 
"assopre as orelhas", "dê lambidas nas orelhas", "massageie a nuca", "arranhe levemente a nuca", "dê vários beijos na nuca", "assopre e mordisque a nuca", "dê beijos no pescoço", 
"dê lambidas e leves chupadas no pescoço", "acaricie o peito", "apalpe o peito", "massageia as costas", 
"se ele estiver de roupas íntimas: beije, dê lambidas e assopre as costas, em toda a sua extensão, senão role o dado novamente", "beije todo o abdome", " deslize as mãos suavemente por todo o abdome", "dê mordidinhas no abdome",
"massageie as coxas", "deslize as mãos pela partes internas das coxas, arranhando levemente de baixo pra cima", "beije a parte interna das coxas; comece próximo aos joelhos e suba até a virilha",
"se ele estiver apenas com roupa íntima, dê lambidinhas na virilha, senão role o dado novamente", "apalpe e massageie a bunda", "se ele estiver apenas com roupa íntima, dê mordidinhas na bunda, senão role o dado novamente",
"a escolha é livre, faça o quiser!", "se ele estiver apenas com roupas debaixo, toque as partes íntimas, senão role o dado novamente",
"se ele estiver apenas com roupas debaixo, toque e acaricie, apalpe as partes íntimas, senão role o dado novamente",
"se ele estiver apenas com roupas debaixo, dê vários beijos nas partes íntimas (por cima da roupa), senão role o dado novamente", "retire uma peça de roupa!"];

//const acao=["acaricie ", "apalpe/toque/massageie ", "beije ", "dê uma lambida n", "mordisque ", "use sua imaginação com ", "arranhe de leve ",
// "acaricie ", "apalpe/toque ", "beije ", "assopre ", "tire uma peça de roupa"];

//DADOS FASE 2
//7
const acaom2=["masturbe seu parceiro (se tiver um EGG, use-o!)", "faça sexo oral nele", "deem um amasso gostoso", "esfregue sua buceta na cara dele",
"façam um 69", "sente sobre o quadril e esfregue sua buceta no pau dele (sem penetrar)", "se masturbe para ele (se tiver algum brinquedinho, você pode usá-lo)"];
//7
const acaoh2=["masturbe sua parceira (se tiver algum brinquedinho,você pode usá-lo)", "faça sexo oral nela", "deem um amasso gostoso", "façam um 69",
"acaricie e chupe os seios dela", "esfregue a cabecinha no grilinho dela (sem penetrar)", "se masturbe para ela"];

//PERGUNTAS
//40
const perguntas=['descreva sua lingerie/roupa debaixo','qual a cor preferida de lingerie/roupa debaixo?','posição preferida?','sexo romântico ou selvagem?',
'conte uma fantasia sexual','parte do corpo que mais gosta no parceiro?','o que ele/ela faz que te deixa com mais tesão?',
'já fez alguma loucura? conte!','qual parte do seu corpo você mudaria?','já transou em lugares exóticos? se sim, quais?',
'já transou no primeiro encontro?','é importante o tamanho do pênis/seios do(a) parceiro(a)?','já foi em um strip club?',
'como fica qdo está muito bêbado(a)? (inconveniente? deprimido(a)? eufórico(a)? tarado(a)?)','com que idade foi sua primeira transa?',
'ja deu PT após beber? conte!','lugar favorito para transar?','já saiu com alguém famoso?','transar de manhã, à tarde ou à noite?',
'já ficou nu/nua em público?','tem vontade de ir em uma praia de nudismo?','o que compraria em um sex shop?',
'faria amor em público/ar livre?','já trocou nudes?','assiste pornografia? vejam um vídeo juntos agora!',
'o que melhoraria em seu parceiro/parceira?','qual parte do corpo preferida no sexo oposto?',
'sexo no escuro ou luz acesa?','o que seu parceiro(a) faz que mais te dá tesão?','o que você faz melhor na cama?',
'penetração rápida e profunda, ou lenta e carinhosa?','com que idade viu pela primeira vez um(a) pepeka/pau?',
'quando foi seu primeiro bjo?','dominar ou ser dominado(a)?','o que mais gosta no seu corpo?',
'gostar de falar sacanagem? palavrões? xingar?','qual sua fantasia/fetiche mais safado?','gosta de apanhar no sexo?',
 'sussurre uma sacanagem no ouvido do seu parceiro(a)'];

function apelar(){
    if(mulher.pecas>0){mulher.retirarpecam};
    if(homem.pecas>0){homem.retirarpecah};
    alert("Ambos tirem uma peça de roupa!")
};

function resetar(){
    nudez=0;
    transa=0;
    //CRIAÇÃO DOS JOGADORES
    jog1= prompt("Qual o nome da jogadora?") || "Jogadora 1";
    jog1p= Number(prompt("Quantas peças de roupa está usando?"));
    roupas1=[];
    for(i=0; i<jog1p; i++){
    roupas1[i]= prompt( 'Qual a peça número ' + (i+1) + '?');
    };
    lista1=[];
    bebida1=0;
    contador1=0;
    jog2= prompt("Qual o nome do jogador?") || "Jogador 2";
    jog2p= Number(prompt("Quantas peças de roupa está usando?"));
    roupas2=[];
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
    
   
};


function dadoele(){
    document.querySelector('.resultadojogo').innerHTML= homem.nome +":"+"<br>" +homem.sortear1h;
   // document.querySelector("#cara").innerHTML= homem.roupas;
};

function dadoela(){
    document.querySelector('.resultadojogo').innerHTML=mulher.nome + ":"+"<br>"  +mulher.sortear1m;
    mulher.roupas;
};









