import { GANADORES } from "../constants"
import { JUGADORES } from "../constants"

export const checkGanador = (tableroVar) => {
    for(const combo of GANADORES){
        const [a,b,c] = combo
        if(
            tableroVar[a] &&
            tableroVar[a] === tableroVar[b] &&
            tableroVar[a] === tableroVar[c] &&
            tableroVar[a] != JUGADORES.BLANK
        ) {
            return(tableroVar[a])  
        }
    }
    if(tableroVar.every((cuadrado) => cuadrado != JUGADORES.BLANK)){
        return false
    }
    return null
}