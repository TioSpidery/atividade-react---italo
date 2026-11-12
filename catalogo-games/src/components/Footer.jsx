function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>© {ano} PixelHub – Catálogo de Jogos. Projeto acadêmico em React.</p>
      </div>
    </footer>
  )
}

export default Footer
