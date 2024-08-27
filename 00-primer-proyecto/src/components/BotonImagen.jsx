
export function BotonImagen ({texto, imagen}) {
    return(
        <div>
            <img src={imagen} alt="imagen del boton" />
            <button>{texto}</button>
        </div>
    )
}