import { Link } from "react-router-dom"
import styled from "styled-components"

const ContainerHeader = styled.div `
display: flex;
flex-direction: row;
background-color: white;
    opacity: 90%;
    height: 6em;
   max-width: 100vw;
.soon img {
    max-width: 78%;
}
.soon {

}
.box {
    display: flex;
    justify-content: space-between;
    padding: 2em 0em 0em 0em;
    > div {
        margin-right: 4em;
        font-size: 22px;

    }
    div:hover {
        color: red;
        cursor: pointer;
    }
}

`

export default function Header() {
    return (
        <ContainerHeader>
           <div className="soon"> <Link to="/">  <img src="./assets/images/logo-removebg-preview.png" alt=""  /> </Link></div> 
            
            <div className="box">
                <div className="tips">Dicas</div>
                <div className="calculations"> Calculos </div>
                <div className="conversion"> Conversão </div>
                <div className="conversion"> Informações </div>
            </div>
            
        </ContainerHeader>
    )
}