import { useState } from "react";

export const Ejercicio3 = () => {
    const [Nombre, setNombre] = useState("")
    const [Tiempo, setHora] = useState("");
    const [Saludo, setHola] = useState("");

    const Name = (event) => {
        setNombre(event.target.value)
    }
    const Hora = (event) => {
        setHora(event.target.value)
    }
    const calcularTiempo = () => {
        var tiempo = Tiempo
        var Hola
        var Name = Nombre

        if (tiempo >= 0 && tiempo <=12) {
            Hola = "Buenos dias " + Name 
        }
        if (tiempo > 12 && tiempo <= 18) {
            Hola = "Buenas tardes " + Name 
        }
        if (tiempo > 18 && tiempo <=24) {
            Hola = "Buenas noches " + Name 
        }
        setHola(Hola)
    }

    return (
        <div>
            <h1> Ejercicio 3 </h1>
            <h3>Este en un saludo según la hora del día:</h3>
            <input type="text" placeholder="Ingrese su nombre" onChange={(event) => Name(event)}></input>
            <input type="text" placeholder="Ingrese la hora" onChange={(event) => Hora(event)}></input>

            <button onClick={() => calcularTiempo()}>Saludar Usuario</button>
            <ol>
                <span>{Saludo}</span>
            </ol>

        </div>
    )
}
export default Ejercicio3