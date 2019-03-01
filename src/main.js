import './assets/styles/produtos.css';
import './assets/styles/periodos.css';
import './assets/styles/periodo.css';
import './assets/styles/checkbox.css';
import selectModalidadeTrigger from './app/SelectModalidadeTrigger';
import selectProdutoTrigger from './app/SelectProdutoTrigger';
import selectFuncionalidadeTrigger from './app/SelectFuncionalidadeTrigger';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(reg => console.info('registered sw', reg))
    .catch(err => console.error('error registering sw', err));
}

selectModalidadeTrigger();
selectProdutoTrigger();
selectFuncionalidadeTrigger();
