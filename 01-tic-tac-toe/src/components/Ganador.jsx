export const Ganador = ({ganador, resetearJuego}) => {
    return(
        <section>
            {ganador}
            <button onClick={resetearJuego}>Volver a jugar</button>
        </section>
    )
}