const periodos = document.querySelector('.periodos');

export default function selectFuncionalidadeTrigger() {
  periodos.addEventListener('click', e => {
    const { target } = e;
    if (target.classList.contains('periodo__funcionalidade')) {
      target.classList.toggle('periodo__funcionalidade--ativa');
      target.nextSibling.nextSibling.classList.toggle('periodo__descritivo--visivel');
    }
  });
}
