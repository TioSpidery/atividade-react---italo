import { useState } from 'react'
import Button from '../components/Button.jsx'

function Contato() {
  const [enviado, setEnviado] = useState(false)

  function aoEnviar(evento) {
    evento.preventDefault()
    setEnviado(true)
    evento.target.reset()
  }

  return (
    <section className="container">
      <h1 className="titulo-pagina">Contato</h1>
      <p className="subtitulo-pagina">
        Envie sua dúvida ou sugestão de jogo para a nossa equipe.
      </p>

      <form className="formulario" onSubmit={aoEnviar}>
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" type="text" placeholder="Seu nome" required />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="seu@email.com"
          required
        />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows="5"
          placeholder="Escreva sua mensagem"
          required
        />

        <Button type="submit">Enviar mensagem</Button>

        {enviado && (
          <p className="aviso-sucesso" role="status">
            Mensagem enviada com sucesso! (simulação visual)
          </p>
        )}
      </form>
    </section>
  )
}

export default Contato
