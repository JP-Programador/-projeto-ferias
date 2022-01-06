import styled from "styled-components"


const GeometricCircles = styled.div `
display: flex;
flex-direction: column;

.xx {
    display: flex;
    flex-direction: row;
}


.add {
    display: flex;
    justify-content: space-between;
    padding: 5em 2em;
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

export {Container, GeometricCircles}