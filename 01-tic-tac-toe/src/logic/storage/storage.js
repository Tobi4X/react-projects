export const guardarJuego = (tablero, turno) => {
    window.localStorage.setItem("tablero", JSON.stringify(tablero))
    window.localStorage.setItem("turno", JSON.stringify(turno))
}

export const borrarJuego = () => {
    window.localStorage.removeItem("tablero")
    window.localStorage.removeItem("turno")
}