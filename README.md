# 🎮 PixelHub – Catálogo de Jogos

Aplicação web desenvolvida em **React** com **Vite** para a atividade prática avaliativa de React.js. O projeto apresenta um catálogo de jogos digitais e aplica os três conceitos centrais da disciplina: **Componentes**, **Props** e **Rotas** (React Router).

## 📌 Sobre o projeto

A PixelHub é um site fictício que exibe uma lista de jogos organizados por categoria, com imagem, descrição e preço. O site possui cinco páginas, navegação sem recarregar a página e layout responsivo (funciona em computador e celular).

## 🛠️ Tecnologias utilizadas

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM 6](https://reactrouter.com/)
- CSS puro (Flexbox e CSS Grid)

## ▶️ Como executar

Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço exibido no terminal (normalmente `http://localhost:5173`).

## 🗺️ Páginas e rotas

| Rota        | Página     | Conteúdo                                         |
| ----------- | ---------- | ------------------------------------------------ |
| `/`         | Home       | Apresentação do projeto                          |
| `/produtos` | Produtos   | Listagem de 6 jogos usando o componente `Card`   |
| `/sobre`    | Sobre      | Informações sobre a aplicação                    |
| `/contato`  | Contato    | Formulário visual com nome, e-mail e mensagem    |
| `*`         | NotFound   | Página 404 para rotas inexistentes               |

## 📁 Estrutura de pastas

```
src/
├── components/
│   ├── Header.jsx     # Cabeçalho com logo e menu
│   ├── Menu.jsx       # Links de navegação
│   ├── Footer.jsx     # Rodapé
│   ├── Card.jsx       # Card reutilizável de jogo
│   └── Button.jsx     # Botão reutilizável (botão ou link)
├── pages/
│   ├── Home.jsx
│   ├── Produtos.jsx
│   ├── Sobre.jsx
│   ├── Contato.jsx
│   └── NotFound.jsx
├── data/
│   └── jogos.js       # Array de objetos com os dados dos jogos
├── App.jsx            # Define as rotas da aplicação
├── main.jsx           # Ponto de entrada (BrowserRouter + render)
└── index.css          # Estilos globais e responsividade
public/
└── img/               # Capas dos jogos (SVG)
```

## ✅ Requisitos da atividade

### 1. Componentes

Foram criados 5 componentes funcionais e reutilizáveis, cada um em seu próprio arquivo dentro de `src/components/`: `Header`, `Menu`, `Footer`, `Card` e `Button`. Todos são importados e usados na aplicação, evitando repetição de código (por exemplo, o `Button` é usado em várias páginas e o `Card` é usado seis vezes).

### 2. Props

O componente `Card` recebe por props o `titulo`, a `imagem`, a `descricao`, a `categoria` e o `preco` de cada jogo. Na página `Produtos.jsx`, os dados vêm de um array de objetos (`src/data/jogos.js`) e são renderizados com `.map()`, gerando 6 cards diferentes a partir de um único componente. O `Button` também usa props (`to`, `variante`, `type` e `children`).

### 3. Rotas

A navegação foi feita com `react-router-dom`. As rotas são definidas em `App.jsx` com `Routes` e `Route`, e o `BrowserRouter` envolve a aplicação em `main.jsx`. Os links usam `Link` e `NavLink` (em `Header.jsx`, `Menu.jsx` e `Button.jsx`), o que permite navegar entre as páginas sem recarregar o site. Rotas inexistentes mostram a página 404.

### 4. Integração e funcionamento

Componentes, props e rotas trabalham juntos: o `App` monta o `Header`, o `Footer` e a área de rotas; cada página usa os componentes necessários; e o layout é responsivo graças a `flex`, `grid` e `@media` no `index.css`.

## ✏️ Como alterar o conteúdo

- **Mudar nome, imagem, descrição ou preço de um jogo:** edite o objeto correspondente em `src/data/jogos.js`.
- **Adicionar um novo Card:** adicione um novo objeto ao array em `src/data/jogos.js` (com um `id` novo).
- **Criar uma nova rota:** crie o arquivo em `src/pages/`, adicione um `<Route>` em `App.jsx` e um item no array `itens` de `src/components/Menu.jsx`.

## 🔍 Explicação dos principais códigos

### `main.jsx` – ponto de entrada

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

Pega a `<div id="root">` do `index.html` e renderiza o React dentro dela. O `BrowserRouter` envolve o `App` para ativar o sistema de rotas em toda a aplicação. Sem ele, `Link` e `Route` não funcionam.

### `App.jsx` – estrutura do site e rotas

```jsx
<Header />
<main className="conteudo">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produtos" element={<Produtos />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="/contato" element={<Contato />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</main>
<Footer />
```

O `Header` e o `Footer` ficam fora do `Routes`, por isso aparecem em todas as páginas. Dentro do `Routes`, cada `Route` liga um endereço (`path`) a uma página (`element`). O caminho `*` captura qualquer endereço inexistente e mostra a página 404.

### `data/jogos.js` – dados dos jogos

```js
const jogos = [
  {
    id: 1,
    titulo: 'Nebula Runner',
    imagem: '/img/nebula-runner.svg',
    descricao: 'Corra entre asteroides...',
    categoria: 'Corrida',
    preco: 79.9,
  },
  // ... mais 5 jogos
]
export default jogos
```

É um array de objetos. Cada objeto representa um jogo. Para alterar nome, imagem, descrição ou preço, basta editar este arquivo.

### `components/Card.jsx` – uso de Props

```jsx
function Card({ titulo, imagem, descricao, categoria, preco }) {
  return (
    <article className="card">
      <img src={imagem} alt={`Capa do jogo ${titulo}`} />
      <span>{categoria}</span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p>{preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
    </article>
  )
}
```

As chaves `{ titulo, imagem, ... }` na declaração da função recebem as **props**. O Card não sabe qual jogo vai exibir, quem decide isso é o componente que o utiliza. O `toLocaleString` formata o número como moeda (ex.: `R$ 79,90`).

### `pages/Produtos.jsx` – `.map()` e envio de Props

```jsx
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
```

O `.map()` percorre o array `jogos` e cria um `Card` para cada item, enviando os dados por props. A propriedade `key` é obrigatória em listas, pois ajuda o React a identificar cada elemento.

### `components/Button.jsx` – componente com dois comportamentos

```jsx
function Button({ to, children, variante = 'primario', type = 'button', onClick }) {
  if (to) {
    return <Link to={to} className={`botao botao-${variante}`}>{children}</Link>
  }
  return <button type={type} className={`botao botao-${variante}`} onClick={onClick}>{children}</button>
}
```

Se receber a prop `to`, o botão vira um `Link` (navega sem recarregar a página). Caso contrário, vira um `<button>` comum, usado no formulário. O `children` é o texto escrito entre as tags do componente e `variante` tem um valor padrão (`'primario'`).

### `components/Menu.jsx` – navegação

```jsx
const itens = [
  { rota: '/', texto: 'Início' },
  { rota: '/produtos', texto: 'Jogos' },
  { rota: '/sobre', texto: 'Sobre' },
  { rota: '/contato', texto: 'Contato' },
]

{itens.map((item) => (
  <li key={item.rota}>
    <NavLink to={item.rota} end={item.rota === '/'}>{item.texto}</NavLink>
  </li>
))}
```

Os links do menu são gerados com `.map()` a partir de um array. O `NavLink` funciona como um `Link`, mas também sabe qual página está ativa, o que permite destacar o item atual no menu.

### `components/Header.jsx` e `components/Footer.jsx`

O `Header` mostra o logo (um `Link` para `/`) e usa o componente `Menu` dentro dele, mostrando que componentes podem ser combinados. O `Footer` exibe o rodapé e calcula o ano atual com `new Date().getFullYear()`.

### `pages/Contato.jsx` – formulário e estado

```jsx
const [enviado, setEnviado] = useState(false)

function aoEnviar(evento) {
  evento.preventDefault()
  setEnviado(true)
  evento.target.reset()
}

{enviado && <p>Mensagem enviada com sucesso!</p>}
```

O `useState` cria uma variável que o React monitora: quando ela muda, a tela é atualizada. O `preventDefault()` impede que o formulário recarregue a página. O formulário é apenas visual e não envia dados para nenhum servidor.

### `index.css` – estilos e responsividade

```css
.grade-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.4rem;
}

@media (max-width: 600px) { /* ajustes para celular */ }
```

O CSS Grid com `auto-fill` e `minmax` coloca quantas colunas couberem na tela, deixando os cards responsivos. As variáveis em `:root` (como `--destaque`) concentram as cores do tema, e o `@media` ajusta o layout para telas pequenas.

## 👤 Autor

Projeto desenvolvido por Esaú Victor para a disciplina de Análise e Desenvolvimento de Sistemas (ADS) Matricula - 01880274. 
Projeto desenvolvido por Vitor Miguel para a disciplina de Análise e Desenvolvimento de Sistemas (ADS) Matricula - 01903891.
