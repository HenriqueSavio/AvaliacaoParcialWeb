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
                <div class="row input-group mb-3">
                    <input class="form-control shadow p-2 mb-3" type="number" placeholder='Número 1' onChange={((e) => setNumero1(e.target.valueAsNumber))}></input>

                    <input class="form-control shadow p-2 mb-3" type="number" placeholder='Número 2' onChange={((e) => setNumero2(e.target.valueAsNumber))}></input>
                </div>

                <div>
                    <button class="btn btn-outline-primary" onClick={soma}>+</button>

                    <button class="btn btn-outline-primary" onClick={subtracao}>-</button>

                    <button class="btn btn-outline-primary" onClick={multiplicacao}>*</button>

                    <button class="btn btn-outline-primary" onClick={divisao}>/</button>

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