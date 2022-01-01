import styled from "styled-components"

const ContainerBox = styled.div `
margin-left: 5em;
.oper-border {
    border: 1px solid white;
    background-color: white;
    border-radius: 15px;
    padding: 0em 2em 4em 2em;
}

.oper-input1 {
    display: flex;
    flex-direction: row;
    margin-top: 3em;
    align-items: center;
    input {
        width: 10em;
        height: 2.5em;
        margin:  0em 1em;
    }

    .simbolo {
        font-size: 24px;
    }
}
`

export default function BoxOperations() {
    return (
        <ContainerBox>
            <div className="oper-title">
                Somar
            </div>
            <div className="oper-border">
                <div className="oper-input1">
                    <input />
                    <div className="simbolo"> + </div>
                    <input />
                    <div className="simbolo"> = </div>
                    <input />
                </div>
                <div className="oper-input1">
                    <input />
                    <div className="simbolo"> + </div>
                    <input />
                    <div className="simbolo"> + </div>
                    <input />
                    <div className="simbolo"> = </div>
                    <input />
                </div>
                <div className="oper-input1">
                <input />
                    <div className="simbolo"> + </div>
                    <input />
                    <div className="simbolo"> + </div>
                    <input />
                    <div className="simbolo"> + </div>
                    <input />
                    
                    <div className="simbolo"> = </div>
                    <input />
                </div>
            </div>
        </ContainerBox>
    )
}