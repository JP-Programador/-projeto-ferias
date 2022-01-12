import { useEffect, useState } from "react";
import styled from "styled-components";

const ContainerRest = styled.div`
display:  flex;
flex-direction: column;
background-color: white;
height: 12em;
width: 40em;
border-radius: 2em;
align-items: center;
padding: 2em 0em 3.5em 0em;


.pt{
    margin-left: 15px;
    font-size: 22px;
}



.box-inputs{
    display: flex;
    margin: 25px 0px ;
    text-align: center;
    align-items: center;
}
.name{
    color: black;
    margin: 5px 5px 0px 10px ;
}


input {
   width: 32em;
   height: 2.4em;
   border: 2px solid black;
   border-radius: 5px;

   text-align: center;
}
`
export default function Rest(props){

    const [Num1, setNum1] = useState('')
    const [Num2, setNum2] = useState('')
    const [Cal, setCal] = useState('')
    const [Cal1, setCal1] = useState('')


    function Calcular() {

        if(props.name2 === 'de') {
        let x  = Num1 * Num2 / 100;
        setCal(x)
        }
        else {
            if(Num1 === '' & Num2 === '') {
                setCal1('')
            } else 
            setCal1( Math.pow(Num1, Num2));
        }
        
    }

    useEffect ( () => {
        Calcular();
    })

    return(
        <ContainerRest> 
        
        <div className="box-rest">
           <div className="box-inputs">
               <div className="name">{props.name1}</div> 
               <input id="" type="number"  placeholder="Digite o Valor" value={Num1} onChange={(e) => setNum1(Number(e.target.value))}></input>
               <div className="pt">{props.por}</div>
           </div>

           <div className="box-inputs" style={props.name2 === 'de' ? {marginLeft: '3em'} : {marginLeft: '0em'} }>
               <div className="name">{props.name2}</div>
               <input   type="number" placeholder="Digite o Valor" value={Num2} onChange={(e) => setNum2(Number(e.target.value))}></input>
           </div>

           <div className="box-inputs">
                <div className="name">{props.name3}</div>
                <input id="" type="number" value={Cal1} disabled></input>
           </div>
        </div>
         

        </ContainerRest>
    )
    
}