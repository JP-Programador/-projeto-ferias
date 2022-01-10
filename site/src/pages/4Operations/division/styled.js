import styled from "styled-components"


const ContainerDivision = styled.div `
display: flex;
flex-direction: column;

.xx {
    display: flex;
    flex-direction: row;
}

`

const Container = styled.div `
display: flex;
flex-direction: row;
background-image: url('./assets/images/172.jpg');
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
width: 100%;
`

export {Container, ContainerDivision}