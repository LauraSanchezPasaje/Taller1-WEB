import { useState } from "react";

export const Ejercicio4 = () => {

    const [NumeroUno, primero] = useState("");
    const [NumeroDos, segundo] = useState("");
    const [NumeroTres, tercero] = useState("");
    const [Igual, setIgual] = useState("");
    

    const onInputChangeUno = (event) => {
        primero(event.target.value)
    }
    const onInputChangeDos = (event) => {
        segundo(event.target.value)
    }
    const onInputChangeTres = (event) => {
        tercero(event.target.value)
    }

    const calcularIgual = () => {
        var primero = NumeroUno
        var segundo = NumeroDos
        var tercero = NumeroTres
        var resultado = 0
        
        if (primero === segundo || primero === tercero) {
            resultado = 2
            if (segundo === tercero) {
                resultado = 3
            }
        
        } else if (segundo === tercero) {
            resultado = 2
        }

        setIgual(resultado)

    }
        return (
            <div>
                <h1> Ejercicio 4 </h1>
                <h3>Cálculo de números repetidos</h3>
                <input type="text" placeholder="Ingrese el primer número" onChange={(event) => onInputChangeUno(event)}></input>
                <input type="text" placeholder="Ingrese el segundo número" onChange={(event) => onInputChangeDos(event)}></input>
                <input type="text" placeholder="Ingrese el tercer número" onChange={(event) => onInputChangeTres(event)}></input>
                <button onClick={() => calcularIgual()}>Calcular similar</button>
                <ol> La cantidad de números repetidos son: {Igual}</ol>

            </div>

        );
    }
export default Ejercicio4;