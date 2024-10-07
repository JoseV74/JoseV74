const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você gosta mais de filmes ou séries ?",
        alternativas: [
            {
                texto: "Resposta A: Filmes",
                afirmacao: "Comentário: Filmes são uma forma rápida de contar histórias impactantes, perfeitos para uma sessão de cinema em casa."
            },
            {
                texto: "resposta B: Séries",
                afirmacao: "Comentário: Séries permitem um desenvolvimento mais profundo dos personagens e tramas, criando um vínculo maior com a história."
            }
        ]
    },
    {
        enunciado: "Pergunta 2: Qual estação do ano você prefere ?",
        alternativas: [
            {
                texto: "Resposta A: Verão",
                afirmacao: "Comentário: O verão é ideal para quem ama o sol e atividades ao ar livre, como praias e passeios."
            },
            {
                texto: "Resposta B: Inverno",
                afirmacao: "Comentário: O inverno traz aconchego, com a possibilidade de bebidas quentes e momentos em família, além de esportes de neve."
            }
        ]
    },
    {
        enunciado: "Pergunta 3: Você prefere cozinhar ou comer fora ?",
        alternativas: [
            {
                texto: "Resposta A: Cozinhar",
                afirmacao: "Comentário: Cozinhar permite experimentar receitas novas e personalizar pratos de acordo com seu gosto."
            },
            {
                texto: "Resposta B: Comer fora",
                afirmacao: "Comentário: Comer fora é uma ótima forma de explorar diferentes culinárias e desfrutar de um momento relaxante sem se preocupar com a limpeza."
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é uma pessoa que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
