//criando a função validar

function validar(){

    //declarando as variaveis
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    //realizando o if e else para validar os campos

    if(usuario =="City" && senha =="777"){
        alert(`Olá! Seja bem vinda(o)! ${usuario}`)
        window.open("quiz.html")
    }
    else{
        alert("usuario/senha inválidos!")
    }
}


