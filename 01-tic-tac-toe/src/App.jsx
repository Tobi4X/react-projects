import { useState } from "react"

import {Cuadrado} from "./components/Cuadrado.jsx"
import { Ganador } from "./components/Ganador.jsx"

import {JUGADORES} from "./constants.js"
import { checkGanador } from "./logic/tablero.js"
import confetti from "canvas-confetti"
import { guardarJuego, borrarJuego } from "./logic/storage/storage.js"

import "./App.css"


export default function App (){

    const [tablero, setTablero] = useState( () => {
        const tableroLocal = window.localStorage.getItem("tablero")
        return tableroLocal ? JSON.parse(tableroLocal) : Array(9).fill(JUGADORES.BLANK)
    })

    const [turno, setTurno] = useState(() => {
        const turnoLocal = window.localStorage.getItem("turno")
        return turnoLocal? JSON.parse(turnoLocal) : JUGADORES.X
    });

    const [ganador, setGanador] = useState(() => {
        return checkGanador(tablero)
    })

    const resetearJuego = () => {
        setTablero(Array(9).fill(JUGADORES.BLANK))
        setTurno(JUGADORES.X)
        setGanador(null)
        borrarJuego()
    }
    
    const actualizarTablero = (index) => {
        if(ganador != null || tablero[index] != JUGADORES.BLANK) return
    
        const newTablero = [...tablero];
        newTablero[index] = turno;
        setTablero(newTablero);
        
        const newTurno = turno === JUGADORES.X ? JUGADORES.O : JUGADORES.X;
        setTurno(newTurno);
        
        guardarJuego(newTablero, newTurno)

        const newGanador = checkGanador(newTablero);
        if(newGanador != null){
            if (newGanador != false) {
                confetti()
            }
            setGanador(newGanador)
        }
    }

    return(
        <>
        <body>    
            <h1>Tic Tac Toe</h1>
            {
                ganador == false && (
                    <Ganador
                        ganador={<p>EMPATE</p>}
                        resetearJuego={resetearJuego}
                    >
                    </Ganador>
                )
            }

            <section>{
                tablero.map((_, index) => {
                    return (
                        <Cuadrado
                        ficha={tablero[index]} 
                        actualizarTablero={actualizarTablero} 
                        index={index}
                        >
                        </Cuadrado>
                    )
                })
            }
            </section>

            {
                ganador!= null && ganador != false && (
                    <Ganador
                        ganador={<p>El ganador es : {ganador}</p>}
                        resetearJuego={resetearJuego}
                    >
                    </Ganador>
                )
            }
            
            {
                ganador == null &&
                (
                    <p>Es el turno de : {turno}</p>
                )
            }
        </body>
        </>
    )
}