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
}
.name {
    margin-right: 1em;
}

input {
    width: 14em;
    height: 1.8em;
    border-radius: 3px;
    border: 1px solid black;

}

.simbolo {
    font-size: 22px;
}
`

export default function BoxGeometric(props) {
    return (
        <ContainerGeometric>
            <div className="title">{props.title}</div>
                <div className="inputs">
                <div className="name"> {props.name1} </div>
                    <input />
                </div>
                
                <div className="simbolo">{props.sim1}</div>
                
                <div className="inputs">
                    <div className="name">{props.name2}</div>
                    <input />
                </div>
                
                <div className="simbolo">{props.sim2}</div>
                
                <div className="inputs">
                    <div className="name">{props.name3}</div>
                    <input />
                </div>
                
                <div className="simbolo">{props.sim3}</div>
                
                <div className="inputs">
                    <div className="name">{props.name4}</div>
                    {props.input1}
                </div>
                
                <div className="simbolo">{props.sim4}</div>
                
                <div className="inputs">
                    <div className="name">{props.name5}</div>
                    {props.input2}
                </div>
            
        </ContainerGeometric>
    )
}