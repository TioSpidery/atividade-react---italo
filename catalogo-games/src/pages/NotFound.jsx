import Button from '../components/Button.jsx'

function NotFound() {
  return (
    <section className="container nao-encontrada">
      <h1>404</h1>
      <p>Ops! A página que você procura não existe.</p>
      <Button to="/">Voltar para o início</Button>
    </section>
  )
}

export default NotFound
