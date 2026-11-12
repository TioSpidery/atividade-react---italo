import { Link } from 'react-router-dom'

function Button({ to, children, variante = 'primario', type = 'button', onClick }) {
  const classe = `botao botao-${variante}`

  if (to) {
    return (
      <Link to={to} className={classe}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classe} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
