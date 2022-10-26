
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const Questao04 = () => {

  
  const [pais, setPais] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v2/region/africa?fields=name,population")
    .then (
      (response) => {setPais(response.data)}
      
     ).catch()})

  const getMaisPopuloso = () => {

    let NomePais = ""
    let MaisPopuloso = 0
    pais.forEach((pais) => {
      if (pais.population > MaisPopuloso) {
        MaisPopuloso = pais.population
        NomePais = pais.name
      }
    })
    return(
      <div>
        <ul>
          <li>
            <h4>Pais mais populoso da Africa é: {NomePais}</h4>
            Contendo um número de: {MaisPopuloso} habitantes.
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div>
      <h1>Questão 4</h1>
      {getMaisPopuloso()}
    </div>
  )

}
export default Questao04;