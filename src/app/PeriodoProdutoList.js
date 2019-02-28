import renderFuncionalidades from './FuncionalidadeList';

function createMarkup({ produtos, todosProdutos }) {
  return produtos
    .map(
      produto => `
        <h3 class="periodo__produto">${
          todosProdutos.find(infoProduto => infoProduto.id === produto.id).nome
        }</h3>
        ${renderFuncionalidades(produto.funcionalidades)}
      `
    )
    .join('');
}

export default function renderPeriodoProdutos(dados) {
  return createMarkup(dados);
}
