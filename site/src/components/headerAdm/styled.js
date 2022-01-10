import styled from "styled-components"

const ContainerHeader = styled.div `
display: flex;
flex-direction: row;
background-color: white;
    opacity: 90%;
    height: 6em;
   max-width: 100vw;
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
        font-size: 22px;

    }
    div:hover {
        color: red;
        cursor: pointer;
    }
}

`

export default function HeaderAdm() {
    return (
        <ContainerHeader>
            <div className="soon"> <img src="./assets/images/logo-removebg-preview.png" alt=""  /></div>
            
            <div className="box">
                Sistema Administrativo
            </div>
            
        </ContainerHeader>
    )
}