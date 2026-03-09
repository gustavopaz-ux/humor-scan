const perguntas = [
  {
    Texto: "Como você está agora?",
    opcoes: [
      {
        rotulo: "Em silêncio comigo mesmo",
        pontos: { desanimado: 3, introspectivo: 2, indeciso: 1 },
      },
      {
        rotulo: "Em todos os lugares ao mesmo tempo",
        pontos: { ansioso: 3, euforico: 2, sobrecarregado: 1 },
      },
      {
        rotulo: "Entre o que foi e o que virá",
        pontos: { nostalgico: 3, indeciso: 2, incerteza: 1 },
      },
      {
        rotulo: "Sem bússola, apenas fluindo",
        pontos: { indeciso: 3, incerteza: 2, transicao: 1 },
      },
    ],
  },
  {
    Texto: "O que você deseja agora?",
    opcoes: [
      {
        rotulo: "O conforto do silêncio",
        pontos: { transicao: 3, desanimado: 2, introspectivo: 1 },
      },
      {
        rotulo: "Som alto e movimento",
        pontos: { euforico: 3, ansioso: 2, esperancoso: 1 },
      },
      {
        rotulo: "Pausa para recordar",
        pontos: { nostalgico: 3, introspectivo: 2, incerteza: 1 },
      },
      {
        rotulo: "Impulso para criar",
        pontos: { sobrecarregado: 3, esperancoso: 2, euforico: 1 },
      },
    ],
  },
  {
    Texto: "Se hoje você fosse uma cor...",
    opcoes: [
      {
        rotulo: "Um preto profundo e calmo",
        pontos: { introspectivo: 3, desanimado: 2, transicao: 1 },
      },
      {
        rotulo: "Um laranja que queima e alegra",
        pontos: { euforico: 3, ansioso: 2, nostalgico: 1 },
      },
      {
        rotulo: "Um azul vasto e distante",
        pontos: { incerteza: 3, indeciso: 2, nostalgico: 1 },
      },
      {
        rotulo: "Um verde que pulsa a vida",
        pontos: { esperancoso: 3, sobrecarregado: 2, euforico: 1 },
      },
    ],
  },
  {
    Texto: "Qual frase te define agora?",
    opcoes: [
      {
        rotulo: "Tudo ao mesmo tempo agora",
        pontos: { ansioso: 3, euforico: 2, sobrecarregado: 1 },
      },
      {
        rotulo: "O silêncio também fala",
        pontos: { desanimado: 3, introspectivo: 2, indeciso: 1 },
      },
      {
        rotulo: "Ainda sinto o perfume daquele dia",
        pontos: { nostalgico: 3, incerteza: 2, transicao: 1 },
      },
      {
        rotulo: "Estou me tornando algo novo",
        pontos: { esperancoso: 3, sobrecarregado: 2, transicao: 1 },
      },
    ],
  },
  {
    Texto: "Como você se sente ao final do dia?",
    opcoes: [
      {
        rotulo: "Exausto, mas presente",
        pontos: { desanimado: 3, transicao: 2, introspectivo: 1 },
      },
      {
        rotulo: "Revendo cada passo dado",
        pontos: { euforico: 3, ansioso: 2, nostalgico: 1 },
      },
      {
        rotulo: "Entre o despertar e o sonho",
        pontos: { incerteza: 3, indeciso: 2, nostalgico: 1 },
      },
      {
        rotulo: "Em paz com o inesperado",
        pontos: { esperancoso: 3, sobrecarregado: 2, euforico: 1 },
      },
    ],
  },
];

