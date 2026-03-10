const perguntas = [
    {
        pergunta: "Qual prática ajuda a conservar o solo e reduzir pragas?",
        opcoes: ["Queimada", "Rotação de culturas", "Uso excessivo de químicos"],
        correta: "Rotação de culturas"
    },
    {
        pergunta: "O que é plantio direto?",
        opcoes: ["Evitar revolver o solo", "Queimar restos de cultura", "Uso de pesticidas"],
        correta: "Evitar revolver o solo"
    },
    {
        pergunta: "Compostagem serve para:",
        opcoes: ["Poluir o solo", "Transformar resíduos em fertilizante", "Eliminar pragas com fogo"],
        correta: "Transformar resíduos em fertilizante"
    }
];

let perguntaAtual = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const resultadoEl = document.getElementById("resultado");
const proximaBtn = document.getElementById("proxima");

function mostrarPergunta() {
    resultadoEl.textContent = "";
    proximaBtn.style.display = "none";
    const p = perguntas[perguntaAtual];
    perguntaEl.textContent = p.pergunta;
    opcoesEl.innerHTML = "";
    p.opcoes.forEach(op => {
        const btn = document.createElement("button");
        btn.textContent = op;
        btn.onclick = () => verificarResposta(op);
        opcoesEl.appendChild(btn);
    });
}

function verificarResposta(resposta) {
    const correta = perguntas[perguntaAtual].correta;
    if(resposta === correta) {
        resultadoEl.textContent = "Correto!";
        resultadoEl.style.color = "green";
    } else {
        resultadoEl.textContent = `Errado! A resposta correta é: ${correta}`;
        resultadoEl.style.color = "red";
    }
    proximaBtn.style.display = "inline-block";
}

proximaBtn.onclick = () => {
    perguntaAtual++;
    if(perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        perguntaEl.textContent = "Parabéns! Você terminou o quiz.";
        opcoesEl.innerHTML = "";
        proximaBtn.style.display = "none";
    }
}

mostrarPergunta();
