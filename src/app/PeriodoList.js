import renderPeriodoProdutos from './PeriodoProdutoList';

function createMarkup({ produtos: todosProdutos, periodos }) {
  return periodos
    .map(
      periodo => `
        <div class="periodo">
          <h2 class="periodo__titulo">${periodo.titulo}</h2>
          ${renderPeriodoProdutos({ produtos: periodo.produtos, todosProdutos })}
        </div>
      `
    )
    .join('');
}

export default function renderPeriodos(dados, element) {
  const markup = createMarkup(dados);
  element.innerHTML = markup;
}
