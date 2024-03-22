import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css'
import { PaperPlaneRight } from "phosphor-react";

// const answers = [
//    'Concordo...',
//    'Olha, faz sentido!',
//    'Parabéns pelo progreso.'
// ]

// auto grow textarea react

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  // Estado -> variáveis que o React monitora, reagir a está alteração
  const [answers, setAnswers] = useState([
      'Concordo...',
      'Olha, faz sentido!',
      'Parabéns pelo progreso.'
   ])

  function createNewAnswer(event: FormEvent) {
    // console.log("Teste")
    event.preventDefault()

    // Super importante de entender no React, os fundamentos de useState()
    setAnswers([newAnswer, ...answers])

    // Imutabilidade -> performance no React, de maneira prática, nunca altera informações no React, criar um novo array para inserir novas informações, copiando as informações já existentes

    // No React, sempre que foi criar um estado, é importante lembra que as informações não são alteradas, elas são criadas novas a partir das que já tem.

    setNewAnswer('')

    // Sempre que você quiser que alguma parte da interface mude, seja um valor de input, algo que altere na tela ou não, essa variável precisa ser um estado, o useState() é a única forma do React saber e monitorar mudanças da variável.
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }
  
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam eveniet dignissimos dolorem dolores odio debitis asperiores rerum. Ad ab saepe vero maxime qui impedit, rerum harum rem dolorum sed! Dolorum." />

      <Separator />

      {/* Conteúdo da rota */}
      {/* <RouterProvider router={router} /> */}

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="http://github.com/baakovi.png"
            alt="Minha foto de perfil no GitHub"
          />
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer" 
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {/* <Separator /> */}

      {answers.map(answer => {
         return <Tweet key={answer} content={answer} />
      })}

      {/* Usar variáveis do JavaScript para modificar o comportamento/visual do React */}
      {/* Criar um array de tweets */}

      {/* <Tweet content='Tweet 1' />
          <Tweet content='Tweet 2' /> */}

      {/* {tweets.forEach(tweet => {
            <Tweet content={tweet} />
          })} */}

      {/* {tweets.map((tweet) => {
        // Key: sempre que é realizado uma iteração, por exemplo com map, dentro do React, obrigatoriamente, dentro do primeiro componente que aparece dentro, tanto faz qual seja o primeiro, é necessário ter a propriedade 'key' no primeiro elemento. Sendo necessário passar uma informação única que existe dentro de cada item da lista.

        // O React tem o esquema de ter como performance uma das coisas mais importante, o key é entendido pelo React como qual key pertence a tal componente; identificando pelo ID. O React vai saber, no Tweet, qual tweet é qual, pela key única.
        return <Tweet key={tweet} content={tweet} />;
      })} */}
    </main>
  );
}
