import { useState } from "react";
import styled from "styled-components";

const ContainerEquations = styled.div`
display:flex;
flex-direction: column;
align-items: center;
background-color: white;
border-radius: 15px;
width: 52em;
padding: 4em 0em;

.box-inputs, .minibox1 {
    display: flex;
    flex-direction: row;
}

.minibox {
    display: flex;
    flex-direction: row;

    align-items: center;

    margin-right: 2em;
}
.minibox1 {
    margin: 2em  1em 0em 0em;
    align-items: center;

    input {
        width: 20em;
    }
}
input {
    height: 1.8em;
    margin-left: 1em;
    border: 1.5px solid black;
}


`

export default function BoxEquations() {

    const [num1, setNum1] =  useState (0);
    const [num2, setNum2] =  useState (0);
    const [num3, setNum3] =  useState (0);

    const [cal, setCal] =  useState (0);


    async function Equação() {
        if(num1 == 0 ) {
            
        }
}

    return (
        <ContainerEquations>
            <div className="box-inputs">
                <div className="minibox">
                    <div className="name">A = </div>
                    <input />
                </div>
                <div className="minibox">
                    <div className="name">B = </div>
                    <input />
                </div>
                <div className="minibox">
                    <div className="name">C = </div>
                    <input />
                </div>
            </div>
            <div className="box-result">
                <div className="minibox1">
                    <div className="name">X¹</div>
                    <input />
                </div>
                <div className="minibox1">
                    <div className="name">X²</div>
                    <input />
                </div>
            </div>
        </ContainerEquations>
    )
}