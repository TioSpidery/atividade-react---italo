// Card reutilizável: todos os dados chegam por Props.
// Props: titulo, imagem, descricao, categoria, preco
function Card({ titulo, imagem, descricao, categoria, preco }) {
  const precoFormatado = preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <article className="card">
      <img src={imagem} alt={`Capa do jogo ${titulo}`} className="card-imagem" />
      <div className="card-corpo">
        <span className="card-categoria">{categoria}</span>
        <h3 className="card-titulo">{titulo}</h3>
        <p className="card-descricao">{descricao}</p>
        <p className="card-preco">{precoFormatado}</p>
      </div>
    </article>
  )
}

export default Card
