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
flex-direction: column;
background-image: url('./assets/images/183621-mathematics.jpg');
background-repeat: no-repeat;
background-size: cover;
height: 100%;
width: 100%;
`

export {Container, GeometricCircles}