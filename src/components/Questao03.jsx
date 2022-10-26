import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


const Questao03 = () => {

  const [pokemon, setPokemon] = useState([])
  const [pagina, setPagina] = useState(0)

  useEffect(() => {
    try {
      async function getAllPokemons() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${pagina}`)
        setPokemon(response.data.results)
      }
      getAllPokemons()
    } catch{
    } 
  }, [pagina])

  return (
    <div>
        <h1>Questão 3</h1>
        <ul>
            {pokemon.map(item => (
                <li>
                    <a>name:{item.name}</a>                    
                </li>
            ))}
      </ul>

      <button onClick={() => setPagina(pagina + 10)}>Próxima</button>
    </div>
  )
}

 
export default Questao03;