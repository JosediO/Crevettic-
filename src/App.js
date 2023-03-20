import * as React from "react";
import Header from "./Components/Layout/Header/Header";
// import Formulario from "./Components/Formulario/Formulario";
import "./App.css";
import NovoFornecedor from "./Components/Formulario/NovoFornecedor";

function App() {
  return (
    <div>
      <Header />
      {/* <Formulario /> */}
      <NovoFornecedor />
    </div>
  );
}

export default App;
