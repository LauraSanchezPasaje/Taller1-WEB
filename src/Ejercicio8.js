import { useState } from "react";

export const Ejercicio8 = () => {
    const [Dividendo, setDividendo] = useState("")
    const [Numeros, setNumeros] = useState([])
    const [NumerosDiv, setNumerosDiv] = useState([])
    const [Error, setError] = useState('')
    
    const onInputDividendo = (evt) => {
        setDividendo(evt.target.value)
    }

    const onSetNumeros = (numeros) => {
        
        setNumeros(list => [...list, numeros])
    }

    const onSetNumerosDiv = (numerosD) => {

        setNumerosDiv(list => [...list, numerosD])
    }

    const generarAleatorio = () => {
        setNumeros([])
        var random
        for (let i = 0; i < 10; i++) {
            random = Math.floor(Math.random() * 10)
            onSetNumeros(random)
        }
       
    }

    const onSetError = () => {
        setError("Error. El dividendo debe ser mayor a 0.")
    }

    const dividirNumeros = () => {
        setNumerosDiv([])
        var div = Dividendo
        var resultado = 0
        var almacenar = 0

        if (div <=0) {
            onSetError()
        }
        else {
            for (let i = 0; i < 10; i++) {
                onSetError("")
                almacenar = Numeros[i]
                resultado = (almacenar/div).toFixed(3)
                onSetNumerosDiv(resultado)
            }
        }


    }
    
    return (
        <div>
            <h1> Ejercicio 8 </h1>
            <h3>Números aleatorios y su división</h3>
            <input type="text" placeholder="Ingrese el divisor" onChange={(event) => onInputDividendo(event)}></input>
            <button onClick={() => generarAleatorio()}>Generar números</button>
            <button onClick={() => dividirNumeros()}>Dividir numeros</button>
            
            <ol>
                <d>Numeros Generados:</d>
                {
                    Numeros.map(
                        (numeros, key) => {
                            return <li key={key}> {numeros}</li>
                        }
                    )
                }
            </ol>

            <ol>
                <d>Numeros Divididos:</d>
                {
                    NumerosDiv.map(
                        (resultado, key) => {
                            return <li key={key}> {resultado}</li>
                        }
                    )
                }
            </ol>
            <span>{Error}</span>
        </div>


    )
}
export default Ejercicio8
