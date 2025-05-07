import { useState } from 'react'
import './Sorteio.css'
import { useEffect } from 'react'

function Sorteio() {
    const[inputNome, setInputNome] = useState('')
    const[nomes, setNomes] = useState ([])

    useEffect(() => console.log(nomes),[nomes])

function cadastrarNome(){
    setNomes([inputNome, ...nomes])
    // console.log(nomes);
    
}

function sortearCliente(){
  let i = Math.floor(Math.random() * nomes.length)

  alert('Cliente sorteado: ' + nomes[i])
}

  return (
    <div className='container-sorteio'>
        <h2>SORTEIO !!</h2>
        <p>Increva-se aqui para o sorteio de uma linda camiseta</p>

        <label htmlFor="Nome"></label>
        <input type="text" value={inputNome} onChange={(event) => setInputNome(event.target.value)}/>
        <button onClick={cadastrarNome}>Cadastrar</button>

    </div>
  )
}

export default Sorteio