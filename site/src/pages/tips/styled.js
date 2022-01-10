import styled from "styled-components"


const ContainerTips = styled.div `
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
    border: none;
    border-radius: 10px;
    background-color: white;
    margin: 2em 7em 2em 7em;
    padding: 3em 4em;
    opacity: 98%;
}

.description {
    text-align: justify;
    font-family: Arial, Helvetica, sans-serif;
}

`

const Container = styled.div `
display: flex;
flex-direction: column;
background-image: url('./assets/images/172.jpg');
background-repeat: no-repeat;
background-size: cover;
height: 100%;
width: 100%;
`

export {Container, ContainerTips}