import { useState } from "react";

export const Ejercicio6 = () => {

    const [lista, setLista] = useState([]);
    const [numero, setNumero] = useState('');

    const onSetLista = (inpar) => {
        setLista(list => [...list, inpar])
    }

    const onSetNumero = (evt) => {
        setNumero(evt.target.value)
        setLista(list => [])

    }

    const numerosImpares = () => {
  
        var num = numero

        for (var i = 1; i <= num; i++) {

            if (i % 2 !== 0) {
                console.log(i);
                onSetLista(i)
            }
        }
    }

    return (
        <div>
            <h1> Ejercicio 6 </h1>
            <h3> Calcular números impares</h3>
            <input type="text" placeholder="Ingrese el numero" onChange={(event) => onSetNumero(event)}></input>
            <button onClick={() => numerosImpares()} >Calcular </button>
            <ol>
            {
                    lista.map(
                        (numero, key) =>
                        {
                            return <li key = {key}> {numero}</li>
                        }
                    )
                }
            </ol>
        </div>

    );
}
export default Ejercicio6;
