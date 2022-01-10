import styled from "styled-components"


const ContainerPotency = styled.div `
display: flex;
flex-direction: column;

h5 {
    position: absolute;
    bottom: 19.5em;
    left: 43.3em;
}
.xx {
    display: flex;
    flex-direction: row;

}
.add{
    padding: 5em 0em 0em 15em  ;
}

`

const Container = styled.div `
display: flex;
flex-direction: column;
background-image: url('./assets/images/172.jpg');
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
width: 100%;
`

export {Container, ContainerPotency}