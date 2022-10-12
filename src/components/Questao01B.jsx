import React from "react";


const Questao01B = () => {

    let disciplinas = ["FUP ", "Estruturas de Dados ", "Introdução à Computação", "Web"];


    disciplinas.map (disciplinas => (
        <h3>{disciplinas}</h3>
    ) )

    return ( 
        <div> 
            Disciplinas:{disciplinas.map (disciplinas => (
                <h3>{disciplinas}</h3>
            ))}
        </div>
    )
}

export default Questao01B;