const humores = {
  euforico: {
    nome: "EUFÓRICO",
    frase:
      "Você está em chamas - uma força que não pede licença para existir. O mundo parece pequeno demais para a energia que carrega.",
    etiquetas: ["intensidade", "presença", "movimento"],
    corFundo: "#0d0010",
    brilho: "#ff2d78",
    destaque: "#ff2d78",
    particula: "#ff2d78",
  },
  indeciso: {
    nome: "INDECISO",
    frase:
      "Entre dois mundos, suspenso no ar. Você habita o espaço que existe entre o que foi e o que ainda não chegou.",
    etiquetas: ["transição", "espera", "entre-lugar"],
    corFundo: "#000d14",
    brilho: "#00f5d4",
    destaque: "#00f5d4",
    particula: "#00f5d4",
  },
  nostalgico: {
    nome: "NOSTÁLGICO",
    frase:
      "Memórias que doem de tão bonitas. Você revisita lugares que só existem dentro de você agora.",
    etiquetas: ["memória", "saudade", "tempo"],
    corFundo: "#120800",
    brilho: "#ff7c2d",
    destaque: "#ff7c2d",
    particula: "#ffaa55",
  },
  desanimado: {
    nome: "DESANIMADO",
    frase:
      "O vazio não é ausência - é espaço de potencial puro. Você encontrou a paz que existe no silêncio absoluto.",
    etiquetas: ["silêncio", "paz", "profundidade"],
    corFundo: "#030308",
    brilho: "#7b2fff",
    destaque: "#7b2fff",
    particula: "#9966ff",
  },
  sobrecarregado: {
    nome: "SOBRECARREGADO",
    frase:
      "Sua realidade está com falha de sinal - e é exatamente aí onde a coisa fica interessante. O caos tem sua própria lógica.",
    etiquetas: ["caos", "crição", "ruptura"],
    corFundo: "#000f0a",
    brilho: "#00ff88",
    destaque: "#00ff88",
    particula: "#00ffcc",
  },
  introspectivo: {
    nome: "INTROSPECTIVO",
    frase:
      "Sozinho, mais inteiro. Você descobriu que a sua própria companhia é suficiente -  e isso é raro.",
    etiquetas: ["introspecção", "calma", "presença"],
    corFundo: "#08080f",
    brilho: "#aab0ff",
    destaque: "#aab0ff",
    particula: "#8899ff",
  },
  ansioso: {
    nome: "ANSIOSO",
    frase:
      "Tudo ao mesmo tempo agora. Você está no olho do furacão - e em vez de fugir, escolheu dançar nele.",
    etiquetas: ["urgência", "caos", "velocidade"],
    corFundo: "#100005",
    brilho: "#ff003c",
    destaque: "#ff003c",
    particula: "#ff003c",
  },
  incerteza: {
    nome: "INCERTEZA",
    frase:
      "Flutuando sem destino certo, mas sem ansiedade. Você aprendeu que nem toda jornada precisa de mapa.",
    etiquetas: ["deriva", "liberdade", "presente"],
    corFundo: "#000a10",
    brilho: "#00c8ff",
    destaque: "#00c8ff",
    particula: "#55ddff",
  },
  esperancoso: {
    nome: "ESPERANÇOSO",
    frase:
      "Crescendo em silêncio, prestes a explodir em luz. Algo em você está florescendo - mesmo que ainda não apareça por fora.",
    etiquetas: ["crescimento", "renovação", "potencial"],
    corFundo: "#05100a",
    brilho: "#44ff99",
    destaque: "#44ff99",
    particula: "#88ffbb",
  },
  transicao: {
    nome: "EM TRANSIÇÃO",
    frase:
      "Escuridão com promessa de luz. Você está no momento antes do amanhecer - o mais escuro, mas não o final.",
    etiquetas: ["transição", "profundidade", "esperança"],
    corFundo: "#080010",
    brilho: "#cc55ff",
    destaque: "#cc55ff",
    particula: "#ee88ff",
  },
};

let perguntaAtual = 0;
let pontuacoes = {};
const zerarPontuacoes = () =>
  Object.keys(humores).forEach((k) => (pontuacoes[k] = 0));
zerarPontuacoes();

const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
document.addEventListener("mousedown", () => cursor.classList.add("grande"));
document.addEventListener("mouseup", () => cursor.classList.remove("grande"));

const telaParticulas = document.getElementById("tela-particulas");
const ctx = telaParticulas.getContext("2d");
let particulas = [],
  corAtiva = "#ff2d78";

const redimensionar = () => {
  telaParticulas.width = innerWidth;
  telaParticulas.height = innerHeight;
};
redimensionar();
window.addEventListener("resize", redimensionar);

