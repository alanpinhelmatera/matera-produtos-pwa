import './assets/styles/produtos.css';
import './assets/styles/periodos.css';
import './assets/styles/periodo.css';
import './assets/styles/checkbox.css';
import selectModalidadeTrigger from './app/SelectModalidadeTrigger';
import selectProdutoTrigger from './app/SelectProdutoTrigger';
import selectFuncionalidadeTrigger from './app/SelectFuncionalidadeTrigger';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
}

selectModalidadeTrigger();
selectProdutoTrigger();
selectFuncionalidadeTrigger();
