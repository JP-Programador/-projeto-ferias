import styled from "styled-components"

const ContainerHeader = styled.div `
display: flex;
flex-direction: row;
background-color: white;
    opacity: 90%;
    height: 6em;
   // min-width: 100vw;
.soon img {
    width: 70%;
}
.soon {

}
.box {
    display: flex;
    justify-content: space-between;
    padding: 2em 0em 0em 0em;
    > div {
        margin-right: 5em;
        font-size: 22px;;
    }
}

`

export default function Header() {
    return (
        <ContainerHeader>
            <div className="soon"> <img src="./assets/images/logo-removebg-preview.png" alt=""  /></div>
            
            <div className="box">
                <div className="tips">Dicas</div>
                <div className="calculations"> Calculos </div>
                <div className="conversion"> Conversão </div>
            </div>
            
        </ContainerHeader>
    )
}