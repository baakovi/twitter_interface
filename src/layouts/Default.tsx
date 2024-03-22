import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

import './Default.css'

export function Default() {
  return (
    <div className="layout">
      {/* Agora dessa forma, o arquivo main fica mais simples, separando os componentes de aplicação */}
      <Sidebar />

      <div className="content">
        {/* <RouterProvider router={router} /> */}
        <Outlet />
      </div>
    </div>
  );
}
