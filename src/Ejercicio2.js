import { useState } from "react";

export const Ejercicio2 = () => {

    const [Duracion, setDuracion] = useState("")
    const [Precio, setPrecio] = useState("");

    const onInputChange = (event) => {
        setDuracion(event.target.value)
    }
    const calcularPrecio = () => {

        var duracion = Duracion
        var total = 0
        var extra = 0

        if (duracion <= 3) {
            total = 100
        }
        if (duracion > 3) {
            extra = (duracion - 3) * 50
            total = 100 + extra
        }
        setPrecio(total)
    }

    return (
        <div>
            <h1> Ejercicio 2 </h1>
            <h3>Calcule el precio de su llamada telefónica</h3>
            <input type="text" placeholder="Duracion en minutos" onChange={(event) => onInputChange(event)}></input>
            <button onClick={() => calcularPrecio()}>Calcular precio</button>
            <ol>
                <span> El total es: ${Precio}</span>
            </ol>

        </div>
    )
}
export default Ejercicio2