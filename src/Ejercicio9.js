import { useState } from "react";
import './Diseño.css'

export const Ejercicio9 = () => {

    const [columna, setColumns] = useState("")
    const [filas, setRows] = useState("")
    
    const onInputRows = (event) => { setRows(event.target.value.replace(/\D/g, ""))}

    const onInputColumns = (event) => {setColumns(event.target.value.replace(/\D/g, ""))}
    
    const generateTable = (filas, columna) => {

        let body = document.body
        let tabla = document.createElement('Table')

        for (let i = 0; i < filas; i++) {

            let td = tabla.insertRow()

            for (let j = 0; j < columna; j++) {

                let tp = td.insertCell()

                tp.appendChild(document.createTextNode(`${i},${j}`));

                tp.style.border = '1px solid black'
                tabla.style.width = '400px';
            }
        }
        body.appendChild(tabla)
    }

    return (
        <div>
            <h1> Ejercicio 9 </h1>
            <h3> Ingrese el numero de filas y columnas respectivamente </h3>

            <input type="text" value={filas} onChange={(event) => onInputRows(event)}></input>

            <input type="text" value={columna} onChange={(event) => onInputColumns(event)}></input>

            <button onClick={() => generateTable(filas, columna)}>Generar tabla</button>

        </div>
    )
}
export default Ejercicio9