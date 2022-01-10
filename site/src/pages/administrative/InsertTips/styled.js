import styled from "styled-components"

const ContainerTips = styled.div `
display: flex;
flex-direction: column;
background-image: url('./assets/images/172.jpg');
background-repeat: no-repeat;
background-size: cover;
height: 100%;
width: 100%;
.content {
    border: none;
    background-color: white;
    margin: 7em 0em;
    padding: 5em;
    align-self: center;
    width: 70%;

    border-radius: 15px;
}

.all-image {
    padding: 0em 4em;
}

.cover-name, .cover-select, .box-image {
    margin-bottom:1em;
}


input {
    width: 40em;
    height: 2em;
    margin-left: 1em;
}

.vil {
    display: none;
    padding-left: 9em;
    text-align: left !important;
    font-size: 14px;
    color: red; 
}

.vil1 {
    display: none;
    padding-left: 20em;
    text-align: left !important;
    font-size: 14px;
    color: red; 
}


select {
    width: 16.4em;
    height: 2.5em;
    text-align: center;
}


.box-description {
    display: flex;
    flex-direction: column;
    padding: 1em 4em;
    text-align: left !important;
}

textarea {
    resize: none;
    width: 91%;
    height: 30em;
    margin-top: .7em;
}

.but {
    border: none;
    background-color: green;
    padding: 0.4em;
    width: 5em;
    position: fixed;
    top: 37em;
    right: 14.5em;

    text-align: center;
    border-radius: 20px;


    :hover{
        cursor:pointer;
        color: white;
        transform: scale(1.1);
        transition-duration: 500ms;
        background-color: #31A61E;
        border:none;
    }
}


.but1 {
    text-align: center;
    border: none;
    background-color: red;
    padding: .4em;
    width: 5em;
    position: fixed;
    top: 37em;
    right: 8.1em;

    border-radius: 20px;


    :hover{
        cursor:pointer;
        color: white;
        transform: scale(1.1);
        transition-duration: 500ms;

    }
}
`

export {ContainerTips}

