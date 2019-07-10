
function validar(){

    var valor = document.getElementById("numero").value;
    var nomeValor = document.getElementById("nome").value;

    if(valor.length > 2){
       alert("Digite 2 numeros ou menos!");
       document.getElementById('numero').focus();
       return false;
    }else if(nomeValor.length < 3){
         alert("Digite um nome maior!");
         document.getElementsByName.focus();
         return false;
    }else{
        alert("formulario enviado com sucesso!");
        return true;
    }

}

