import { useState } from "react";

function Teste () {
    return (
        <div>
            <h2>Contador:</h2>
            <Contador />
        </div>
    )
}

function Contador() {

    const [contador, setContador] = useState(0);

    function adicionarContador () {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Teste;