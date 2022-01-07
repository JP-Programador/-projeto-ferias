import styled from "styled-components"


const ContainerOnedegreeEquation = styled.div `
display: flex;
flex-direction: column;

.xx {
    display: flex;
    flex-direction: row;
}

.add {
    margin: 5em 0em 0em 10em;
}

`

const Container = styled.div `
display: flex;
flex-direction: row;
background-image: url('./assets/images/fundo2.jpg');
background-repeat: no-repeat;
height: 100vh;
width: 100%;
`

export {Container, ContainerOnedegreeEquation}