class Particula {
  constructor(cor) {
    this.x = Math.random() * telaParticulas.width;
    this.y = Math.random() * telaParticulas.height;
    this.vx = (Math.random() - 0.5) * 1.3;
    this.vy = (Math.random() - 0.5) * 1.3;
    this.raio = Math.random() * 2.2 + 0.5;
    this.alfa = Math.random() * 0.65 + 0.1;
    this.cor = cor;
    this.vida = 1;
    this.decaimento = Math.random() * 0.002 + 0.001;
  }
  atualizar() {
    this.x += this.vx;
    this.y += this.vy;
    this.vida -= this.decaimento;
    if (this.x < 0 || this.x > telaParticulas.width) this.vx *= -1;
    if (this.y < 0 || this.y > telaParticulas.height) this.vy *= -1;
  }
  desenhar() {
    ctx.save();
    ctx.globalAlpha = this.vida * this.alfa;
    ctx.fillStyle = this.cor;
    ctx.shadowBlur = 12;
    ctx.shadowColor = this.cor;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

const gerarParticulas = (cor, quantidade = 60) => {
  for (let i = 0; i < quantidade; i++)
    particulas.push(new Particula(cor || corAtiva));
};
gerarParticulas("#ff2d78", 45);

(function loopAnimacao() {
  ctx.clearRect(0, 0, telaParticulas.width, telaParticulas.height);
  particulas = particulas.filter((p) => p.vida > 0);
  if (particulas.length < 50) gerarParticulas(corAtiva, 8);
  particulas.forEach((p) => {
    p.atualizar();
    p.desenhar();
  });
  requestAnimationFrame(loopAnimacao);
})();

/* GERENCIAR TELAS */
const exibirTela = (id) => {
  document
    .querySelectorAll(".tela")
    .forEach((t) => t.classList.remove("ativa"));
  document.getElementById(id).classList.add("ativa");
};

function iniciarQuiz() {
  perguntaAtual = 0;
  zerarPontuacoes();
  exibirTela("tela-quiz");
  renderizarPergunta();
}

function renderizarPergunta() {
  const q = perguntas[perguntaAtual];
  document.getElementById("etapa-atual").textContent =
    `PERGUNTA ${perguntaAtual + 1} / ${perguntas.length}`;

  const elPergunta = document.getElementById("texto-pergunta");
  elPergunta.style.opacity = 0;
  setTimeout(() => {
    elPergunta.textContent = q.Texto;
    elPergunta.style.opacity = 1;
  }, 200);

  const e1opcoes = document.getElementById("grade-opcoes");
  e1opcoes.innerHTML = "";
  const letras = ["A", "B", "C", "D"];

  q.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement("button");
    botao.className = "opcao";
    botao.style.cssText = `opacity:0; animation: subirFadeIn .4s ease ${indice * 0.08}s both;`;
    botao.innerHTML = `<span class="opcao-letra">${letras[indice]}</span>${opcao.rotulo}`;
    botao.onclick = () => selecionarOpcao(opcao.pontos);
    e1opcoes.appendChild(botao);
  });
}

function selecionarOpcao(pontos) {
  Object.entries(pontos).forEach(
    ([chave, valor]) => (pontuacoes[chave] += valor),
  );
  perguntaAtual++;
  document.getElementById("progresso").style.width =
    (perguntaAtual / perguntas.length) * 100 + "%";
  if (perguntaAtual < perguntas.length) {
    renderizarPergunta();
  } else {
    iniciarAnalise();
  }
}
/* ANÁLISE */
function iniciarAnalise() {
  exibirTela("tela-analise");
  setTimeout(exibirResultado, 2200);
}

/* RESULTADO */
function exibirResultado() {
  const melhor = Object.entries(pontuacoes).sort((a, b) => b[1] - a[1])[0][0];
  const humor = humores[melhor];

  corAtiva = humor.particula;
  gerarParticulas(humor.particula, 130);
  document.body.style.background = humor.corFundo;
  cursor.style.borderColor = humor.destaque;

  const elNomeHumor = document.getElementById("nome-humor");
  elNomeHumor.textContent = humor.nome;
  elNomeHumor.style.color = humor.destaque;
  elNomeHumor.style.textShadow = `0 0 80px ${humor.brilho}, 0 0 20px ${humor.brilho}`;

  document.getElementById("linha-separadora").style.background =
    `linear-gradient(90deg, transparent, ${humor.destaque}, transparent)`;

  const elFrase = document.getElementById("frase-resultado");
  elFrase.textContent = humor.frase;
  elFrase.style.borderColor = humor.destaque;

  document.getElementById("etiquetas-resultado").innerHTML = humor.etiquetas
    .map((e) => `<span class="etiqueta-item">#${e}</span>`)
    .join("");

  document.getElementById("progresso").style.width = "100%";
  exibirTela("tela-resultado");
}

/* REINICIAR */
function reiniciar() {
  document.body.style.background = "var(--fundo)";
  corAtiva = "#ff2d78";
  cursor.style.borderColor = "var(--destaque2)";

  particulas = [];
  gerarParticulas("#ff2d78", 45);

  zerarPontuacoes();
  exibirTela("tela-inicio");
}
