import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios'
const ContainerBoxConversions = styled.div `



background-color: white;
height: 13em;
width: 12em;
border: 0em;
padding: .6em 0em 1em 1.5em;

margin: 22px;

select{
    width: 12.5em;
    height: 2em;
    border-radius: 1px;
   text-align: center;
}

input{
    width: 12em;
    height: 1.4em;
    border: 1px solid black;
    border-radius: 2px;

    margin: .8em 0em;
}
.title{   
    color: blue;
    font-size: 1em;
    
}

.sub-title {
    margin: .2em 0em;
}


`
export default function BoxConversions(props){
    
    const [con, setCon] = useState({})
    const [teste, setTeste] = useState(0)

    async function Conversão() {

        if( teste === 2) {
        let resp = await axios.get(`https://economia.awesomeapi.com.br/last/BRL-USD`);
       setCon([resp.data.BRLUSD.ask])    
        console.log(setTeste)
        }
        else {
            setCon(0)
        }

        
    };

  useEffect(() => {
        Conversão();
      
    }, [])  

    return(
        <ContainerBoxConversions>
            <div className="title">{props.titulo}</div>
            <div className="sub-title"> Quero Converter </div>
            <div className="inputs">
                <input />
            </div>
            <div className="inputs">
                <select  value={teste} onChange={Number => setTeste(Number.target.value)} > 
                    <option value="1">{props.op1}</option>
                    <option value="2"> {props.op2}</option>
                    <option value="3">{props.op3}</option>
                    <option value="4">{props.op4}</option>
                    <option style={props.op5 === '' ? {display: 'none'} : {display: 'block'}}>{props.op5}</option>
                    <option style={props.op6 === '' ? {display: 'none'} : {display: 'block'}}>{props.op6}</option>
                    <option style={props.op7 === '' ? {display: 'none'} : {display: 'block'}}>{props.op7}</option>
                    <option style={props.op8 === '' ? {display: 'none'} : {display: 'block'}}>{props.op8}</option>
                    <option style={props.op9 === '' ? {display: 'none'} : {display: 'block'}}>{props.op9}</option>
                    <option style={props.op10 === '' ? {display: 'none'} : {display: 'block'}}>{props.op10}</option>
                    
                </select>
            </div>
            <div className="sub-title">Para</div>
            <div className="inputs">
                <select>
                    <option id="um1" >{props.ep1}</option>
                    <option>{props.ep2}</option>
                    <option>{props.ep3}</option>
                    <option>{props.ep4}</option>
                    <option style={props.ep5 === '' ? {display: 'none'} : {display: 'block'}} >{props.ep5}</option>
                    <option style={props.ep6 === '' ? {display: 'none'} : {display: 'block'}}>{props.ep6}</option>
                    <option style={props.ep7 === '' ? {display: 'none'} : {display: 'block'}}>{props.ep7}</option>
                    <option style={props.ep8 === '' ? {display: 'none'} : {display: 'block'}}>{props.ep8}</option>
                    <option style={props.ep9 === '' ? {display: 'none'} : {display: 'block'}}>{props.ep9}</option>
                    <option style={props.ep10 === '' ? {display: 'none'} : {display: 'block'}}>{props.ep10}</option>
                </select>
            </div>
            <div className="inputs">
                
             
                <input value={con} />
                </div>
        </ContainerBoxConversions>
    )
}

