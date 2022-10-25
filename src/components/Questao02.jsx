import React from 'react'
import { useState } from 'react';
import { Button } from 'reactstrap';

const Questao02 = () => {

    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resposta, setResposta] = useState();

    const soma = () => {
        setResposta(numero1 + numero2);
    }
    const subtracao = () => {
        setResposta(numero1 - numero2);
    }
    const divisao = () => {
        setResposta(numero1 / numero2);
    }
    const multiplicacao = () => {
        setResposta(numero1 * numero2);
    }

    return (
        <div>
            <h1>Questão 02</h1>

            <ul>
                <div>
                    <input type="number" placeholder='Número 1' onChange={((e) => setNumero1(e.target.valueAsNumber))}></input>

                    <input type="number" placeholder='Número 2' onChange={((e) => setNumero2(e.target.valueAsNumber))}></input>
                </div>

                <div>
                    <button onClick={soma}>+</button>

                    <button onClick={subtracao}>-</button>

                    <button onClick={multiplicacao}>*</button>

                    <button onClick={divisao}>/</button>

                </div>

                <div>
                    <h4>
                        Resultado: {resposta}
                    </h4>
                </div>
            </ul>
        </div>

    )
}

export default Questao02;