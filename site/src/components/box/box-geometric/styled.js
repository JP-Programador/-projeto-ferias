import { useEffect, useState } from "react";
import styled from "styled-components";

const ContainerGeometric = styled.div `
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
width: 22.5em;
max-height: 25em;
border-radius: 15px;
padding: 1em 0em;

margin-left: 8em;
.title {

    font-size: 22px;
    margin: .0em 6em .4em 0em;
}
.inputs {
    display: flex;
    flex-direction: row;
    margin-bottom: .1em;

    align-items: center;
}
.name {
    margin-right: 1em;
}

input {
    width: 14em;
    height: 1.8em;
    border-radius: 3px;
    border: 1px solid black;
    text-align: center;

}

.simbolo {
    font-size: 22px;
    margin-left: 1.2em;
}
`

export default function BoxGeometric(props) {

    const [Num1, setNum1] = useState('')
    const [Num2, setNum2] = useState('')
    const [Num3, setNum3] = useState('')
    const [Num4, setNum4] = useState('')
    const [Num5, setNum5] = useState('')

    const [Cal, setCal] = useState(0)
    const [Cal1, setCal1] = useState(0)


    function Calcular() {

        
        if(props.name2 === 'Pi' && props.title === 'Calcular Perímetro') {
            let d = setNum2(3.14)
            let c = Num1 * Num2 * 2;
            setCal(c);
            console.log(setCal)
        }
        
        else if(props.name2 === 'Pi' && props.title === 'Calcular Área') {
            let d = setNum2(3.14)
            let c =  Math.pow(Num1, 2) * Num2;
            setCal(c);
            console.log(setCal)
        }
        
        else if(props.name3 === "P")
        {
            setCal( (Num1 + Num2) * 2 )
        }  
        
        
        else if(props.name3 === "C")
        {
            setCal(Num1 + Num2 + Num3)
        }    

           else {
            let c = Num1 * Num2 / 2;
            setCal(c);
            console.log(setCal)
           }
    
        
    }


    useEffect(() => {
        Calcular();
    })

    return (
        <ContainerGeometric>
            <div className="title">{props.title}</div>
                <div className="inputs">
                <div className="name"> {props.name1} </div>
                    <input placeholder="Digite o Valor" value={Num1} onChange={(e) => setNum1(Number(e.target.value))}  />
                </div>
                
                <div className="simbolo">{props.sim1}</div>
                
                <div className="inputs">
                    <div className="name">{props.name2}</div>
                    <input placeholder={props.name2 == 'Pi' ? '3.14' : 'Digite o Valor'}  value={Num2} onChange={(e) => setNum2(Number(e.target.value))}/>
                </div>
                
                <div className="simbolo">{props.sim2}</div>
                
                <div className="inputs">
                    <div className="name">{props.name3}</div>
                    <input  style={props.name3 === 'C' ? {backgroundColor: 'none'} : {backgroundColor: '#EFEFEF4D'}} placeholder=" Digite o Valor" value={ props.name3 === 'C' ? Num3 : Cal}  onChange={(e) => setNum3(Number(e.target.value))}/>
                </div>
                
                <div className="simbolo">{props.sim3}</div>
                
                <div className="inputs">
                    <div className="name">{props.name4}</div>
                    <input  disabled="true" style={props.name3 === 'C' ? {display: 'block', backgroundColor: '#EFEFEF4D'} : {display: 'none'} }  value={Cal  === '' ? '0': Cal}  onChange={(e) => setNum3(Number(e.target.value))}/>
                </div>
                
                <div className="simbolo">{props.sim4}</div>
                
                <div className="inputs">
                    <div className="name">{props.name5}</div>
                    {props.input2}
                </div>
            
        </ContainerGeometric>
    )
}