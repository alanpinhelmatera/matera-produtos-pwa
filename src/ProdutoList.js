function createMarkup({ modalidade, produtos }) {
  return produtos
    .map(
      produto => `
        <label class="checkbox checkbox--tema-${modalidade}">
          <div class="checkbox__container">
            <input class="checkbox__input" type="checkbox" data-id-produto="${produto.id}">
            <div class="checkbox__frame"></div>
            <div class="checkbox__background">
              <svg
                class="checkbox__checkmark"
                xml:space="preserve"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  class="checkbox__checkmark-path"
                  d="M4.1,12.7 9,17.6 20.3,6.3"
                  fill="none"
                  stroke="white"
                ></path>
              </svg>
            </div>
          </div>
          <span class="checkbox__label">
            ${produto.nome}
          </span>
        </label>
      `
    )
    .join('');
}

export default function renderProdutos(dados, element) {
  const markup = createMarkup(dados);
  element.innerHTML = markup;
}
