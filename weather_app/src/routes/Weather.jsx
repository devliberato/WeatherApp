import { useState} from 'react'
import axios from "axios"
import cloudy from "../img/cloud.png"
import sun from "../img/sun.png"
import overcast from "../img/overcast.png"
import cloudburst from "../img/cloudburst.png"
import sporadicshowers from "../img/sporadicshowers.png"
import weakrain from "../img/weakrain.png"
import clearsky from "../img/clearsky.png"
import icefog from "../img/icefog.png"
import foggy from "../img/foggy.png"
import mist from "../img/mist.png"

import "./Weather.css";


function App() {

  //funcionalidades 


  const [local, setLocal] = useState("");
  const [previsao, setPrevisao] = useState("" || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imagemDoClima, setImagemClima] = useState(null);
  const [carregando, setCarregando] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCarregando(true);
    try {

      if(!local) {
        setPrevisao("Insira um local");
        setLoading(false)
        setCarregando(false)
        return
      }
      
      const res = await axios.get(`https://wttr.in/${local}?format=%C+%t+%w
        
`);

console.log(res);

const weatherMap = {
  "parcialmente nublado": cloudy,
  "sol": sun,
  "encoberto": overcast,
  "aguaceiros fracos": cloudburst,
  "possibilidade de chuva irregular": sporadicshowers,
  "chuva fraca": weakrain,
  "céu limpo": clearsky,
  "nevoeiro gelado": icefog,
  "nevoeiro": foggy,
  "neblina": mist,
};

let currentWeather = null;

for (let i in weatherMap) {
  if(res.data.toLowerCase().includes(i)) {
    currentWeather = weatherMap[i];
    break;
  }
}

setImagemClima(currentWeather || null);


setPrevisao(res.data);

setLoading(false);
setCarregando(false);



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
           <button type='submit' disabled={carregando}>{carregando ? `Carregando...` : `Ver previsão`}</button>
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
