import Button from '../components/Button.jsx'

function Sobre() {
  return (
    <section className="container texto-pagina">
      <h1 className="titulo-pagina">Sobre a aplicação</h1>
      <p>
        A PixelHub é uma aplicação web criada para apresentar um catálogo de
        jogos de forma simples e organizada. Ela foi desenvolvida com{' '}
        <strong>React</strong> e <strong>Vite</strong>, como atividade prática
        avaliativa.
      </p>

      <h2>Conceitos aplicados</h2>
      <ul>
        <li>
          <strong>Componentes:</strong> Header, Menu, Footer, Card e Button,
          cada um em seu próprio arquivo.
        </li>
        <li>
          <strong>Props:</strong> o componente Card recebe título, imagem,
          descrição, categoria e preço de um array de objetos.
        </li>
        <li>
          <strong>Rotas:</strong> navegação com react-router-dom, sem recarregar
          a página, incluindo uma página 404.
        </li>
      </ul>

      <Button to="/contato">Fale conosco</Button>
    </section>
  )
}

export default Sobre
