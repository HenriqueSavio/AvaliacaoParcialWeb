/*
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const Questao04 = () => {
  const [pais, setPais] = useState([])
  const [populacao, setPopulacao] = useState(0)

  useEffect(() => {
    try {
      async function getAllPaises() {
        const response = await axios.get("https://restcountries.com/v2/region/africa?fields=name,population")
        setPais(response.data.results)
      }
      getAllPaises()
    } catch{
    } 

  }, [populacao])

  return (
    <div>
        <h1>Questão 4</h1>
        <ul>
            {pais.map(item => (
                <li>
                    name:{item.name}
                    population:{item.population}
                </li>
            ))}
      </ul>
    </div>
  )
}

/*
exemplo

const tempo = async () => {
  const axios = require("axios");
  const TOKEN = "#myToken";  

  const response = await axios.get(`http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=Joinville&state=SC&token=${TOKEN}`);
  const id = response.data[0]["id"];
  const result = await axios.get(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${id}/days/15?token=${TOKEN}`);
  const local = result.data;
  const dados = {
      cidade: local.name,
      estado: local.state,
      data: local.data[0].date_br,
      probChuva: local.data[0].rain.probability,
      temperatura: {
          descricao: local.data[0].text_icon.text.phrase.reduced,
          max: local.data[0].temperature.max,
          min: local.data[0].temperature.min
      }
  }
  return dados;
}

tempo().then((res) => {
  console.log(res);
});
export default Questao04;

*/
 