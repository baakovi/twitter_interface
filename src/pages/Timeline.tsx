import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Timeline.css'

// Iterações
// const tweets = 

// Lidar com eventos a partir da iteração do usuário: métodos ON

// SPA -> evitar redirecionamento

// let newTweet = ''

// Proxy

// FormEvents -> eventos disparados do formulário
export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  // Estado -> variáveis que o React monitora, reagir a está alteração
  const [tweets, setTweets] = useState([
      'Meu primeiro tweet',
      'Testando',
      'Deu certo tweetar!'
   ])

  function createNewTweet(event: FormEvent) {
    // console.log("Teste")
    event.preventDefault()

    // Super importante de entender no React, os fundamentos de useState()
    setTweets([newTweet, ...tweets])

    // Imutabilidade -> performance no React, de maneira prática, nunca altera informações no React, criar um novo array para inserir novas informações, copiando as informações já existentes

    // No React, sempre que foi criar um estado, é importante lembra que as informações não são alteradas, elas são criadas novas a partir das que já tem.

    setNewTweet('')

    // Sempre que você quiser que alguma parte da interface mude, seja um valor de input, algo que altere na tela ou não, essa variável precisa ser um estado, o useState() é a única forma do React saber e monitorar mudanças da variável.
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      {/* Conteúdo da rota */}
      {/* <RouterProvider router={router} /> */}

      {/* Disparar função a partir que o submit foi clicado, função disparada através de um evento */}
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="http://github.com/baakovi.png"
            alt="Minha foto de perfil no GitHub"
          />
          <textarea
            id="tweet" 
            placeholder="What's happening?" 
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {/* Usar variáveis do JavaScript para modificar o comportamento/visual do React */}
      {/* Criar um array de tweets */}

      {/* <Tweet content='Tweet 1' />
          <Tweet content='Tweet 2' /> */}

      {/* {tweets.forEach(tweet => {
            <Tweet content={tweet} />
          })} */}

      {tweets.map((tweet) => {
        // Key: sempre que é realizado uma iteração, por exemplo com map, dentro do React, obrigatoriamente, dentro do primeiro componente que aparece dentro, tanto faz qual seja o primeiro, é necessário ter a propriedade 'key' no primeiro elemento. Sendo necessário passar uma informação única que existe dentro de cada item da lista.

        // O React tem o esquema de ter como performance uma das coisas mais importante, o key é entendido pelo React como qual key pertence a tal componente; identificando pelo ID. O React vai saber, no Tweet, qual tweet é qual, pela key única.
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
