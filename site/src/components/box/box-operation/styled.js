import styled from "styled-components"

const ContainerBox = styled.div `
margin-left: 5em;
.oper-border {
    border: 1px solid white;
    background-color: white;
    border-radius: 15px;
    padding: 2em 2em 4em 2em;
}

.oper-input1 {
    display: flex;
    flex-direction: row;
    margin-top: 3em;
    align-items: center;
    input {
        width: 10em;
        height: 2.5em;
        margin:  0em 1em;
    }

    .simbolo {
        font-size: 24px;
    }
}

.oper-title {
    margin: .50em 0em;
    font-size: 52px;
    color: white;
}
`

export default function BoxOperations(props) {
    return (
        <ContainerBox>
            <div className="oper-title">
                {props.titulo}
            </div>
            <div className="oper-border">
                <div className="oper-input1">
                    <input />
                    <div className="simbolo"> {props.sinal1} </div>
                    <input />
                    <div className="simbolo"> {props.sinal2} </div>
                    <input />
                </div>
                <div className="oper-input1">
                    <input />
                    <div className="simbolo"> {props.sinal3} </div>
                    <input />
                    <div className="simbolo"> {props.sinal4} </div>
                    <input />
                    <div className="simbolo"> {props.sinal5} </div>
                    <input />
                </div>
                <div className="oper-input1">
                <input />
                    <div className="simbolo"> {props.sinal6} </div>
                    <input />
                    <div className="simbolo"> {props.sinal7} </div>
                    <input />
                    <div className="simbolo"> {props.sinal8} </div>
                    <input />
                    
                    <div className="simbolo"> {props.sinal9} </div>
                    <input />
                </div>
            </div>
        </ContainerBox>
    )
}