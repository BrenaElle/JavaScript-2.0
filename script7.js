//Criar o Balão
//Estourar o Balão
//Carregar o Jogo
var total = 0;

function criarbalao(){

     var balao = document.createElement("div");
     balao.setAttribute("class","balao");

     var x =Math.floor(Math.random()* 600);
     var y =Math.floor(Math.random()* 400);

     balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
     balao.setAttribute("onclick", "estourar(this)");

     document.body.appendChild(balao);

}

function estourar(objeto){
      document.body.removeChild(objeto);

      total++;
      var score= document.getElementById("total");
      score.innerHTML = "baloes estourados:" + total;
}

function carregarJogo(){
     setInterval(criarbalao, 1000)
}
