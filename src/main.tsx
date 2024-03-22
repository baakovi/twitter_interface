import React from 'react'
// Importando o React e ReactDOM <- o DOM é para funcionar na web
import ReactDOM from 'react-dom/client';

import './global.css';

// import twitterLogo from './assets/logo-twitter.svg'

// import { Sparkle } from 'phosphor-react';
// import { Tweet } from './components/Tweet';

// import { Sidebar } from './components/Sidebar';

// import { Header } from './components/Header';

// import { Separator } from './components/Separator';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

// CreateRoot é um método que a gente usa apenas uma vez, buscando um elemento ID 'root', que está dentro do index.hmtl
// Render -> renderizar (mostrar em tela, mosntrando em tela, dentro do elemento com ID root, o documento dentro do React.StrictMode, colocando o que quiser dentro)

// const tweetStyles = {
//   borderRadius: 8
// }

// Vício da otimização: sabendo que você pode separar o código em vários componentes, não significa que é necessário fazer em todas as situações. Só faça isso desde que melhore a legibilidade e entendimento do código. Se você achar que separar tal código em um componente não faça sentido, não faça.

// Programação imperativa, ditar para o código exatamente o que precisa ser feito.
// Programamação declarativa, sintaxe muito menor. Sendo mais fácil de manipular.

// Métodos de iteração dentro do JavaScript:
// Diferenças de forEach e map ==> ambos percorrem um array
// forEach não tem retorno, você não consegue retornar (return) nada desta operação, assinar o valor
// O map, diferente do forEach, retorna, assina e salva o valor. Então, se deseja mostrar algo em tela, o map é a melhor opção
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <div className='layout'> */}
      {/* Agora dessa forma, o arquivo main fica mais simples, separando os componentes de aplicação */}
      {/* <Sidebar /> */}

      {/* <div className='content'> */}
        
        <RouterProvider router={router} />

      {/* </div>   */}
    {/* </div> */}
  </React.StrictMode>,
)

// Toda interface da aplicação, quando estiver usando: Angular, React, Vue, Svelte, Solid, Aurelia, Lit, etc... todas essas bibliotecas, elas são contruídas a partir do JavaScript.