import { useState} from 'react'
import axios from "axios"


import './App.css'

function App() {

  //funcionalidades 

  const [local, setLocal] = useState("");
  const [previsao, setPrevisao] = useState("" || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {

      if(!local) {
        setPrevisao("Insira um local");
        setLoading(false)
        return
      }
      
      const res = await axios.get(`https://wttr.in/${local}?format=%C+%t+%w
        
`);
console.log(res);


setPrevisao(res.data);

setLoading(false);


    } catch (error) {
      setError(true);
      setLoading(false);
    
      
    }

  }

  return (
      
      <div>
    
       <div className="container">
       <h1>Procure pelo clima de um local:</h1>
       <div className="form-container">
        <form onSubmit={handleSubmit}>
           <input type="text" placeholder='Busque aqui o lugar...' value={local} onChange={(e) => {setLocal(e.target.value); if(e.target.value === "") {
            setPrevisao("");
            setLoading(false);
            setError(false);
           }}} />
           <button type='submit'>Ver previsão</button>
        </form>
       <div className="weather-container">
        {error && <p>Este local não existe, tente novamente</p>}
        {loading === true ? <p>Carregando...</p> : previsao && <p> {previsao}</p>}
        </div>
        </div>
        </div>
    </div>
  )
}

export default App



// [x] estruturar a pesquisa
// [] estilizar
// [x] pegar o value da barra de pesquisa
//[x] colocar status se nao retornar
//[x] configurar erro
//[x] ver qual api será usada
// [x] depois implementar o clique do botao e chamar a api
// [x] organizar os dados vindo da api 
// x[] implementar funções de carregando, erro, nao encontrou, por imagem quando nao for encontrado 

