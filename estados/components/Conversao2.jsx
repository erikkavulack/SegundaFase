import { useState } from 'react'
import './Conversao2.css'
function Conversao2() {
    const [km, setKm] = useState()
    const [milhas, setMilhas] = useState()
    const [leguas, setLeguas] = useState()
    function converterKmParaMilhasParaLeguas(){
    let entrada = Number(prompt("km: "))
    setMilhas((entrada / 1.609).toFixed(2))
    setKm(entrada)
    setLeguas((entrada / 4.828).toFixed(2))
    }
    return (
    <div className='container-conversao2'>
        <h2>km para milhas para léguas</h2>
        <button onClick={converterKmParaMilhasParaLeguas}>Converter</button>
        <p>
            Valor original: {km}km
        </p>
        <p>
            Valor convertido: {milhas}mi
        </p>
        <p>
            Valor convertido: {leguas}leg
        </p>

    </div>
  )
}

export default Conversao2