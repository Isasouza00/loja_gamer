import { useState } from "react"


export default function ContainerPai() {
    const [qtd, setQtd] = useState(0);

    function continha() {
        setQtd(qtd + 1);
    }

    function reset() {
        setQtd(0);
    }

    return (
        <div className="container">
            <h1> Contador </h1>
            <div> {qtd} </div>
            <button onCLick={continha}> Contar </button>

            <ContainerFilho onStars={reset} qtd={qtd}/>
        </div>
    )
}


    function ContainerFilho(props) {
        function reset() {
            props.onStars();
        }

        return (
            <div className="container">
                <button onClick={reset}> Reset </button>
                <div> {props.qtd} </div>
            </div>
        )
    }