import Card from '../components/Card.jsx'
import jogos from '../data/jogos.js'

function Produtos() {
  return (
    <section className="container">
      <h1 className="titulo-pagina">Catálogo de jogos</h1>
      <p className="subtitulo-pagina">
        Conheça os {jogos.length} títulos disponíveis na PixelHub.
      </p>

      <div className="grade-cards">
        {jogos.map((jogo) => (
          <Card
            key={jogo.id}
            titulo={jogo.titulo}
            imagem={jogo.imagem}
            descricao={jogo.descricao}
            categoria={jogo.categoria}
            preco={jogo.preco}
          />
        ))}
      </div>
    </section>
  )
}

export default Produtos
