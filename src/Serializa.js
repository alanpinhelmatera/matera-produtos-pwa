export default function serializa(response) {
  const prefixoValorGS = '$t';
  const { entry: registros } = response.feed;
  const atributos = Object.keys(registros[0]).filter(atributo => atributo.startsWith('gsx$'));

  return registros.map(registro =>
    atributos.reduce(
      (acc, atributo) => ({
        ...acc,
        [atributo.replace('gsx$', '')]: registro[atributo][prefixoValorGS]
      }),
      {}
    )
  );
}
