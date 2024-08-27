import { BotonImagen } from "./components/BotonImagen.jsx"

const imagen = "../assets/react.svg"

export default function App () {
    return (
        <>
            <div>
                <BotonImagen texto="Hola" />
                <BotonImagen texto="Chau" imagen={imagen}/>
            </div>
            
        </>
    )
}