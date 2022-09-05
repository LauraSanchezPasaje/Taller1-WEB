import { useState } from "react";

export const Ejercicio11 = () => {
    const [Nombre, setNombre] = useState('')
    const [Nota, setNota] = useState('')
    const [Notas, setNotas] = useState([])
    const [Resultado, setResultado] = useState('')


    const onSetNombre = (evt) => {
        setNombre(evt.target.value)
    }

    const onSetNotas = (evt) => {
        setNota(evt.target.value)
    }

    const onAddNotas = () => {
        if (Notas.length < 3) {
            setNotas(list => [...list, Nota])
        } else {
            onSetResultado()
        }
    }

    const onSetResultado = () => {
        var total = Notas.length
        var almacenar = 0
        var suma = 0
        var avg = 0

        for (let i = 0; i < total; i++) {

            almacenar = Notas[i];
            suma += parseInt(almacenar)
            
        }
        avg = suma / total
        if (avg >= 3) {
            setResultado(", !Pasa la materia!")
        }
        else {
            setResultado(", No pasa la materia.")
        }
        
        
    }

    return (
        <div>
            <h1> Ejercicio 11 </h1>
            <h3>Ingrese las notas tres veces y vuelva a presionar para calcular</h3>
            <input type="text" placeholder="Ingrese su nombre" onChange={(event) => onSetNombre(event)}></input>
            <input type="text" placeholder="Ingrese las notas" onChange={(event) => onSetNotas(event)}></input>
            <button onClick={() => onAddNotas()} >Calcular nota</button>

            <ol>
                <d>Notas asignadas:</d>
                {
                    Notas.map(
                        (nota, key) => {
                            return <li key={key}> {nota}</li>
                        }
                    )
                }
            </ol>
            <ol>
                <span>{Nombre}{Resultado}</span>
            </ol>
        </div>
        
    )
}
export default Ejercicio11