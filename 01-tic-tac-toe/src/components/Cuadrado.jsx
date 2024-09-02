import "../main.css"

export const Cuadrado = ({ficha, actualizarTablero, index}) => {

    const handleCLick = () =>{
        actualizarTablero(index)
    }

    return(
        <div onClick={handleCLick} className="square" >
            {ficha}
        </div>
    )

}