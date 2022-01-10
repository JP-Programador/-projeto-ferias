import styled from "styled-components";

const ContainerHome = styled.div `
display: flex;
flex-direction: column;

.filho {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    padding-left: 7em;
    min-height: 30em;
}
.xx {
    display: flex;
    flex-direction: row;
}
`

const Container = styled.div `
display: flex;
flex-direction: column;
background-image: url('./assets/images/183621-mathematics.jpg');
background-repeat: no-repeat;
background-size: cover;
height: 100%;
width: 100%;
`
export {ContainerHome, Container}