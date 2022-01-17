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
    const [Num1, setNum1] = useState('')
    const [Option1, setOption1] = useState('')
    const [Option2, setOption2] = useState('')
    const [Revel, SetRevel] = useState('')



    //   if(props.op1 === 'Milha por hora' && props.ep2 === "Pés por Segundo" ){
    //     let vel = Camp1  * 1.467;
    //     SetRevel(vel)
    //     }
    //     else {
    //         SetRevel(2+2)
    //     }
    // }

     async function Conversão() {


                
                if( Option1 === 'op2' && Option2 === 'ep1' && props.op2 === 'Real Brasileiro' && props.ep1 === 'Dolár Americano') {
                let resp = await axios.get(`https://economia.awesomeapi.com.br/last/BRL-USD`);
                setCon( [resp.data.BRLUSD.ask] * Num1)
              
                }
                else if (Option1 === 'op1' && Option2 === 'ep2' && props.op1 === 'Dolár Americano' && props.ep2 === 'Real Brasileiro') {
                    let resp = await axios.get(`https://economia.awesomeapi.com.br/last/USD-BRL`);
                    setCon([resp.data.USDBRL.ask] * Num1)
                    console.log(setCon)
                }

                else if(Option1 === 'op4' && Option2 === 'ep2' && props.op4 === 'Euro' && props.ep2 === 'Real Brasileiro') {
                    let resp = await axios.get(`https://economia.awesomeapi.com.br/last/EUR-BRL`);
                    setCon([resp.data.EURBRL.ask] * Num1)
                    console.log(setCon)
                }


                else if(Option1 === 'op2' && Option2 === 'ep4' && props.op2 === 'Real Brasileiro' && props.ep4 === 'Euro') {
                    let resp = await axios.get(`https://economia.awesomeapi.com.br/last/BRL-EUR`);
                    setCon([resp.data.BRLEUR.ask] * Num1)
                    console.log(setCon)

                }

                

                else if(Option1 === 'op5' && Option2 === 'ep2' && props.op5 === 'Guarani Paraguaio' && props.ep2 === 'Real Brasileiro') {
                    let resp = await axios.get(`https://economia.awesomeapi.com.br/last/PYG-BRL`);
                    setCon([resp.data.PYGBRL.ask] * Num1)
                    console.log(setCon)
                    
                }

                else if(Option1 === 'op2' && Option2 === 'ep5' && props.op2 === 'Real Brasileiro' && props.ep5 ===  'Guarani Paraguaio'  ) {
                    let resp = await axios.get(`https://economia.awesomeapi.com.br/last/BRL-PYG`);
                    setCon([resp.data.BRLPYG.ask] * Num1)
                    console.log(setCon)
                    
                }
                
                else if(Option1 === 'op1' && Option2 === 'ep2' && props.op1 === 'Milha por hora' && props.ep2 === 'Pés por segundo' ) {
                    let vel = Num1  * 1.467;
                    SetRevel(vel)
                    console.log(vel)
                }

                else if(Option1 === 'op1' && Option2  === 'ep3' && props.op1 === 'Milha por hora'  && props.ep3 === 'Metro por segundo') {
                    let vel =  Num1 / 2.237;
                    SetRevel(vel);
                }
                
                else if(Option1 === 'op1' && Option2 === 'ep4' && props.op1 === 'Milha por hora' && props.ep4 === 'Quilômetro por hora') {
                    let vel = Num1 * 1.609;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep5' && props.op1 === 'Milha por hora' && props.ep5 === 'Nó'){
                    let vel = Num1 / 1.151;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep1' && props.op2 === 'Pés por segundo' && props.ep1 === 'Milha por hora') {
                    let vel = Num1 / 1.467;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep3' && props.op2 === 'Pés por segundo' && props.ep3 === 'Metro por segundo') {
                    let vel = Num1 / 3.281;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep4' && props.op2 === 'Pés por segundo' && props.ep4 === 'Quilômetro por hora') {
                    let vel = Num1 * 1.097;
                    SetRevel(vel);
                } 

                else {
                    setCon(Num1)
                }
        
       

    };



  useEffect(() => {
        Conversão();
       
      
  })

  console.log(Option1)
  
  console.log(Option2)
    return(
        <ContainerBoxConversions>
                        <div className="title">{props.titulo}</div>
            <div className="sub-title"> Quero Converter </div>
            <div className="inputs">
                <input value={Num1} onChange={(e) => setNum1(Number(e.target.value))}/>
            </div>
            <div className="inputs">
                <select  value={Option1} onChange={e => setOption1(e.target.value)} > 
                    <option value="Selecionar" selected>Selecionar </option>
                    <option value="op1" >{props.op1} </option>
                    <option value="op2"> {props.op2} </option>
                    <option value="op3"> {props.op3}  </option>
                    <option value="op4"> {props.op4}  </option>
                    <option value="op5" style={props.op5 === '' ? {display: 'none'} : {display: 'block'}} >{props.op5}</option>
                    <option value="op6" style={props.op6 === '' ? {display: 'none'} : {display: 'block'}}>{props.op6}</option>
                    <option value="op7" style={props.op7 === '' ? {display: 'none'} : {display: 'block'}}>{props.op7}</option>
                    <option value="op8" style={props.op8 === '' ? {display: 'none'} : {display: 'block'}}>{props.op8}</option>
                    <option value="op9" style={props.op9 === '' ? {display: 'none'} : {display: 'block'}}>{props.op9}</option>
                    <option value="op10" style={props.op10 === '' ? {display: 'none'} : {display: 'block'}}>{props.op10}</option>
                </select>
            </div>
            <div className="sub-title">Para</div>
            <div className="inputs">
                <select value={Option2} onChange={e => setOption2(e.target.value)}>
                    <option value="Selecionar" >Selecionar</option>
                    <option value="ep1" >{props.ep1}</option>
                    <option  value="ep2">{props.ep2}</option>
                    <option  value="ep3">{props.ep3}</option>
                    <option  value="ep4">{props.ep4}</option>
                    <option  value="ep5" style={props.ep5 === '' ? {display: 'none'} : {display: 'block'}} >{props.ep5}</option>
                    <option   value="ep6" style={props.ep6 === '' ? {display: 'none'} : {display: 'block'}}>{props.ep6}</option>
                    <option  value="ep7" style={props.ep7 === '' ? {display: 'none'} : {display: 'block'}}>{props.ep7}</option>
                    <option  value="ep8" style={props.ep8 === '' ? {display: 'none'} : {display: 'block'}}>{props.ep8}</option>
                    <option  value="ep9" style={props.ep9 === '' ? {display: 'none'} : {display: 'block'}}>{props.ep9}</option>
                    <option   value="ep10"style={props.ep10 === '' ? {display: 'none'} : {display: 'block'}}>{props.ep10}</option>
                </select>
            </div>
            <div className="inputs">
                <input value={props.titulo === 'Moeda' ? con : Revel} />
            </div>

        </ContainerBoxConversions>
            
    )    
}