import { useState } from "react";
import "./Diseño.css";

export const Ejercicio1 = () => {

    const [Horas, setHor] = useState("");
    const [Minutos, setMin] = useState("");
    const [Segundos, setSeg] = useState("");

    const onInputChange = (event) => {
        setSeg(event.target.value)
    }

    const Hora = () => {

        var hours = Math.floor(Segundos / (60*60))

        var divisorminutes = Segundos % (60*60)
        var minutes = Math.floor(divisorminutes / 60)

        var divisorsegundos = divisorminutes % 60;
        var seconds = Math.ceil(divisorsegundos);
        
        setHor(hours)
        setMin(minutes)
        setSeg(seconds)
    }
        return (
            <div>
                <h1> Ejercicio 1 </h1>
                <h3>Conversión de segundos a Horas</h3>
                <input type="text" placeholder="Ingrese los segundos" onChange={(event) => onInputChange(event)}></input>
                <button onClick={() => Hora()}>Calcular tiempo</button>

                <ol> Horas: {Horas}</ol>
                <ol> Minutos: {Minutos}</ol>
                <ol> Segundos: {Segundos}</ol>
            </div>

        );
    }
export default Ejercicio1;