import React from "react";
import "./App.css";
import Routes from "./routes";
import ProductController from './provider'

function App() {
  return (
    <ProductController.Provider>
      <div className="App">
        <Routes />
      </div>
    </ProductController.Provider>
  )
}

export default App
