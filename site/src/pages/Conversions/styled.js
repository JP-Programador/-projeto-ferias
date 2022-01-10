import styled from "styled-components"


const ContainerConversions = styled.div `
display: flex;
flex-direction: column;

.xx {
    display: flex;
    flex-direction: row;
}

.content {  
    display: flex;
    flex-direction: row;
}

`

const Container = styled.div `
display: flex;
flex-direction: column;
background-image: url('./assets/images/fundo2.jpg');
background-repeat: no-repeat;
background-size: cover;
height: 100%;
width: 100%;
`

export {Container, ContainerConversions}