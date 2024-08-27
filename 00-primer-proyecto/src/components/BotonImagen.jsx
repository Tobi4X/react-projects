import { useState } from "react"


export function BotonImagen ({}) {
    
    const [showImagen, setShowImagen] = useState(false)

    const texto = showImagen ? "Ocultar Imagen" : "Mostrar Imagen"
    const imagenImg = showImagen ? <img src={'https://unavatar.io/github/tobi4x'} alt="imagen" /> : <div></div>

    const handleClick = () => {
        setShowImagen(!showImagen)
    }

    return(
        <div>
            {imagenImg}
            <button onClick={handleClick}>{texto}</button>
        </div>
    )
}