import './Corpo.css'
function Corpo(){
    function alertarUsuario(){
        alert("Cuidado!")
    }
    return (
        <div className="container-corpo">
            <h1>Desbravando o React</h1>
            <p>Vamos começar a nossa aventura!</p>
            <button onClick={alertarUsuario}>Alerta</button>
            <img className='imagem' src="./panda.jpg" alt="" />
        </div>
        
    )
}

export default Corpo;