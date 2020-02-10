import React, { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import { ApiProvider } from "./ApiContext";

async function fetchData() {
  try {
    const res = await fetch("http://www.mocky.io/v2/5c923b0932000029056bce39");
    const resJSON = await res.json();
    return resJSON;
  } catch (e) {
    console.log("error calling api --", e);
  }
}

const App = () => {
  const [hasErrors, setErrors] = useState(false);
  const [emprestimo, setEmprestimo] = useState({});

  useEffect(() => {
    fetchData().then(a => setEmprestimo(a));
  }, [true]);

  return (
    <ApiProvider value={emprestimo}>
      <Dashboard />
    </ApiProvider>
  );
};

export default App;