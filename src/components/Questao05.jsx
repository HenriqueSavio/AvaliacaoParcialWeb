
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const Questao05 = () => {


    const [pais, setPais] = useState([])
    const [continente, setContinente] = useState("")

    useEffect(() => {
        axios.get("https://restcountries.com/v2/region/" + continente + "?fields=name,population")
            .then(
                (response) => { setPais(response.data) }

            ).catch()
    })

    const getMaisPopuloso = () => {
        let NomePaisMaisPopuloso = ""
        let MaisPopuloso = 0
        pais.forEach((pais) => {
            if (pais.population > MaisPopuloso) {
                MaisPopuloso = pais.population
                NomePaisMaisPopuloso = pais.name
            }
        })

        let NomePaisMenosPopuloso = ""
        let MenosPopuloso = MaisPopuloso

        pais.forEach((pais) => {
            if (pais.population < MaisPopuloso) {
                MenosPopuloso = pais.population
                NomePaisMenosPopuloso = pais.name
            }
        })

        const editarContinente = e => {
            e.preventDefault()
        }
        
        return (
            <div>
                <ul>
                    <li>
                        <form onSubmit={editarContinente}>
                            <h4>Pais mais populoso da {continente} é: {NomePaisMaisPopuloso}</h4>
                                <select class="form-select" aria-label="Default select example" value={continente} onChange={texto => setContinente(texto.target.value)}>
                                    <option selected>Escolha um continente</option>
                                    <option value="africa">África</option>
                                    <option value="americas">Américas</option>
                                    <option value="asia">Ásia</option>
                                </select><br />

                            Contendo um número de: {MaisPopuloso} habitantes.
                        </form><br /><br />

                        <form onSubmit={editarContinente}>
                            <h4>Pais menos populoso da {continente} é: {NomePaisMenosPopuloso}</h4>
                                <select class="form-select" aria-label="Default select example" value={continente} onChange={texto => setContinente(texto.target.value)}>
                                    <option selected>Escolha um continente</option>
                                    <option value="africa">África</option>
                                    <option value="americas">Américas</option>
                                    <option value="asia">Ásia</option>
                                </select><br />

                            Contendo um número de: {MenosPopuloso} habitantes.
                        </form>
                    </li>
                </ul>
            </div>
            
        )
    }

    return (
        <div>
            <h1>Questão 5</h1>
            {getMaisPopuloso()}
        </div>
    )

}
export default Questao05;