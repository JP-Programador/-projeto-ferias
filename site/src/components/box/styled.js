import styled from "styled-components"

const ContainerBox = styled.div `
padding: 25px;
.box-everything {
    border: none;
    width: 17em;
    height: 11.5em;
    text-align: center;
    border-radius: 10px;
    background-color: white;

    &:hover{
    cursor: pointer;
    transform: scale(1.1);
    }
}
img {
    width: 100%;    
    border-radius: 10px;

}

.title {
    font-size: 20px;
}
`

export default function Box() {
    return (
        <ContainerBox>
          <div className="box-everything">
              <div className="img"> <img src="./assets/images/equação de 1 grau logo.jpg" alt="" /></div>
              <div className="title">Equação 1º Grau</div>
          </div>
        </ContainerBox>
    )
}