import styled from "styled-components";

const ContainerBoxConversions = styled.div `
display: flex;
flex-direction: column;
background-color: white;
height: 13em;
width: 12em;
border: 0em;
margin-left: 20em;
padding: .6em 0em 1em 1.5em;



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
export default function BoxConversions(){
    return(
        <ContainerBoxConversions>
            <div className="title">Comprimento</div>
            <div className="sub-title"> Quero Converter </div>
            <div className="inputs">
                <input />
            </div>
            <div className="inputs">
                <select>
                    <option>Dólar</option>
                </select>
            </div>
            <div className="sub-title">Para</div>
            <div className="inputs">
                <select>
                    <option>Real</option>
                </select>
            </div>
            <div className="inputs"><input /></div>
        </ContainerBoxConversions>
    )
}

