import { useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"
import List from "./List/styled";

const ContainerMenu = styled.div `
display: flex;
flex-direction: column;


padding: 3.2em 0em 8em 0em;
background-color: white;
max-height: 100vh;
width: 15em;
opacity: 100%;

a {
    text-decoration: none;
    color: black;
}
.box-tips, .box-tips1 {
    padding: 1em .5em .0em 1.5em;
    > 
    .sub-title {
        padding: .7em 0em 0em .40em;
        font-size: 16px;
        outline: none;
        text-decoration: none;
        color: black;

        
    }
}

.title {
    font-size: 22px;
}

.sub-title:hover, a:hover {
            color: red;
            cursor: pointer;
            transform: scale(1.1);}

select {
    border-color: white;
    outline: none;
    background: none;
    font-size: 14px;
} 


option {
    border-color: none;
}
`

export default function Menu() {
    const [Mostrar, setMostrar] = useState(false);
    const [Mostrar1, setMostrar1] = useState(false);
    const [Mostrar3, setMostrar3] = useState(false);

    async function listar() {

        if(Mostrar === false) {
        setMostrar(true)  
        onclick="select"
    }
    else {
        setMostrar(false)
    }
}


async function listar1() {

    if(Mostrar1 === false) {
    setMostrar1(true)  
    onclick="select"
}
else {
    setMostrar1(false)
}
}


async function listar3() {

    if(Mostrar3 === false) {
    setMostrar3(true)  
    onclick="select"
}
else {
    setMostrar3(false)
}
}

    return (
        <ContainerMenu>
            <div className="box-tips"> 
                <div className="title">Dicas</div>
                <div className="sub-title">  1º Ano</div> 
                <div className="sub-title">  2º Ano </div>
                <div className="sub-title">3º Ano</div>
            </div>
            <div className="box-tips1"> 
                <div className="title">Calculos</div>
                <div className="sub-title" onClick={listar1}> 4 Operações 
   
                    {Mostrar1 &&
                                <List  onClick={listar1} k1="/OperationAdd" k2="/OperationSubtract" k3="/OperationMultiplication" k4="/OperationDivision" k5=""   l1="Somar"  l2="Subtrair" l3="Multiplicar" l4="Dividir" s1="♦" s2="♦"  s3="♦"  s4="♦" />
                    }   
                
                </div>
                <div className="sub-title"> <Link to="/OperationPotency"> Potenciação  </Link></div>
                <div className="sub-title" onClick={listar}> Equação 1º / 2º Grau
                    
                    {Mostrar &&
                                <List  onClick={listar} k1="/1stDegreeEquation" k2="/" k3="" k4="" k5=""   l1="Equação 1º Grau"  l2="Equação 2º Grau"  s1="♦" s2="♦" />
                    }   
       
                </div>
                <div className="sub-title">Conversão de Unidades</div>
                <div className="sub-title" onClick={listar3} >Calculos Geométricos  
                
                {Mostrar3 &&
                            <List  onClick={listar3} k1="/GeometricCircle" k2="/GeometricRectangles" k3="/GeometricTriangle" k4="" k5=""     l1="Circulo"  l2="Retangulo"  l3="Triángulo" s1="♦" s2="♦" s3="♦"   />
                }
                       
                 </div>
                <div className="sub-title"> <Link to="/OperationPercentage"> Porcentagem </Link></div>
            </div>
        </ContainerMenu>
    )
}