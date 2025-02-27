import { useState } from 'react'
import './App.css'
import Conversao from '../components/Conversao'
import Conversao2 from '../components/Conversao2'

function App() {
  const [usuario, setUsuario] = useState("Bilu")
  const [senha, setSenha] = useState()
  
  let nome = "Ulib"
  function lerNome(){
    nome = prompt("Digite o nome (vou ignorar):")
    console.log(nome);
    
  }
  function lerUsuario(){
    let resposta = prompt("Digite o novo usúario:")
    setUsuario(resposta)

    let pw = prompt("Digita a nova senha: ")
    let pw2 = prompt("Confirme a senha: ")
    if(pw == pw2){
      setSenha(pw)
    } else {
      alert("As senhas são diferentes")
    }
  }

  return (
    <>
      <Conversao />
      <Conversao2 />

      <h1>ESTADOS</h1>
      Nome: {nome}
      <div>
        Usúario: {usuario} <br/>
        Senha: {senha}
      </div>
      <button onClick={lerNome}>Trocar nome</button>
      <button onClick={lerUsuario}>Trocar usúario</button>
    </>
  )
}

export default App