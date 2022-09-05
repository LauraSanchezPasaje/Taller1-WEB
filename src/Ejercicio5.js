import { useState } from "react";

export const Ejercicio5 = () => {

    const [listado, setNumeros] = useState([]);
    const [numeros, setNumero] = useState("");

    const onAddNumero = (event) => {
        setNumeros(list => [...list, numeros])
        setNumero('')
        ordenarLista()
    }

    const onSetNumero = (evt) => {
        setNumero(evt.target.value)
        
    }
    const ordenarLista = () => {
        listado.sort()         
    }

    return (
        <div>
            <h1> Ejercicio 5 </h1>
            <h3> Listado de números de menor a mayor</h3>
            <input type="text" placeholder="Ingrese su numeros" onChange={(event) => onSetNumero(event)}></input>
            <button onClick={() => onAddNumero()}>Agregar numeros</button>
            <ol>
                {
                    listado.map(
                        (numeros, key) =>
                        {
                            return <li key = {key}> {numeros}</li>
                        }
                    )
                }
            </ol>
        </div>

    );
}
export default Ejercicio5;