import { useState} from 'react'
import axios from "axios"
import cloudy from "./img/cloud.png"
import sun from "./img/sun.png"
import overcast from "./img/overcast.png"
import cloudburst from "./img/cloudburst.png"
import sporadicshowers from "./img/sporadicshowers.png"
import weakrain from "./img/weakrain.png"


import './App.css'

function App() {

  //funcionalidades 



  const [local, setLocal] = useState("");
  const [previsao, setPrevisao] = useState("" || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imagemDoClima, setImagemClima] = useState(null);


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


if(res.data.toLowerCase().includes("parcialmente nublado")) {
  setImagemClima(cloudy)
} 

else if(res.data.toLowerCase().includes("sol")) {
  setImagemClima(sun)
} else if (res.data.toLowerCase().includes("encoberto")) {
  setImagemClima(overcast);
}
else if (res.data.toLowerCase().includes("aguaceiros fracos")){
  setImagemClima(cloudburst)
} 
else if (res.data.toLowerCase().includes("possibilidade de chuva irregular")){
  setImagemClima(sporadicshowers)
} 
else if(res.data.toLowerCase().includes("chuva fraca")) {
  setImagemClima(weakrain);
}
else {
  setImagemClima(null);
}

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
            setImagemClima(null);
           }}} />
           <button type='submit'>Ver previsão</button>
        </form>
       <div className="weather-container">
        {error && <p>Este local não existe, tente novamente</p>}
        {loading === true ? <p>Carregando...</p> : previsao && <p> {previsao}</p>}
        </div>
        </div>
        {imagemDoClima && <img src={imagemDoClima}/>}
        </div>
    </div>
  )
}

export default App

//[x] importar imagem 
//[x] logica da imagem
//[] por mais
//[] react router dom inserir abas
//[] footer
//[] identidade logo do site


// [x] estruturar a pesquisa
// [] estilizar
// [x] pegar o value da barra de pesquisa
//[x] colocar status se nao retornar
//[x] configurar erro
//[x] ver qual api será usada
// [x] depois implementar o clique do botao e chamar a api
// [x] organizar os dados vindo da api 
// x[] implementar funções de carregando, erro, nao encontrou, por imagem quando nao for encontrado 

