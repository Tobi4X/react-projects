import { useState } from "react"
import "./App.css"

const JUGADORES = {
    X: "x",
    O: "o",
    BLANK: "-"
}

const GANADOR = [
    {
        a:0,
        b:1,
        c:2
    },
    {
        a:3,
        b:4,
        c:5
    },
    {
        a:6,
        b:7,
        c:8
    },
    {
        a:0,
        b:4,
        c:8
    },
    {
        a:2,
        b:4,
        c:6
    },
    {
        a:0,
        b:3,
        c:6
    },
    {
        a:1,
        b:4,
        c:7
    },
    {
        a:2,
        b:5,
        c:8
    }
]

const Cuadrado = ({ficha, actualizarTablero, index}) => {

    const handleCLick = () =>{
        actualizarTablero(index)
    }

    return(
        <div onClick={handleCLick} >
            <p>{ficha}</p>
        </div>
    )

}


export default function App (){

    const [tablero, setTablero] = useState(Array(9).fill(JUGADORES.BLANK))

    const [turno, setTurno] = useState(JUGADORES.X);

    const [winner, setGanador] = useState(null);

    const checkGanador = (tableroVar) => {
        var i = 0
        while(i <= 7){
            if(tableroVar[GANADOR[i].a] != JUGADORES.blank)
                if(tableroVar[GANADOR[i].a] === tableroVar[GANADOR[i].b])
                    if(tableroVar[GANADOR[i].b] === tableroVar[GANADOR[i].c]){
                        alert(tableroVar[GANADOR[i].a])
                        return(tableroVar[GANADOR[i].a])
                    }
            i++;
        }
        return (null)
    }

    const actualizarTablero = (index) => {
        if(winner == null){
            if(tablero[index] === JUGADORES.BLANK){
                const newTablero = [...tablero];
                newTablero[index] = turno;
                setTablero(newTablero);
                
                const newTurno = turno === JUGADORES.X ? JUGADORES.O : JUGADORES.X;
                setTurno(newTurno);

                const newWinner = checkGanador(newTablero);
                if(newWinner != winner){
                    alert(newWinner)
                }
                setGanador(newWinner)
            }
        }
    }

    return(
        <>
        <body>    
            <h1>Tic Tac Toe</h1>
            
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
            
            <p>Es el turno de : {turno}</p>
        </body>
        </>
    )
}