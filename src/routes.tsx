import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from "./layouts/Default";

// Localhost:5173/ <- o que vai aparecer depois na tela
// Recebe um array com vários objetos dentro dela que representa uma página dentor da aplicação
export const router = createBrowserRouter([
  // Cada chave "{}" é uma página
  // {
  //    path: '/',
  //    // Qual componente/elemento vai aparecer em tela
  //    element: <Timeline />
  // },

  // Reaproveitar o layout em várias páginas

  // Parte do conteúdo de uma página variável de acordo com a página que está acessando

  // {
  //    path: '/status',
  //    // Qual componente/elemento vai aparecer em tela
  //    element: <Status />
  // }

  {
    path: "/",
    element: <Default />,
    // Children são as rotas que vão estar contidas dentro do layout (Default: Sidebar)
    children: [
      {
        path: "/",
        // Qual componente/elemento vai aparecer em tela
        element: <Timeline />,
      },
      {
        path: "/status",
        // Qual componente/elemento vai aparecer em tela
        element: <Status />,
      },
    ],
  },
]);
