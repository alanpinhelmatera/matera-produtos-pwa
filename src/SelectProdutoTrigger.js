import planilha from './Planilha';
import renderPeriodos from './PeriodoList';

const produtos = document.querySelector('.produtos');
const periodos = document.querySelector('.periodos');
let ultimaSelecaoPeriodos = [];

function makeRequest(idsProdutosSelecionados) {
  planilha.getPeriodos(idsProdutosSelecionados).then(dados => {
    if (JSON.stringify(dados.periodos) !== JSON.stringify(ultimaSelecaoPeriodos)) {
      renderPeriodos(dados, periodos);
      ultimaSelecaoPeriodos = dados.periodos;
    }
  });
}

export default function selectProdutoTrigger() {
  produtos.addEventListener('change', () => {
    const selecionados = document.querySelectorAll('input[data-id-produto]:checked');
    makeRequest(Array.from(selecionados, s => s.getAttribute('data-id-produto')));
  });
}
