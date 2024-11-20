alert("Vamos fazer um quiz sobre energia limpa!")

//criando as perguntas
const perguntas =[


    {
        pergunta:"1. O que é considerado energia limpa? \n a) Energia proveniente de carvão mineral \n b) Energia gerada a partir de fontes renováveis que não emitem poluentes \n c) Energia gerada a partir de fontes não renováveis, como petróleo \n d) Energia proveniente de usinas nucleares ",
        resposta:"B"
    },

    {
        pergunta:"2. Qual dessas fontes de energia é considerada uma fonte renovável? \n a) Petróleo \n b) Gás natural \n c) Energia solar \n d) Carvão",
        resposta:"C"
    },

    {
        pergunta:"3. Qual das alternativas abaixo é uma vantagem da energia eólica?  \n a) Baixa eficiência em áreas de pouco vento \n b)  Custo muito alto de instalação \n c) Não depende de fontes naturais, como o vento \n d) Não gera poluição ou gases do efeito estufa ",
        resposta:"D"
    },

    {
        pergunta:"4. Qual é o principal desafio da energia solar para a utilização em larga escala? \n a) A falta de sol em todas as regiões \n b) A alta emissão de gases de efeito estufa  \n c) O alto custo das células solares \n d)  A necessidade de grandes áreas para instalação  ",
        resposta:"C"
    },

    {
        pergunta:"5. Qual dessas tecnologias é usada para gerar energia através da força das águas em represas?   \n a) Energia fotovoltaica \n b) Energia hidráulica \n c) Energia geotérmica \n d) Energia biomassa",
        resposta:"B"
    },

    {
        pergunta:"6. O que é biomassa? \n a) Energia gerada a partir da decomposição de materiais radioativos \n b) Energia gerada a partir de materiais orgânicos, como madeira e resíduos agrícolas \n c)  Energia gerada através do movimento das marés \n d)  Energia gerada a partir da fissão nuclear ",
        resposta:"B"
    },

    {
        pergunta:"7.  O que caracteriza a energia geotérmica?   \n a) É proveniente do vento  \n b) É gerada a partir do calor interno da Terra  \n c) É produzida pela decomposição de materiais orgânicos  \n d)  Depende de luz solar para funcionar ",
        resposta:"B"
    },

    {
        pergunta:"8. Qual é a principal vantagem da energia hidrelétrica em relação a outras fontes de energia?  \n a) Não emite gases de efeito estufa  \n b) Requer pouca manutenção  \n c) Gera grandes quantidades de energia com baixo custo operacional  \n d)  É mais eficiente que a energia eólica ",
        resposta:"C"
    },

    {
        pergunta:"9. O que é energia solar concentrada?    \n a)  Energia que utiliza painéis solares tradicionais para gerar eletricidade  \n b) Energia que usa espelhos ou lentes para concentrar a luz do sol e gerar calor, que é convertido em eletricidade  \n c)  Energia que armazena luz solar em baterias para uso posterior  \n d)  Energia gerada a partir de biomassa usando o calor do sol ",
        resposta:"B"
    },

    {
        pergunta:"10. Qual dessas fontes de energia é considerada não renovável?    \n a) Energia Nuclear \n b) Energia solar  \n c) Energia eólica  \n d) Energia hidrelétrica ",
        resposta:"A"
    },

]

//declarando a variavel acerto
let acertos =0;

//percorrendo as perguntas
for (let i =0; i <perguntas.length; i++){
    const respostaUsuario =prompt(perguntas[i].pergunta)
    
if(respostaUsuario.toLowerCase()===perguntas[i].resposta.toLowerCase()){
    acertos++;
}




}
//mostrando o resultado na pagina quiz
document.getElementById("msg").innerHTML = (`Você acertou ${acertos} de ${perguntas.length} perguntas!`)


// mudar cor
function trocar(cor) {
    document.body.style.background = cor;
    }
    
    function mudar(){
        let novo =document.getElementById("nome");
        document.getElementById("titulo").innerHTML =novo.value;
    }
    
    //operação
    
    function calc(){
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        document.getElementById("resultado").innerHTML = num1 * num2;
    }

    
    