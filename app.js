/*seleçao e criaçao de div, p etc..*/
const engrenagens = {
  container: document.querySelector(".container"),
  listaAtividades: document.querySelector(".lista_atividades"),
  input: document.querySelector(".input"),
  erro: document.querySelector(".erro"),
  botaoCadastra: document.querySelector(".botao_adc"),
  paletasDiv: document.querySelector(".paletas_div"),
  limparGeral: document.querySelector(".botao_del_todos"),
};
/* criaçao de conteudos no html*/
const moldagem = {
  titulo: document.createElement("h1"),
  nomeAtividade: document.createElement("p"),
};
/* declaraçao/captura das paletas */
const paletas = {
  paleta1: document.querySelector("#paleta1"),
  paleta2: document.querySelector("#paleta2"),
  paleta3: document.querySelector("#paleta3"),
};
/*declaraçao dos objetos  */
let {
  container,
  listaAtividades,
  input,
  erro,
  botaoCadastra,
  paletasDiv,
  limparGeral,
} = engrenagens;

let { titulo, nomeAtividade } = moldagem;

let { paleta1, paleta2, paleta3 } = paletas;

botaoCadastra.addEventListener("click", () => cadastraAtividade());
paleta1.addEventListener("click", () => definePaleta("seagreen"));
paleta2.addEventListener("click", () => definePaleta("slateblue"));
paleta3.addEventListener("click", () => definePaleta("tomato"));
limparGeral.addEventListener("click", () => removeAtividades());

function definePaleta(cor) {
  container.style.background = cor;
  listaAtividades.style.background = cor;
}

function removeAtividades() {
  while (listaAtividades.firstElementChild) {
    listaAtividades.removeChild(listaAtividades.firstElementChild);
  }
}

function criaAtividade() {
  const atividade = document.createElement("div");
  atividade.classList.add("atividade");
  atividade.textContent = input.value;
  const botaoLimpar = document.createElement("button");
  botaoLimpar.textContent = "Limpar";
  botaoLimpar.classList.add("botao_del");
  botaoLimpar.addEventListener("click", () => removeAtividade(atividade));
  listaAtividades.appendChild(atividade);
  atividade.appendChild(nomeAtividade);
  atividade.appendChild(botaoLimpar);
}

function removeAtividade(atividade) {
  listaAtividades.removeChild(atividade);
}

function cadastraAtividade() {
  if (input.value.length > 3) {
    erro.style.display = "none";
    criaAtividade();
  } else {
    erro.style.display = "grid";
    erro.innerHTML = `${input.value} não é uma atividade válida!`;
  }
  limpaInput();
}

function limpaInput() {
  input.value = "";
}

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    cadastraAtividade();
  }
});
