import styled from "styled-components";

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
   
    
    
    return(
        <ContainerBoxConversions>
            <div className="title">{props.titulo}</div>
            <div className="sub-title"> Quero Converter </div>
            <div className="inputs">
                <input />
            </div>
            <div className="inputs">
                <select>
                    <option>{props.op1}</option>
                    <option>{props.op2}</option>
                    <option>{props.op3}</option>
                    <option>{props.op4}</option>
                    <option>{props.op5}</option>
                    <option>{props.op6}</option>
                    <option>{props.op7}</option>
                    <option>{props.op8}</option>
                    <option>{props.op9}</option>
                    <option className="x">{props.op10}</option>
                    
                </select>
            </div>
            <div className="sub-title">Para</div>
            <div className="inputs">
                <select>
                <option>{props.ep1}</option>
                    <option>{props.ep2}</option>
                    <option>{props.ep3}</option>
                    <option>{props.ep4}</option>
                    <option>{props.ep5}</option>
                    <option>{props.ep6}</option>
                    <option>{props.ep7}</option>
                    <option>{props.ep8}</option>
                    <option>{props.ep9}</option>
                    <option >{props.ep10}</option>
                </select>
            </div>
            <div className="inputs"><input /></div>
        </ContainerBoxConversions>
    )
}

