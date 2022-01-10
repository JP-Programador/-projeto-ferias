import { useEffect, useState } from "react"
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

        text-align: center;
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

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')

    const [num3, setNum3] = useState('')
    const [num4, setNum4] = useState('')
    const [num5, setNum5] = useState('')

    const [num6, setNum6] = useState('')
    const [num7, setNum7] = useState('')
    const [num8, setNum8] = useState('')
    const [num9, setNum9] = useState('')


    const [cal, setCal] = useState('')
    const [cal1, setCal1] = useState('')
    const [cal2, setCal2] = useState('')
    function somar() {

        if (props.sinal1 === "+") {
            let x  = num1 + num2;
            let x1 = num3 +  num4 + num5;
            let x2 = num6 + num7 + num8 + num9;
            setCal(x)
            setCal1(x1);
            setCal2(x2);
        } 
        else if (props.sinal1 === "-") {
            let x  = num1 - num2;
            let x1 = num3 -  num4 - num5;
            let x2 = num6 -num7 -num8 - num9;
            setCal(x)
            setCal1(x1);
            setCal2(x2);
        }
        else if (props.sinal1 === "X") {
            let x  = num1 * num2;
            let x1 = num3 *  num4 * num5;
            let x2 = num6 * num7 * num8 * num9;
            setCal(x)
            setCal1(x1);
            setCal2(x2);
        }

        else{
            let x  = num1 / num2;
            let x1 = num3 /  num4 / num5;
            let x2 = num6 / num7 / num8 / num9;
            setCal(x)
            setCal1(x1);
            setCal2(x2);

            
        }
    }


    useEffect(() => {
        somar();

    })
    

    return (
        <ContainerBox>
            <div className="oper-title">
                {props.titulo}
            </div>
            <div className="oper-border">
                <div className="oper-input1">
                    <input type="number" placeholder="Primeiro Valor" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />

                    <div className="simbolo"> {props.sinal1}  </div>

                    <input type="number" placeholder="Segundo Valor" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
                    <div className="simbolo"> {props.sinal2}  </div>
                    <input value={cal} />
                </div>
                <div className="oper-input1">
                    <input placeholder="Primeiro Valor" value={num3} onChange={(e) => setNum3(Number(e.target.value))}/>
                    <div className="simbolo"> {props.sinal3} </div>
                    <input placeholder="Segundo Valor" value={num4} onChange={(e) => setNum4(Number(e.target.value))}/>
                    <div className="simbolo"> {props.sinal4} </div>
                    <input placeholder="Terceiro Valor" value={num5} onChange={(e) => setNum5(Number(e.target.value))}/>
                    <div className="simbolo"> {props.sinal5} </div>
                    <input value={cal1}/>
                </div>
                <div className="oper-input1">
                <input placeholder="Primeiro Valor" value={num6} onChange={(e) => setNum6(Number(e.target.value))}/>
                    <div className="simbolo"> {props.sinal6} </div>
                    <input placeholder="Segundo Valor" value={num7} onChange={(e) => setNum7(Number(e.target.value))}/>
                    <div className="simbolo"> {props.sinal7} </div>
                    <input placeholder="Terceiro Valor" value={num8} onChange={(e) => setNum8(Number(e.target.value))}/>
                    <div className="simbolo"> {props.sinal8} </div>
                    <input placeholder="Quarto Valor" value={num9} onChange={(e) => setNum9(Number(e.target.value))}/>
                    
                    <div className="simbolo"> {props.sinal9} </div>
                    <input value={cal2}/>
                </div> 
            </div>
        </ContainerBox>
    )
}