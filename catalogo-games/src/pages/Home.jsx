import Button from '../components/Button.jsx'

function Home() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Bem-vindo à PixelHub</h1>
        <p className="hero-texto">
          Um catálogo de jogos digitais organizado por categoria, com descrições
          e preços para você escolher sua próxima aventura. Este projeto foi
          desenvolvido em React para demonstrar o uso de componentes, props e
          rotas.
        </p>
        <div className="hero-botoes">
          <Button to="/produtos">Ver catálogo</Button>
          <Button to="/sobre" variante="secundario">
            Saiba mais
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Home
