
function acao(){
     document.write("Executando... <br/>");
}


//Executa de Tempo em Tempo!
var time = setInterval(acao, 1000);

//O clearInterval(time) é um comando executado no console que é para parar a função
//"time".

//setTimeout(acao, 3000);