import { useState } from "react";

export const Ejercicio12 = () => {

    const [Nombre, setNombre] = useState('')
    const [Nombres, setNombres] = useState([])
    const [Nota, setNota] = useState('')
    const [Notas, setNotas] = useState([])
    const [Promedios, setPromedios] = useState([])

    const onSetNombre = (evt) => {
        setNombre(evt.target.value)
    }

    const onSetNota = (evt) => {
        setNota(evt.target.value)
    }

    const onAddEstudiante = () => {
        setNombres(list => [...list, Nombre])
        setNombre('')
        Promedio()
    }

    const onAddNota = () => {
        setNotas(list => [...list, Nota])

    }

    const onAddPromedios = (promedioz) => {
        setPromedios(list => [...list, promedioz])
    }

    const Promedio = () => {
        var total = Notas.length
        var almacenar = 0
        var suma = 0
        var result = 0
        var avg = 0
        var i = 0
        

        for (i = 0; i < total; i++) {
            almacenar = Notas[i];
            suma += parseInt(almacenar)
            console.log(suma)
        }

        avg = suma / 3

        if (avg < 3) {
            result = "El estudiante no pasa la materia"
        }
        else {
            result = "El estudiante sí pasa la materia"
        }
        onAddPromedios(result)                                                              
        setNotas(list => [])
    }

    return (
        <div>
            <h1> Ejercicio 12 </h1>
            <h4> Estudiantes y sus respectivas notas.</h4>
            <input type="text" placeholder="Ingrese su nombre" onChange={(event) => onSetNombre(event)}></input>
            <input type="text" placeholder="Ingrese las notas" onChange={(event) => onSetNota(event)}></input>
            <button onClick={() => onAddNota()}>Agregar Notas</button>
            <button onClick={() => onAddEstudiante()}>Agregar Estudiante</button>
            

            <ol>
                <d>Estudiantes:</d>
                {
                    Nombres.map(
                        (nombre, key) => {
                            return <li key={key}> {nombre}</li>
                        }
                    )
                }
            </ol>
            <ol>
                <d>Notas:</d>
                {
                    Notas.map(
                        (nota, key) => {
                            return <li key={key}> {nota}</li>
                        }
                    )
                }
            </ol>
            <ol>
                <d>Estado:</d>
                {
                    Promedios.map(
                        (promedio, key) => {
                            return <li key={key}> {promedio}</li>
                        }
                    )
                }
            </ol>

        </div>

    )
}
export default Ejercicio12