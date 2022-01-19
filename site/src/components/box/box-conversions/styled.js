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

                else if(Option1 === 'op2' && Option2 === 'ep5' && props.op2 === 'Pés por segundo' && props.ep5 === 'Nó') {
                    let vel = Num1 / 1.688;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep1' && props.op3 === 'Metro por segundo' && props.ep1 === 'Milha por hora') {
                    let vel = Num1 * 2.237;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep2' && props.op3 === 'Metro por segundo' && props.ep2 === 'Pés por segundo') {
                    let vel = Num1 * 3.281;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep4' && props.op3 === 'Metro por segundo' && props.ep4 === 'Quilômetro por hora') {
                    let vel = Num1 * 3.6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep5' && props.op3 === 'Metro por segundo' && props.ep5 === 'Nó') {
                    let vel = Num1 * 1.944;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep1' && props.op4 === 'Quilômetro por hora' && props.ep1 === 'Milha por hora') {
                    let vel = Num1 / 1.609;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep2' && props.op4 === 'Quilômetro por hora' && props.ep2 === 'Pés por segundo') {
                    let vel = Num1 / 1.097;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep3' && props.op4 === 'Quilômetro por hora' && props.ep3 === 'Metro por segundo') {
                    let vel = Num1 / 3.6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep5' && props.op4 === 'Quilômetro por hora' && props.ep5 === 'Nó') {
                    let vel = Num1 / 1.852;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep1' && props.op5 === 'Nó' && props.ep1 === 'Milha por hora') {
                    let vel = Num1 * 1.151;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep2' && props.op5 === 'Nó' && props.ep2 === 'Pés por segundo') {
                    let vel = Num1 * 1.168;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep3' && props.op5 === 'Nó' && props.ep3 === 'Metro por segundo') {
                    let vel = Num1 / 1.944;
                    SetRevel(vel);
                }

                else if(Option1 ==='op5' && Option2 === 'ep4' && props.op5 === 'Nó' && props.ep4 === 'Quilômetro por hora') {
                    let vel = Num1 * 1.852;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep2' && props.op1 === 'Quilômetro quadrado' && props.ep2 === 'Metro quadrado') {
                    let vel = Num1 / 1e+6;
                    SetRevel(vel);
                    console.log(vel)
                }

                else if(Option1 === 'op1' && Option2 === 'ep3' && props.op1 === 'Quilômetro quadrado' && props.ep3 === 'Milha quadrada') {
                    let vel = Num1 / 2.59;
                    SetRevel(vel);
                }
                
                else if(Option1 === 'op1' && Option2 === 'ep4' && props.op1 === 'Quilômetro quadrado' && props.ep4 === 'Jarda quadrada') {
                    let vel = Num1 * 1.196e+6;
                    SetRevel(vel);
                } 

                else if(Option1 === 'op1' && Option2 === 'ep5' && props.op1 === 'Quilômetro quadrado' && props.ep5 === 'Pé quadrado') {
                    let vel = Num1 * 1.076e+7;
                    SetRevel(vel);
                } 

                else if(Option1 === 'op1' && Option2 === 'ep6' && props.op1 === 'Quilômetro quadrado' && props.ep6 === 'Polegada quadrada') {
                    let vel = Num1 / 1.55e+9;
                    SetRevel(vel);
                } 

                else if(Option1 === 'op1' && Option2 === 'ep7' && props.op1 === 'Quilômetro quadrado' && props.ep7 === 'Hectare') {
                    let vel = Num1 * 100;
                    SetRevel(vel);
                } 

                else if(Option1 === 'op1' && Option2 === 'ep8' && props.op1 === 'Quilômetro quadrado' && props.ep8 === 'Acre') {
                    let vel = Num1 * 247;
                    SetRevel(vel);
                } 

                else if(Option1 === 'op2' && Option2 === 'ep1' && props.op2 === 'Metro quadrado' && props.ep1 === 'Quilômetro quadrado') {
                    let vel = Num1 / 1e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep3' && props.op2 === 'Metro quadrado' && props.ep3 === 'Milha quadrada') {
                    let vel = Num1 / 2.59e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep4' && props.op2 === 'Metro quadrado' && props.ep4 === 'Jarda quadrada') {
                    let vel = Num1 * 1.196;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep5' && props.op2 === 'Metro quadrado' && props.ep5 === 'Pé quadrado') {
                    let vel = Num1 * 10.764;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep6' && props.op2 === 'Metro quadrado' && props.ep6 === 'Polegada quadrada') {
                    let vel = Num1 * 1550;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep7' && props.op2 === 'Metro quadrado' && props.ep7 === 'Hectare') {
                    let vel = Num1 / 10000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep8' && props.op2 === 'Metro quadrado' && props.ep8 === 'Acre') {
                    let vel = Num1 / 4047;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep1' && props.op3 === 'Milha quadrada' && props.ep1 === 'Quilômetro quadrado') {
                    let vel = Num1 * 2.59;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep2' && props.op3 === 'Milha quadrada' && props.ep2 === 'Metro quadrado') {
                    let vel = Num1 * 2.59e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep4' && props.op3 === 'Milha quadrada' && props.ep4 === 'Jarda quadrada') {
                    let vel = Num1 * 3.098e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep5' && props.op3 === 'Milha quadrada' && props.ep5 === 'Pé quadrado') {
                    let vel = Num1 * 2.788e+7;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep6' && props.op3 === 'Milha quadrada' && props.ep6 === 'Polegada quadrada') {
                    let vel = Num1 * 4.014e+9;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep7' && props.op3 === 'Milha quadrada' && props.ep7 === 'Hectare') {
                    let vel = Num1 * 259;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep8' && props.op3 === 'Jarda quadrada' && props.ep8 === 'Acre') {
                    let vel = Num1 * 640;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep1' && props.op4 === 'Jarda quadrada' && props.ep1 === 'Quilômetro quadrado') {
                    let vel = Num1 / 1.196e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep2' && props.op4 === 'Jarda quadrada' && props.ep2 === 'Metro quadrado') {
                    let vel = Num1 /  1.196;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep3' && props.op4 === 'Jarda quadrada' && props.ep3 === 'Milha quadrada') {
                    let vel = Num1 / 3.098e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep5' && props.op4 === 'Jarda quadrada' && props.ep5 === 'Pé quadrado') {
                    let vel = Num1 * 9;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep6' && props.op4 === 'Jarda quadrada' && props.ep6 === 'Polegada quadrada') {
                    let vel = Num1 * 1296;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep7' && props.op4 === 'Jarda quadrada' && props.ep7 === 'Hectare') {
                    let vel = Num1 / 11960;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep8' && props.op4 === 'Jarda quadrada' && props.ep8 === 'Acre') {
                    let vel = Num1 / 4840;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep1' && props.op5 === 'Pé quadrado' && props.ep1 === 'Quilômetro quadrado') {
                    let vel = Num1 /  1.076e+7;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep2' && props.op5 === 'Pé quadrado' && props.ep2 === 'Metro quadrado') {
                    let vel = Num1 / 10.764;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep3' && props.op5 === 'Pé quadrado' && props.ep3 === 'Milha quadrada') {
                    let vel = Num1 / 2.788e+7;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep4' && props.op5 === 'Pé quadrado' && props.ep4 === 'Jarda quadrada') {
                    let vel = Num1 / 9;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep6' && props.op5 === 'Pé quadrado' && props.ep6 === 'Polegada quadrada') {
                    let vel = Num1 * 144;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep7' && props.op5 === 'Pé quadrado' && props.ep7 === 'Hectare') {
                    let vel = Num1 / 107639;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep8' && props.op5 === 'Pé quadrado' && props.ep8 === 'Acre') {
                    let vel = Num1 /  43560;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep1' && props.op6 === 'Polegada quadrada' && props.ep1 === 'Quilômetro quadrado') {
                    let vel = Num1 /  1.55e+9;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep2' && props.op6 === 'Polegada quadrada' && props.ep2 === 'Metro quadrado') {
                    let vel = Num1 /  1550;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep3' && props.op6 === 'Polegada quadrada' && props.ep3 === 'Milha quadrada') {
                    let vel = Num1 /  4.014e+9;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep4' && props.op6 === 'Polegada quadrada' && props.ep4 === 'Jarda quadrada') {
                    let vel = Num1 /  1296;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep5' && props.op6 === 'Polegada quadrada' && props.ep5 === 'Pé quadrado') {
                    let vel = Num1 /  144;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep7' && props.op6 === 'Polegada quadrada' && props.ep7 === 'Hectare') {
                    let vel = Num1 /  1.55e+7;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep8' && props.op6 === 'Polegada quadrada' && props.ep8 === 'Acre') {
                    let vel = Num1 /   6.273e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep8' && props.op6 === 'Polegada quadrada' && props.ep8 === 'Acre') {
                    let vel = Num1 /   6.273e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep1' && props.op7 === 'Hectare' && props.ep1 === 'Quilômetro quadrado') {
                    let vel = Num1 / 100;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep2' && props.op7 === 'Hectare' && props.ep2 === 'Metro quadrado') {
                    let vel = Num1 * 10000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep3' && props.op7 === 'Hectare' && props.ep3 === 'Milha quadrada') {
                    let vel = Num1 / 259;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep4' && props.op7 === 'Hectare' && props.ep4 === 'Jarda quadrada') {
                    let vel = Num1 *  11960;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep5' && props.op7 === 'Hectare' && props.ep5 === 'Pé quadrado') {
                    let vel = Num1 * 107639;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep6' && props.op7 === 'Hectare' && props.ep6 === 'Polegada quadrada') {
                    let vel = Num1 * 1.55e+7;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep8' && props.op7 === 'Hectare' && props.ep8 === 'Acre') {
                    let vel = Num1 * 2.471;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep1' && props.op8 === 'Acre' && props.ep1 === 'Quilômetro quadrado') {
                    let vel = Num1 /247;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep2' && props.op8 === 'Acre' && props.ep2 === 'Metro quadrado') {
                    let vel = Num1 * 4047;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep3' && props.op8 === 'Acre' && props.ep3 === 'Milha quadrada') {
                    let vel = Num1 / 640;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep4' && props.op8 === 'Acre' && props.ep4 === 'Jarda quadrada') {
                    let vel = Num1 * 4840;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep5' && props.op8 === 'Acre' && props.ep5 === 'Pé quadrado') {
                    let vel = Num1 * 43560;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep6' && props.op8 === 'Acre' && props.ep6 === 'Polegada quadrada') {
                    let vel = Num1 * 6.273e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep7' && props.op8 === 'Acre' && props.ep7 === 'Hectare') {
                    let vel = Num1 /  2.471;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep2' && props.op1 === 'Tonelada' && props.ep2 === 'Quilograma') {
                    let vel = Num1 * 1000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep3' && props.op1 === 'Tonelada' && props.ep3 === 'Grama') {
                    let vel = Num1 * 1e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep4' && props.op1 === 'Tonelada' && props.ep4 === 'Miligrama') {
                    let vel = Num1 * 1e+9;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep5' && props.op1 === 'Tonelada' && props.ep5 === 'Micrograma') {
                    let vel = Num1 * 1e+12;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep6' && props.op1 === 'Tonelada' && props.ep6 === 'Tonelada de deslocamento ') {
                    let vel = Num1 /  1016;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep7' && props.op1 === 'Tonelada' && props.ep7 === 'Tonelada curta') {
                    let vel = Num1 /  907;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep8' && props.op1 === 'Tonelada' && props.ep8 === 'Stone') {
                    let vel = Num1 /  6.35;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep9' && props.op1 === 'Tonelada' && props.ep9 === 'Libra') {
                    let vel = Num1 *  2205;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep10' && props.op1 === 'Tonelada' && props.ep10 === 'Onça') {
                    let vel = Num1 * 35.274;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep1' && props.op2 === 'Quilograma' && props.ep1 === 'Tonelada') {
                    let vel = Num1 / 1000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep3' && props.op2 === 'Quilograma' && props.ep3 === 'Grama') {
                    let vel = Num1 * 1000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep4' && props.op2 === 'Quilograma' && props.ep4 === 'Miligrama') {
                    let vel = Num1 * 1e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep5' && props.op2 === 'Quilograma' && props.ep5 === 'Micrograma') {
                    let vel = Num1 / 1e+9;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep6' && props.op2 === 'Quilograma' && props.ep6 === 'Tonelada de deslocamento') {
                    let vel = Num1 / 1016;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep7' && props.op2 === 'Quilograma' && props.ep7 === 'Tonelada curta') {
                    let vel = Num1 / 907;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep8' && props.op2 === 'Quilograma' && props.ep8 === 'Stone') {
                    let vel = Num1 / 6.35;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep9' && props.op2 === 'Quilograma' && props.ep9 === 'Libra') {
                    let vel = Num1 * 2.205;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep10' && props.op2 === 'Quilograma' && props.ep10 === 'Onça') {
                    let vel = Num1 * 35.274;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep10' && props.op2 === 'Quilograma' && props.ep10 === 'Onça') {
                    let vel = Num1 * 35.274;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep1' && props.op3 === 'Grama' && props.ep1 === 'Tonelada') {
                    let vel = Num1 / 1e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep2' && props.op3 === 'Grama' && props.ep2 === 'Quilograma') {
                    let vel = Num1 / 1000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep4' && props.op3 === 'Grama' && props.ep4 === 'Miligrama') {
                    let vel = Num1 * 1000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep5' && props.op3 === 'Grama' && props.ep5 === 'Micrograma') {
                    let vel = Num1 * 1e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep6' && props.op3 === 'Grama' && props.ep6 === 'Tonelada de deslocamento') {
                    let vel = Num1 / 1.016e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep7' && props.op3 === 'Grama' && props.ep7 === 'Tonelada curta') {
                    let vel = Num1 / 907185;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep8' && props.op3 === 'Grama' && props.ep8 === 'Stone') {
                    let vel = Num1 / 6350;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep9' && props.op3 === 'Grama' && props.ep9 === 'Libra') {
                    let vel = Num1 / 454;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep10' && props.op3 === 'Grama' && props.ep10 === 'Onça') {
                    let vel = Num1 / 28.35;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep10' && props.op3 === 'Grama' && props.ep10 === 'Onça') {
                    let vel = Num1 / 28.35;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep10' && props.op3 === 'Grama' && props.ep10 === 'Onça') {
                    let vel = Num1 / 28.35;
                    SetRevel(vel);
                }


                else if(Option1 === 'op3' && Option2 === 'ep10' && props.op3 === 'Grama' && props.ep10 === 'Onça') {
                    let vel = Num1 / 28.35;
                    SetRevel(vel);
                }


                else if(Option1 === 'op3' && Option2 === 'ep10' && props.op3 === 'Grama' && props.ep10 === 'Onça') {
                    let vel = Num1 / 28.35;
                    SetRevel(vel);
                }


                else if(Option1 === 'op3' && Option2 === 'ep10' && props.op3 === 'Grama' && props.ep10 === 'Onça') {
                    let vel = Num1 / 28.35;
                    SetRevel(vel);
                }


                else if(Option1 === 'op3' && Option2 === 'ep10' && props.op3 === 'Grama' && props.ep10 === 'Onça') {
                    let vel = Num1 / 28.35;
                    SetRevel(vel);
                }


                else if(Option1 === 'op3' && Option2 === 'ep10' && props.op3 === 'Grama' && props.ep10 === 'Onça') {
                    let vel = Num1 / 28.35;
                    SetRevel(vel);
                }


                else if(Option1 === 'op3' && Option2 === 'ep10' && props.op3 === 'Grama' && props.ep10 === 'Onça') {
                    let vel = Num1 / 28.35;
                    SetRevel(vel);
                }


                else if(Option1 === 'op3' && Option2 === 'ep10' && props.op3 === 'Grama' && props.ep10 === 'Onça') {
                    let vel = Num1 / 28.35;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep1' && props.op4 === 'Miligrama' && props.ep1 === 'Tonelada') {
                    let vel = Num1 / 1e+9;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep2' && props.op4 === 'Miligrama' && props.ep2 === 'Quilograma') {
                    let vel = Num1 / 1e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep1' && props.op5 === 'Micrograma' && props.ep1 === 'Tonelada') {
                    let vel = Num1 / 1e+12;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep2' && props.op5 === 'Micrograma' && props.ep2 === 'Quilograma') {
                    let vel = Num1 / 1e+9;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep3' && props.op5 === 'Micrograma' && props.ep3 === 'Grama') {
                    let vel = Num1 / 1e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep4' && props.op5 === 'Micrograma' && props.ep4 === 'Miligrama') {
                    let vel = Num1 / 1000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep6' && props.op5 === 'Micrograma' && props.ep6 === 'Tonelada de deslocamento') {
                    let vel = Num1 / 1.016e+12;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep7' && props.op5 === 'Micrograma' && props.ep7 === 'Tonelada curta') {
                    let vel = Num1 / 9.072e+11;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep8' && props.op5 === 'Micrograma' && props.ep8 === 'Stone') {
                    let vel = Num1 / 6.35e+9;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep9' && props.op5 === 'Micrograma' && props.ep9 === 'Libra') {
                    let vel = Num1 /  4.536e+8;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep10' && props.op5 === 'Micrograma' && props.ep10 === 'Onça') {
                    let vel = Num1 / 2.835e+7;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep1' && props.op6 === 'Tonelada de deslocamento' && props.ep1 === 'Tonelada') {
                    let vel = Num1 * 1.016;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep2' && props.op6 === 'Tonelada de deslocamento' && props.ep2 === 'Quilograma') {
                    let vel = Num1 *  1016;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep3' && props.op6 === 'Tonelada de deslocamento' && props.ep3 === 'Grama') {
                    let vel = Num1 * 1.016e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep4' && props.op6 === 'Tonelada de deslocamento' && props.ep4 === 'Miligrama') {
                    let vel = Num1 * 1.016e+9;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep5' && props.op6 === 'Tonelada de deslocamento' && props.ep5 === 'Micrograma') {
                    let vel = Num1 * 1.016e+12;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep7' && props.op6 === 'Tonelada de deslocamento' && props.ep7 === 'Tonelada curta') {
                    let vel = Num1 * 1.12;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep8' && props.op6 === 'Tonelada de deslocamento' && props.ep8 === 'Stone') {
                    let vel = Num1 * 160;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep9' && props.op6 === 'Tonelada de deslocamento' && props.ep9 === 'Libra') {
                    let vel = Num1 * 2240;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep10' && props.op6 === 'Tonelada de deslocamento' && props.ep10 === 'Onça') {
                    let vel = Num1 * 35840;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep1' && props.op7 === 'Tonelada curta' && props.ep1 === 'Tonelada') {
                    let vel = Num1 / 1.102;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep2' && props.op7 === 'Tonelada curta' && props.ep2 === 'Quilograma') {
                    let vel = Num1 * 907;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep3' && props.op7 === 'Tonelada curta' && props.ep3 === 'Grama') {
                    let vel = Num1 * 907185;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep4' && props.op7 === 'Tonelada curta' && props.ep4 === 'Miligrama') {
                    let vel = Num1 * 9.072e+8;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep5' && props.op7 === 'Tonelada curta' && props.ep5 === 'Microgama') {
                    let vel = Num1 * 9.072e+11;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep6' && props.op7 === 'Tonelada curta' && props.ep6 === 'Tonelada de deslocamento') {
                    let vel = Num1 / 1.12 ;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep8' && props.op7 === 'Tonelada curta' && props.ep8 === 'Stone') {
                    let vel = Num1 *  143;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep9' && props.op7 === 'Tonelada curta' && props.ep9 === 'Libra') {
                    let vel = Num1 * 2000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep10' && props.op7 === 'Tonelada curta' && props.ep10 === 'Onça') {
                    let vel = Num1 * 32000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep1' && props.op8 === 'Stone' && props.ep1 === 'Tonelada') {
                    let vel = Num1 / 157;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep2' && props.op8 === 'Stone' && props.ep2 === 'Quilograma') {
                    let vel = Num1 * 6.35;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep3' && props.op8 === 'Stone' && props.ep3 === 'Grama') {
                    let vel = Num1 * 6350;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep4' && props.op8 === 'Stone' && props.ep4 === 'Miligrama') {
                    let vel = Num1 *  6.35e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep5' && props.op8 === 'Stone' && props.ep5 === 'Micrograma') {
                    let vel = Num1 * 6.35e+9;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep6' && props.op8 === 'Stone' && props.ep6 === 'Tonelada de deslocamento') {
                    let vel = Num1 / 160;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep7' && props.op8 === 'Stone' && props.ep7 === 'Tonelada curta') {
                    let vel = Num1 / 143;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep9' && props.op8 === 'Stone' && props.ep9 === 'Libra') {
                    let vel = Num1 * 14;
                    SetRevel(vel);
                } 

                else if(Option1 === 'op8' && Option2 === 'ep10' && props.op8 === 'Stone' && props.ep10 === 'Onça') {
                    let vel = Num1 * 224;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep1' && props.op9 === 'Libra' && props.ep1 === 'Tonelada') {
                    let vel = Num1 /  2205;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep2' && props.op9 === 'Libra' && props.ep2 === 'Quilograma') {
                    let vel = Num1 / 2.205;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep3' && props.op9 === 'Libra' && props.ep3 === 'Grama') {
                    let vel = Num1 * 454;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep4' && props.op9 === 'Libra' && props.ep4 === 'Miligrama') {
                    let vel = Num1 * 453592;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep5' && props.op9 === 'Libra' && props.ep5 === 'Micrograma') {
                    let vel = Num1 * 4.536e+8;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep6' && props.op9 === 'Libra' && props.ep6 === 'Tonelada de deslocamento') {
                    let vel = Num1 / 2240;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep7' && props.op9 === 'Libra' && props.ep7 === 'Tonelada curta') {
                    let vel = Num1 / 2000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep8' && props.op9 === 'Libra' && props.ep8 === 'Stone') {
                    let vel = Num1 / 14;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep10' && props.op9 === 'Libra' && props.ep10 === 'Onça') {
                    let vel = Num1 * 16;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep1' && props.op10 === 'Onça' && props.ep1 === 'Tonelada') {
                    let vel = Num1 / 35274;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep2' && props.op10 === 'Onça' && props.ep2 === 'Quilograma') {
                    let vel = Num1 / 35.274;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep3' && props.op10 === 'Onça' && props.ep3 === 'Grama') {
                    let vel = Num1 * 28.35;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep4' && props.op10 === 'Onça' && props.ep4 === 'Miligrama') {
                    let vel = Num1 * 28350;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep5' && props.op10 === 'Onça' && props.ep5 === 'Micrograma') {
                    let vel = Num1 * 2.835e+7;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep6' && props.op10 === 'Onça' && props.ep6 === 'Tonelada de deslocamento') {
                    let vel = Num1 / 35840
                    ;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep7' && props.op10 === 'Onça' && props.ep7 === 'Tonelada curta') {
                    let vel = Num1 / 32000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep8' && props.op10 === 'Onça' && props.ep8 === 'Stone') {
                    let vel = Num1 / 224;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep9' && props.op10 === 'Onça' && props.ep9 === 'Libra') {
                    let vel = Num1 / 16;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep2' && props.op1 === 'Galão americano' && props.ep2 === 'Quarto líquido americano') {
                    let vel = Num1 * 4;
                    SetRevel(vel);
                    console.log(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep3' && props.op1 === 'Galão americano' && props.ep3 === 'Pinta america') {
                    let vel = Num1 * 8;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep4' && props.op1 === 'Galão americano' && props.ep4 === 'Copo') {
                    let vel = Num1 * 15.773;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep5' && props.op1 === 'Galão americano' && props.ep5 === 'Onça líquida americana') {
                    let vel = Num1 * 128;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep6' && props.op1 === 'Galão americano' && props.ep6 === 'Colher de sopa americana') {
                    let vel = Num1 * 256;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep7' && props.op1 === 'Galão americano' && props.ep7 === 'Colher de chá americana') {
                    let vel = Num1 * 768;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep8' && props.op1 === 'Galão americano' && props.ep8 === 'Metro cúbico') {
                    let vel = Num1 / 264;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep9' && props.op1 === 'Galão americano' && props.ep9 === 'Litro') {
                    let vel = Num1 * 3.785;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep10' && props.op1 === 'Galão americano' && props.ep10 === 'Mililitro') {
                    let vel = Num1 * 3785;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep1' && props.op2 === 'Quarto líquido americano' && props.ep1 === 'Galão americano') {
                    let vel = Num1 / 4;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep3' && props.op2 === 'Quarto líquido americano' && props.ep3 === 'Pinta americana') {
                    let vel = Num1 * 2;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep4' && props.op2 === 'Quarto líquido americano' && props.ep4 === 'Copo') {
                    let vel = Num1 * 3.943;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep5' && props.op2 === 'Quarto líquido americano' && props.ep5 === 'Onça líquida americana') {
                    let vel = Num1 * 32;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep6' && props.op2 === 'Quarto líquido americano' && props.ep6 === 'Colher de sopa americana') {
                    let vel = Num1 * 64;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep7' && props.op2 === 'Quarto líquido americano' && props.ep7 === 'Colher de chá americana') {
                    let vel = Num1 * 192;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep8' && props.op2 === 'Quarto líquido americano' && props.ep8 === 'Metro cúbico') {
                    let vel = Num1 / 1057;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep9' && props.op2 === 'Quarto líquido americano' && props.ep9 === 'Litro') {
                    let vel = Num1 / 1.057;
                    SetRevel(vel);
                }

                else if(Option1 === 'op2' && Option2 === 'ep9' && props.op2 === 'Quarto líquido americano' && props.ep9 === 'Mililitro') {
                    let vel = Num1 * 946;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep1' && props.op3 === 'Pinta americana' && props.ep1 === 'Galão americano') {
                    let vel = Num1 / 8;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep2' && props.op3 === 'Pinta americana' && props.ep2 === 'Quarto líquido americano') {
                    let vel = Num1 / 2;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep4' && props.op3 === 'Pinta americana' && props.ep4 === 'Copo') {
                    let vel = Num1 * 1.972;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep5' && props.op3 === 'Pinta americana' && props.ep5 === 'Onça líquida americana') {
                    let vel = Num1 * 16;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep6' && props.op3 === 'Pinta americana' && props.ep6 === 'Colher de sopa americana') {
                    let vel = Num1 * 32;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep7' && props.op3 === 'Pinta americana' && props.ep7 === 'Colher de chá americana') {
                    let vel = Num1 * 96;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep8' && props.op3 === 'Pinta americana' && props.ep8 === 'Metro cúbico') {
                    let vel = Num1 / 2113;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep9' && props.op3 === 'Pinta americana' && props.ep9 === 'Litro') {
                    let vel = Num1 / 2.113;
                    SetRevel(vel);
                }

                else if(Option1 === 'op3' && Option2 === 'ep10' && props.op3 === 'Pinta americana' && props.ep10 === 'Mililitro') {
                    let vel = Num1 * 473;
                    SetRevel(vel);
                }
                else if(Option1 === 'op4' && Option2 === 'ep1' && props.op4 === 'Copo' && props.ep1 === 'Galão americano') {
                    let vel = Num1 / 15.773
                    ;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep1' && props.op4 === 'Copo' && props.ep1 === 'Quatro líquido americanao') {
                    let vel = Num1 / 3.943;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep4' && props.op4 === 'Copo' && props.ep4 === 'Pinta americana') {
                    let vel = Num1 / 1.972;
                    SetRevel(vel);
                }
                else if(Option1 === 'op4' && Option2 === 'ep5' && props.op4 === 'Copo' && props.ep5 === 'Onça líquida americana') {
                    let vel = Num1 *  8.115;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep6' && props.op4 === 'Copo' && props.ep6 === 'Colher de sopa americana') {
                    let vel = Num1 * 16.231;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep7' && props.op4 === 'Copo' && props.ep7 === 'Colher de chá americana') {
                    let vel = Num1 * 48.692;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep8' && props.op4 === 'Copo' && props.ep8 === 'Metro cúbico') {
                    let vel = Num1 / 4167;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep9' && props.op4 === 'Copo' && props.ep9 === 'Litro') {
                    let vel = Num1 / 4.167;
                    SetRevel(vel);
                }

                else if(Option1 === 'op4' && Option2 === 'ep10' && props.op4 === 'Copo' && props.ep10 === 'Mililitro') {
                    let vel = Num1 * 240;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep1' && props.op5 === 'Onça líquida americana' && props.ep1 === 'Galão americano') {
                    let vel = Num1 / 128;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep2' && props.op5 === 'Onça líquida americana' && props.ep2 === 'Quarto líquido americano') {
                    let vel = Num1 / 32;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep3' && props.op5 === 'Onça líquida americana' && props.ep3 === 'Pinta americana') {
                    let vel = Num1 / 16;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep4' && props.op5 === 'Onça líquida americana' && props.ep4 === 'Copo') {
                    let vel = Num1 / 8.115;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep6' && props.op5 === 'Onça líquida americana' && props.ep6 === 'Colher de sopa americana') {
                    let vel = Num1 * 2;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep7' && props.op5 === 'Onça líquida americana' && props.ep7 === 'Colher de chá americana') {
                    let vel = Num1 * 6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep8' && props.op5 === 'Onça líquida americana' && props.ep8 === 'Metro cúbico') {
                    let vel = Num1 / 33814;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep9' && props.op5 === 'Onça líquida americana' && props.ep9 === 'Litro') {
                    let vel = Num1 / 33.814;
                    SetRevel(vel);
                }

                else if(Option1 === 'op5' && Option2 === 'ep10' && props.op5 === 'Onça líquida americana' && props.ep10 === 'Mililitro') {
                    let vel = Num1 * 29.574;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep1' && props.op6 === 'Colher de sopa americana' && props.ep1 === 'Galão americano') {
                    let vel = Num1 / 256;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep2' && props.op6 === 'Colher de sopa americana' && props.ep2 === 'Quarto líquido americano') {
                    let vel = Num1 / 64;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep3' && props.op6 === 'Colher de sopa americana' && props.ep3 === 'Pinta americana') {
                    let vel = Num1 / 32;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep4' && props.op6 === 'Colher de sopa americana' && props.ep4 === 'Copo') {
                    let vel = Num1 / 16.231;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep5' && props.op6 === 'Colher de sopa americana' && props.ep5 === 'Onça líquida americana') {
                    let vel = Num1 / 2;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep7' && props.op6 === 'Colher de sopa americana' && props.ep7 === 'Colher de chá americana') {
                    let vel = Num1 * 3;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep8' && props.op6 === 'Colher de sopa americana' && props.ep8 === 'Metro cúbico') {
                    let vel = Num1 / 67628;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep9' && props.op6 === 'Colher de sopa americana' && props.ep9 === 'Litro') {
                    let vel = Num1 / 67.628;
                    SetRevel(vel);
                }

                else if(Option1 === 'op6' && Option2 === 'ep10' && props.op6 === 'Colher de sopa americana' && props.ep10 === 'Mililitro') {
                    let vel = Num1 * 14.787
                    ;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep1' && props.op7 === 'Colher de chá americana' && props.ep1 === 'Galão americano') {
                    let vel = Num1 / 768
                    ;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep2' && props.op7 === 'Colher de chá americana' && props.ep2 === 'Quarto líquido americano') {
                    let vel = Num1 / 192
                    ;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep3' && props.op7 === 'Colher de chá americana' && props.ep3 === 'Pinta americana') {
                    let vel = Num1 / 96
                    ;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep4' && props.op7 === 'Colher de chá americana' && props.ep4 === 'Copo') {
                    let vel = Num1 / 48.692

                    ;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep5' && props.op7 === 'Colher de chá americana' && props.ep5 === 'Onça líquida americana') {
                    let vel = Num1 / 6
                    ;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep6' && props.op7 === 'Colher de chá americana' && props.ep6 === 'Colher de sopa americana') {
                    let vel = Num1 / 3
                    ;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep8' && props.op7 === 'Colher de chá americana' && props.ep8 === 'Metro cúbico') {
                    let vel = Num1 / 202884

                    ;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep9' && props.op7 === 'Colher de chá americana' && props.ep9 === 'Litro') {
                    let vel = Num1 / 203;
                    SetRevel(vel);
                }

                else if(Option1 === 'op7' && Option2 === 'ep10' && props.op7 === 'Colher de chá americana' && props.ep10 === 'Mililitro') {
                    let vel = Num1 * 4.929;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep1' && props.op8 === 'Metro cúbico' && props.ep1 === 'Galão americano') {
                    let vel = Num1 * 264;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep2' && props.op8 === 'Metro cúbico' && props.ep2 === 'Quarto líquido americano') {
                    let vel = Num1 * 1057;                    
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep3' && props.op8 === 'Metro cúbico' && props.ep3 === 'Pinta americana') {
                    let vel = Num1 * 2113;                    
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep4' && props.op8 === 'Metro cúbico' && props.ep4 === 'Copo') {
                    let vel = Num1 * 4167;                    
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep5' && props.op8 === 'Metro cúbico' && props.ep5 === 'Onça líquida americana') {
                    let vel = Num1 * 33814;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep6' && props.op8 === 'Metro cúbico' && props.ep6 === 'Colher de sopa americana') {
                    let vel = Num1 * 67628;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep7' && props.op8 === 'Metro cúbico' && props.ep7 === 'Colher de chá amricana') {
                    let vel = Num1 * 202884;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep9' && props.op8 === 'Metro cúbico' && props.ep9 === 'Litro') {
                    let vel = Num1 * 1000;                    ;
                    SetRevel(vel);
                }

                else if(Option1 === 'op8' && Option2 === 'ep10' && props.op8 === 'Metro cúbico' && props.ep10 === 'Mililitro') {
                    let vel = Num1 * 1e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep1' && props.op9 === 'Litro' && props.ep1 === 'Galão americano') {
                    let vel = Num1 / 3.785;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep2' && props.op9 === 'Litro' && props.ep2 === 'Quarto líquido americano') {
                    let vel = Num1 * 1.057;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep3' && props.op9 === 'Litro' && props.ep3 === 'Pinta americana') {
                    let vel = Num1 * 2.113;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep4' && props.op9 === 'Litro' && props.ep4 === 'Copo') {
                    let vel = Num1 * 4.167;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep5' && props.op9 === 'Litro' && props.ep5 === 'Onça líquida americana') {
                    let vel = Num1 * 33.814;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep6' && props.op9 === 'Litro' && props.ep6 === 'Colher de sopa americana') {
                    let vel = Num1 * 67.628;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep7' && props.op9 === 'Litro' && props.ep7 === 'Colher de chá americana') {
                    let vel = Num1 * 203;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep8' && props.op9 === 'Litro' && props.ep8 === 'Metro cúbico') {
                    let vel = Num1 / 1000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op9' && Option2 === 'ep10' && props.op9 === 'Litro' && props.ep10 === 'Mililitro') {
                    let vel = Num1 * 1000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep1' && props.op10 === 'Mililitro' && props.ep1 === 'Galão americano') {
                    let vel = Num1 / 3785;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep2' && props.op10 === 'Mililitro' && props.ep2 === 'Quarto líquido americano') {
                    let vel = Num1 / 946;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep3' && props.op10 === 'Mililitro' && props.ep3 === 'Pinta americana') {
                    let vel = Num1 / 473;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep4' && props.op10 === 'Mililitro' && props.ep4 === 'Copo') {
                    let vel = Num1 / 240;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep5' && props.op10 === 'Mililitro' && props.ep5 === 'Onça líquida americana') {
                    let vel = Num1 / 29.574;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep6' && props.op10 === 'Mililitro' && props.ep6 === 'Colher de sopa americana') {
                    let vel = Num1 / 14.787;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep7' && props.op10 === 'Mililitro' && props.ep7 === 'Colher de chá americana') {
                    let vel = Num1 / 4.929;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep8' && props.op10 === 'Mililitro' && props.ep8 === 'Metro cúbico') {
                    let vel = Num1 /  1e+6;
                    SetRevel(vel);
                }

                else if(Option1 === 'op10' && Option2 === 'ep9' && props.op10 === 'Mililitro' && props.ep9 === 'Litro') {
                    let vel = Num1 / 1000;
                    SetRevel(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep2' && props.op1 === 'Quilômetro' && props.ep2 === 'Metro') {
                    let vel = Num1 *  1000;
                    SetRevel(vel);
                    console.log(vel);
                }

                else if(Option1 === 'op1' && Option2 === 'ep3' && props.op1 === 'Quilômetro' && props.ep3 === 'Centímetro') {
                    let vel = Num1 *100000;
                    SetRevel(vel);

                }

                else if(Option1 === 'op1' && Option2 === 'ep4' && props.op1 === 'Quilômetro' && props.ep4 === 'Milímetro') {
                    let vel = Num1 * 1e+6;
                    SetRevel(vel);

                }


                else if(Option1 === 'op1' && Option2 === 'ep5' && props.op1 === 'Quilômetro' && props.ep5 === 'Micrômetro') {
                    let vel = Num1 *1e+9;
                    SetRevel(vel);

                }


                else if(Option1 === 'op1' && Option2 === 'ep6' && props.op1 === 'Quilômetro' && props.ep6 === 'Nanômetro') {
                    let vel = Num1 * 1e+12;
                    SetRevel(vel);

                }


                else if(Option1 === 'op1' && Option2 === 'ep7' && props.op1 === 'Quilômetro' && props.ep7 === 'Milha') {
                    let vel = Num1 / 1.609;
                    SetRevel(vel);

                }


                else if(Option1 === 'op1' && Option2 === 'ep8' && props.op1 === 'Quilômetro' && props.ep8 === 'Jarda') {
                    let vel = Num1 * 1094;
                    SetRevel(vel);

                }


                else if(Option1 === 'op1' && Option2 === 'ep9' && props.op1 === 'Quilômetro' && props.ep9 === 'Pé') {
                    let vel = Num1 * 3281;
                    SetRevel(vel);

                }


                else if(Option1 === 'op1' && Option2 === 'ep10' && props.op1 === 'Quilômetro' && props.ep10 === 'Polegada') {
                    let vel = Num1 * 39370;
                    SetRevel(vel);

                }

                else if(Option1 === 'op2' && Option2 === 'ep1' && props.op2 === 'Metro' && props.ep1 === 'Quilômetro') {
                    let vel = Num1 / 1000;
                    SetRevel(vel);

                }

                else if(Option1 === 'op2' && Option2 === 'ep3' && props.op2 === 'Metro' && props.ep3 === 'Centímetro') {
                    let vel = Num1 * 100;
                    SetRevel(vel);

                }

                else if(Option1 === 'op2' && Option2 === 'ep4' && props.op2 === 'Metro' && props.ep4 === 'Milímetro') {
                    let vel = Num1 * 1000;
                    SetRevel(vel);

                }

                else if(Option1 === 'op2' && Option2 === 'ep5' && props.op2 === 'Metro' && props.ep5 === 'Micrômetro') {
                    let vel = Num1 * 1e+6;
                    SetRevel(vel);

                }

                else if(Option1 === 'op2' && Option2 === 'ep6' && props.op2 === 'Metro' && props.ep6 === 'Nanômetro') {
                    let vel = Num1 * 1e+9;
                    SetRevel(vel);

                }

                else if(Option1 === 'op2' && Option2 === 'ep7' && props.op2 === 'Metro' && props.ep7 === 'Milha') {
                    let vel = Num1 / 1609;
                    SetRevel(vel);

                }

                else if(Option1 === 'op2' && Option2 === 'ep8' && props.op2 === 'Metro' && props.ep8 === 'Jarda') {
                    let vel = Num1 * 1.094;
                    SetRevel(vel);

                }

                else if(Option1 === 'op2' && Option2 === 'ep9' && props.op2 === 'Metro' && props.ep9 === 'Pé') {
                    let vel = Num1 * 3.281;
                    SetRevel(vel);

                }

                else if(Option1 === 'op2' && Option2 === 'ep10' && props.op2 === 'Metro' && props.ep10 === 'Polegada') {
                    let vel = Num1 * 39.37;
                    SetRevel(vel);

                }

                else if(Option1 === 'op3' && Option2 === 'ep1' && props.op3 === 'Centímetro' && props.ep1 === 'Quilômetro') {
                    let vel = Num1 / 100000;
                    SetRevel(vel);

                }

                else if(Option1 === 'op3' && Option2 === 'ep2' && props.op3 === 'Centímetro' && props.ep2 === 'Metro') {
                    let vel = Num1 / 100;
                    SetRevel(vel);

                }

                else if(Option1 === 'op3' && Option2 === 'ep4' && props.op3 === 'Centímetro' && props.ep4 === 'Milímetro') {
                    let vel = Num1 * 10;
                    SetRevel(vel);

                }

                else if(Option1 === 'op3' && Option2 === 'ep5' && props.op3 === 'Centímetro' && props.ep5 === 'Micrômetro') {
                    let vel = Num1 * 10000;
                    SetRevel(vel);

                }

                else if(Option1 === 'op3' && Option2 === 'ep6' && props.op3 === 'Centímetro' && props.ep6 === 'Nanômetro') {
                    let vel = Num1 * 1e+7;
                    SetRevel(vel);

                }

                else if(Option1 === 'op3' && Option2 === 'ep7' && props.op3 === 'Centímetro' && props.ep7 === 'Milha') {
                    let vel = Num1 / 160934;
                    SetRevel(vel);

                }

                else if(Option1 === 'op3' && Option2 === 'ep8' && props.op3 === 'Centímetro' && props.ep8 === 'Jarda') {
                    let vel = Num1 / 91.44;
                    SetRevel(vel);

                }

                else if(Option1 === 'op3' && Option2 === 'ep9' && props.op3 === 'Centímetro' && props.ep9 === 'Pé') {
                    let vel = Num1 / 30.48;
                    SetRevel(vel);

                }

                else if(Option1 === 'op3' && Option2 === 'ep10' && props.op3 === 'Centímetro' && props.ep10 === 'Polegada') {
                    let vel = Num1 / 2.54;
                    SetRevel(vel);

                }

                else if(Option1 === 'op4' && Option2 === 'ep1' && props.op4 === 'Milímetro' && props.ep1 === 'Quilômetro') {
                    let vel = Num1 / 1e+6;
                    SetRevel(vel);

                }

                else if(Option1 === 'op4' && Option2 === 'ep2' && props.op4 === 'Milímetro' && props.ep2 === 'Metro') {
                    let vel = Num1 / 1000;
                    SetRevel(vel);

                }

                else if(Option1 === 'op4' && Option2 === 'ep3' && props.op4 === 'Milímetro' && props.ep3 === 'Centímetro') {
                    let vel = Num1 / 10;
                    SetRevel(vel);

                }

                else if(Option1 === 'op4' && Option2 === 'ep5' && props.op4 === 'Milímetro' && props.ep5 === 'Micrômetro') {
                    let vel = Num1 * 1000;
                    SetRevel(vel);

                }

                else if(Option1 === 'op4' && Option2 === 'ep6' && props.op4 === 'Milímetro' && props.ep6 === 'Nanômetro') {
                    let vel = Num1 * 1e+6;
                    SetRevel(vel);

                }

                else if(Option1 === 'op4' && Option2 === 'ep7' && props.op4 === 'Milímetro' && props.ep7 === 'Milha') {
                    let vel = Num1 / 1.609e+6;
                    SetRevel(vel);

                }

                else if(Option1 === 'op4' && Option2 === 'ep8' && props.op4 === 'Milímetro' && props.ep8 === 'Jarda') {
                    let vel = Num1 / 914;
                    SetRevel(vel);

                }

                else if(Option1 === 'op4' && Option2 === 'ep9' && props.op4 === 'Milímetro' && props.ep9 === 'Pé') {
                    let vel = Num1 / 305;
                    SetRevel(vel);

                }

                else if(Option1 === 'op4' && Option2 === 'ep10' && props.op4 === 'Milímetro' && props.ep10 === 'Polegada') {
                    let vel = Num1 / 25.4;
                    SetRevel(vel);

                }

                else if(Option1 === 'op5' && Option2 === 'ep1' && props.op5 === 'Micrômetro' && props.ep1 === 'Quilômetro') {
                    let vel = Num1 / 1e+9
                    ;
                    SetRevel(vel);

                }

                else if(Option1 === 'op5' && Option2 === 'ep2' && props.op5 === 'Micrômetro' && props.ep2 === 'Metro') {
                    let vel = Num1 / 1e+6;
                    SetRevel(vel);

                }

                else if(Option1 === 'op5' && Option2 === 'ep3' && props.op5 === 'Micrômetro' && props.ep3 === 'Centímetro') {
                    let vel = Num1 / 10000;
                    SetRevel(vel);

                }

                else if(Option1 === 'op5' && Option2 === 'ep4' && props.op5 === 'Micrômetro' && props.ep4 === 'Milímetro') {
                    let vel = Num1 / 1000
                    ;
                    SetRevel(vel);

                }

                else if(Option1 === 'op5' && Option2 === 'ep6' && props.op5 === 'Micrômetro' && props.ep6 === 'Nanômetro') {
                    let vel = Num1 * 1000;
                    SetRevel(vel);

                }

                else if(Option1 === 'op5' && Option2 === 'ep7' && props.op5 === 'Micrômetro' && props.ep7 === 'Milha') {
                    let vel = Num1 / 1.609e+9;
                    SetRevel(vel);

                }

                else if(Option1 === 'op5' && Option2 === 'ep8' && props.op5 === 'Micrômetro' && props.ep8 === 'Jarda') {
                    let vel = Num1 / 914400;
                    SetRevel(vel);

                }

                else if(Option1 === 'op5' && Option2 === 'ep9' && props.op5 === 'Micrômetro' && props.ep9 === 'Pé') {
                    let vel = Num1 / 304800;
                    SetRevel(vel);

                }

                else if(Option1 === 'op5' && Option2 === 'ep10' && props.op5 === 'Micrômetro' && props.ep10 === 'Polegada') {
                    let vel = Num1 / 25400;
                    SetRevel(vel);

                }

                else if(Option1 === 'op6' && Option2 === 'ep1' && props.op6 === 'Nanômetro' && props.ep1 === 'Quilômetro') {
                    let vel = Num1 / 1e+12;
                    SetRevel(vel);

                }

                else if(Option1 === 'op6' && Option2 === 'ep2' && props.op6 === 'Nanômetro' && props.ep2 === 'Metro') {
                    let vel = Num1 / 1e+9;
                    SetRevel(vel);

                }
                
                else if(Option1 === 'op6' && Option2 === 'ep3' && props.op6 === 'Nanômetro' && props.ep3 === 'Centímetro') {
                    let vel = Num1 / 1e+7;
                    SetRevel(vel);

                }

                else if(Option1 === 'op6' && Option2 === 'ep4' && props.op6 === 'Nanômetro' && props.ep4 === 'Milímetro') {
                    let vel = Num1 / 1e+6;
                    SetRevel(vel);

                }

                else if(Option1 === 'op6' && Option2 === 'ep5' && props.op6 === 'Nanômetro' && props.ep5 === 'Micrômetro') {
                    let vel = Num1 / 1000;
                    SetRevel(vel);

                }

                else if(Option1 === 'op6' && Option2 === 'ep7' && props.op6 === 'Nanômetro' && props.ep7 === 'Milha') {
                    let vel = Num1 / 1.609e+12;
                    SetRevel(vel);

                }

                else if(Option1 === 'op6' && Option2 === 'ep8' && props.op6 === 'Nanômetro' && props.ep8 === 'Jarda') {
                    let vel = Num1 / 9.144e+8;
                    SetRevel(vel);

                }

                else if(Option1 === 'op6' && Option2 === 'ep9' && props.op6 === 'Nanômetro' && props.ep9 === 'Pé') {
                    let vel = Num1 / 3.048e+8;
                    SetRevel(vel);

                }

                else if(Option1 === 'op6' && Option2 === 'ep10' && props.op6 === 'Nanômetro' && props.ep10 === 'Polegada') {
                    let vel = Num1 / 2.54e+7;
                    SetRevel(vel);

                }

                else if(Option1 === 'op7' && Option2 === 'ep1' && props.op7 === 'Milha' && props.ep1 === 'Quilômetro') {
                    let vel = Num1 * 1.609;
                    SetRevel(vel);

                }

                else if(Option1 === 'op7' && Option2 === 'ep2' && props.op7 === 'Milha' && props.ep2 === 'Metro') {
                    let vel = Num1 * 1609;
                    SetRevel(vel);

                }

                else if(Option1 === 'op7' && Option2 === 'ep3' && props.op7 === 'Milha' && props.ep3 === 'Centímetro') {
                    let vel = Num1 * 160934;
                    SetRevel(vel);

                }

                else if(Option1 === 'op7' && Option2 === 'ep4' && props.op7 === 'Milha' && props.ep4 === 'Milímetro') {
                    let vel = Num1 *  1.609e+6;
                    SetRevel(vel);

                }

                else if(Option1 === 'op7' && Option2 === 'ep5' && props.op7 === 'Milha' && props.ep5 === 'Micrômetro') {
                    let vel = Num1 * 1.609e+9;
                    SetRevel(vel);

                }

                else if(Option1 === 'op7' && Option2 === 'ep6' && props.op7 === 'Milha' && props.ep6 === 'Nanômetro') {
                    let vel = Num1 * 1.609e+12;
                    SetRevel(vel);

                }

                else if(Option1 === 'op7' && Option2 === 'ep8' && props.op7 === 'Milha' && props.ep8 === 'Jarda') {
                    let vel = Num1 * 1760;
                    SetRevel(vel);

                }

                else if(Option1 === 'op7' && Option2 === 'ep9' && props.op7 === 'Milha' && props.ep9 === 'Pé') {
                    let vel = Num1 * 5280;
                    SetRevel(vel);

                }

                else if(Option1 === 'op7' && Option2 === 'ep10' && props.op7 === 'Milha' && props.ep10 === 'Polegada') {
                    let vel = Num1 * 63360;
                    SetRevel(vel);

                }

                else if(Option1 === 'op8' && Option2 === 'ep1' && props.op8 === 'Jarda' && props.ep1 === 'Quilômetro') {
                    let vel = Num1 / 1094;
                    SetRevel(vel);

                }

                else if(Option1 === 'op8' && Option2 === 'ep2' && props.op8 === 'Jarda' && props.ep2 === 'Metro') {
                    let vel = Num1 / 1.094;
                    SetRevel(vel);

                }

                else if(Option1 === 'op8' && Option2 === 'ep3' && props.op8 === 'Jarda' && props.ep3 === 'Centímetro') {
                    let vel = Num1 * 91.44;
                    SetRevel(vel);

                }

                else if(Option1 === 'op8' && Option2 === 'ep4' && props.op8 === 'Jarda' && props.ep4 === 'Milímetro') {
                    let vel = Num1 * 914;
                    SetRevel(vel);

                }

                else if(Option1 === 'op8' && Option2 === 'ep5' && props.op8 === 'Jarda' && props.ep5 === 'Micrômetro') {
                    let vel = Num1 * 914400;
                    SetRevel(vel);

                }

                else if(Option1 === 'op8' && Option2 === 'ep6' && props.op8 === 'Jarda' && props.ep6 === 'Nanômetro') {
                    let vel = Num1 * 9.144e+8;
                    SetRevel(vel);

                }

                else if(Option1 === 'op8' && Option2 === 'ep7' && props.op8 === 'Jarda' && props.ep7 === 'Milha') {
                    let vel = Num1 / 1760;
                    SetRevel(vel);

                }

                else if(Option1 === 'op8' && Option2 === 'ep9' && props.op8 === 'Jarda' && props.ep9 === 'Pé') {
                    let vel = Num1 * 3;
                    SetRevel(vel);

                }

                else if(Option1 === 'op8' && Option2 === 'ep10' && props.op8 === 'Jarda' && props.ep10 === 'Polegada') {
                    let vel = Num1 * 36;
                    SetRevel(vel);

                }

                else if(Option1 === 'op9' && Option2 === 'ep1' && props.op9 === 'Pé' && props.ep1 === 'Quilômetro') {
                    let vel = Num1 / 3281;
                    SetRevel(vel);

                }

                else if(Option1 === 'op9' && Option2 === 'ep2' && props.op9 === 'Pé' && props.ep2 === 'Metro') {
                    let vel = Num1 / 3.281;
                    SetRevel(vel);

                }

                else if(Option1 === 'op9' && Option2 === 'ep3' && props.op9 === 'Pé' && props.ep3 === 'Centímetro') {
                    let vel = Num1 * 30.48;
                    SetRevel(vel);

                }

                else if(Option1 === 'op9' && Option2 === 'ep4' && props.op9 === 'Pé' && props.ep4 === 'Milímetro') {
                    let vel = Num1 * 305;
                    SetRevel(vel);

                }

                else if(Option1 === 'op9' && Option2 === 'ep5' && props.op9 === 'Pé' && props.ep5 === 'Micrômetro') {
                    let vel = Num1 * 304800;
                    SetRevel(vel);

                }

                else if(Option1 === 'op9' && Option2 === 'ep6' && props.op9 === 'Pé' && props.ep6 === 'Nanômetro') {
                    let vel = Num1 * 3.048e+8;
                    SetRevel(vel);

                }

                else if(Option1 === 'op9' && Option2 === 'ep7' && props.op9 === 'Pé' && props.ep7 === 'Milha') {
                    let vel = Num1 / 5280;
                    SetRevel(vel);

                }

                else if(Option1 === 'op9' && Option2 === 'ep8' && props.op9 === 'Pé' && props.ep18 === 'Jarda') {
                    let vel = Num1 / 3;
                    SetRevel(vel);

                }

                else if(Option1 === 'op9' && Option2 === 'ep10' && props.op9 === 'Pé' && props.ep10 === 'Polegada') {
                    let vel = Num1 * 12;
                    SetRevel(vel);

                }

                else if(Option1 === 'op10' && Option2 === 'ep1' && props.op10 === 'Polegada' && props.ep1 === 'Quilômetro') {
                    let vel = Num1 / 39370;
                    SetRevel(vel);

                }

                else if(Option1 === 'op10' && Option2 === 'ep2' && props.op10 === 'Polegada' && props.ep2 === 'Metro') {
                    let vel = Num1 / 39.37;
                    SetRevel(vel);

                }

                else if(Option1 === 'op10' && Option2 === 'ep3' && props.op10 === 'Polegada' && props.ep3 === 'Centímetro') {
                    let vel = Num1 * 2.54;
                    SetRevel(vel);

                }

                else if(Option1 === 'op10' && Option2 === 'ep4' && props.op10 === 'Polegada' && props.ep4 === 'Milímetro') {
                    let vel = Num1 * 25.4;
                    SetRevel(vel);

                }

                else if(Option1 === 'op10' && Option2 === 'ep5' && props.op10 === 'Polegada' && props.ep5 === 'Micrômetro') {
                    let vel = Num1 * 25400;
                    SetRevel(vel);

                }

                else if(Option1 === 'op10' && Option2 === 'ep6' && props.op10 === 'Polegada' && props.ep6 === 'Nanômetro') {
                    let vel = Num1 * 2.54e+7;
                    SetRevel(vel);

                }

                else if(Option1 === 'op10' && Option2 === 'ep7' && props.op10 === 'Polegada' && props.ep7 === 'Milha') {
                    let vel = Num1 / 63360;
                    SetRevel(vel);

                }

                else if(Option1 === 'op10' && Option2 === 'ep8' && props.op10 === 'Polegada' && props.ep8 === 'Jarda') {
                    let vel = Num1 / 36 ;
                    SetRevel(vel);

                }

                else if(Option1 === 'op10' && Option2 === 'ep9' && props.op10 === 'Polegada' && props.ep9 === 'Pé') {
                    let vel = Num1 / 12;
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