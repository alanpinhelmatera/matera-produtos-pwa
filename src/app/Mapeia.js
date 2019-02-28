import uuidv1 from 'uuid/v1';
import periodosFixos from './utils';

export default function mapeia(registros) {
  const produtos = registros
    .map(r => r.produto)
    .filter((p, i, arr) => arr.indexOf(p) === i)
    .map(p => ({ id: uuidv1(), nome: p }));

  const periodos = Object.keys(periodosFixos).map(periodoFixo => ({
    titulo: periodosFixos[periodoFixo],
    produtos: registros
      .filter(registro => !!registro[periodoFixo])
      .map(registro => ({
        funcionalidade: registro[periodoFixo],
        descritivo: registro.descritivo,
        id: produtos.find(p => p.nome === registro.produto).id
      }))
  }));

  return {
    produtos,
    periodos: periodos.map(periodo => ({
      ...periodo,
      produtos: produtos.map(produto => ({
        id: produto.id,
        funcionalidades: periodo.produtos
          .filter(periodoProduto => periodoProduto.id === produto.id)
          .map(periodoProduto => ({
            nome: periodoProduto.funcionalidade,
            descritivo: periodoProduto.descritivo
          }))
      }))
    }))
  };
}
