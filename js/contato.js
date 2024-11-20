const form  =document.getElementById("form")
const nome  =document.getElementById("nome")
const email =document.getElementById("email")
const tel =document.getElementById("tel")


form.addEventListener('submit',(e)=>{
    //PREVINE QUALQUER ALTERAÇÃO NO FORMULÁRIO
    e.preventDefault()

    checarCampos()
})  


//FUNÇÃO CHECAR CAMPOS
function checarCampos(){
    const nomeValor = nome.value.trim()
    const emailValor = email.value.trim()
    const senhaValor = tel.value.trim()

    if(nomeValor ===""){
       validarErro(nome,"Preencha o campo nome")
    }
    else{
        validarSucesso(nome)
    }


    if(emailValor === ""){
        validarErro(email, "Preencha o campo email")
    }
    else{   
        validarSucesso(email)
    }

    if(telValor === ""){
        validarErro(tel,"Preencha o campo telefone")
    }
   else{
        validarSucesso(tel)
    }

} 

//VALIDAR ERROR

    function validarErro(input,message){    
        const controle = input.parentElement;
        const small = controle.querySelector('small')
        small.innerText = message
        controle.className ="controle error"
    }

//VALIDAR SUCESSO
    function validarSucesso(input){
        const controle = input.parentElement;
        controle.className = "controle sucesso"
    }
