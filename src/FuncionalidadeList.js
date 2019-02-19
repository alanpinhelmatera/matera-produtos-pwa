function createMarkup(funcionalidades) {
  return funcionalidades
    .map(
      funcionalidade => `
        <button class="periodo__funcionalidade">
          ${funcionalidade.nome}
        </button>
        <div class="periodo__descritivo">
          ${funcionalidade.descritivo}
        </div>
      `
    )
    .join('');
}

export default function renderFuncionalidades(dados) {
  return createMarkup(dados);
}
