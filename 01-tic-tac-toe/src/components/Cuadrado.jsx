export const Cuadrado = ({ficha, actualizarTablero, index}) => {

    const handleCLick = () =>{
        actualizarTablero(index)
    }

    return(
        <div onClick={handleCLick} >
            <p>{ficha}</p>
        </div>
    )

}