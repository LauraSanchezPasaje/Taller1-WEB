import { useState } from "react";

export const Ejercicio7 = () => {

    const [Salario, setSalario] = useState('')
    const [Salarios, setSalarios] = useState([])
    const [Error, setError] = useState('')
    const [NuevosSalarios, setNuevosSalarios] = useState([])

    const onSetSalario = (evt) => {
        setSalario(evt.target.value)
    }
    const onAddSalario = () => {
        setSalarios(list => [...list, Salario])
        setSalario('')
    }
    const onSetError = () => {
        setError("Error. Debes asignar exactamente 10 salarios.")
    }

    const onSetNuevosSalarios = (nuevoSalario) => {
        setNuevosSalarios(list => [...list, nuevoSalario])
    }


    const calcularSalario = () => {
        var length = Salarios.length
        var salarioCalcular = 0
        var aumento = 0

        if (length !== 10) {
            onSetError()
        }
        else {
            for (let i = 0; i < length; i++) {

                salarioCalcular = Salarios[i];
                aumento = salarioCalcular * 0.08
                salarioCalcular = parseInt(salarioCalcular) + parseInt(aumento)
                onSetNuevosSalarios(salarioCalcular)
            }
        }
    }

    return (
        <div>
            <h1> Ejercicio 7 </h1>
            <h3>Calcular aumento del 8%</h3>
            <input type="text" placeholder="Ingrese un salario" onChange={(event) => onSetSalario(event)} />
            <button onClick={() => onAddSalario()}> Agregar salario </button>
            <button onClick={() => calcularSalario()}> Calcular aumento </button>
            <ol>
                <d>Salarios agregados:</d>
                {
                    Salarios.map(
                        (Salario, key) => {
                            return <li key={key}> {Salario}</li>
                        }
                    )
                }
            </ol>

            <ol>
                <d>Salarios aumentados:</d>
                {
                    NuevosSalarios.map(
                        (salarioCalcular, key) => {
                            return <li key={key}> {salarioCalcular}</li>
                        }
                    )
                }
            </ol>
            <span>{Error}</span>
        </div>
    )
}
export default Ejercicio7