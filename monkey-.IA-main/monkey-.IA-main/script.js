const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".caixa-resultado");

const perguntas =[
    {
        enunciado:"Assim que saiu do colégio você se depara com uma nova tecnologia, um chat que consegue responder todas as duvidas que uma pessoa pode ter, ele também gera imagens  audios hiper realista. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto:"Isso é assustador",
                afirmacao: "No inicio eu ficaria com medo do que essa tecnologia pode fazer"
            }
            {
                texto:"Isso é incrivel!",
                afirmacao:"Sempre quis saber como usar uma IA em meu dia a dia."

            }
        ]
    }
]