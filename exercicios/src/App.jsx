import { useState } from 'react'
import './App.css'

function App() {
  const [inputPressaoLidaBomba, setPressaoLidaBomba] = useState('')
  const [inputPressaoDesejada, setPressaoDesejada] = useState('')
  const[pressaoCorreta, setPressaoCorreta] = useState(false)

function calcularPressao(){
  
}

  return (
    <div className='container-exercicios'>
      <h1>Exercício Pneu</h1>
      <label htmlFor="pressaoAtual">Digite a Pressão Atual</label>
      <input type="text" value={inputPressaoLidaBomba} onChange={(event) => setPressaoLidaBomba(event.target.value)}/>
      <label htmlFor="pressaoDesejada">Digite a Pressão Desejada</label>
      <input type="text" value={inputPressaoDesejada} onChange={(event) => setPressaoDesejada(event.target.value)}/>
      {pressaoCorreta && <span className='msg-pressaoCorreta'>A Pressão </span>}

      <button onClick={calcularPressao}>Calcular Pressão</button>
      
    </div>
  )
}

export default App
