import styled from "styled-components";

const ContainerEquations = styled.div`

`

export default function BoxEquations() {
    return (
        <ContainerEquations>
            <div className="box-inputs">
                <div className="minibox">
                    <div className="name">A = </div>
                    <input />
                </div>
                <div className="minibox">
                    <div className="name">B = </div>
                    <input />
                </div>
                <div className="minibox">
                    <div className="name">C = </div>
                    <input />
                </div>
            </div>
            <div className="box-result">
                <div className="box-x">
                    <div className="name">X</div>
                    <input />
                </div>
                <div className="box-x">
                    <div className="name">X</div>
                    <input />
                </div>
            </div>
        </ContainerEquations>
    )
}