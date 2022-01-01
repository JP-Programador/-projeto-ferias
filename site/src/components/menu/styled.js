import styled from "styled-components"

const ContainerMenu = styled.div `

padding: 2em 0em;
background-color: white;
min-height: 31.11em;
width: 15em;
opacity: 100%;
.box-tips, .box-tips1 {
    padding: 1em .5em .0em .5em;
    > .sub-title {
        padding: .7em .28em;
        font-size: 14px;
    }
}
select {
    border-color: white;
    outline: none;
    background: none;
    font-size: 14px;
    

} 

option {
    border-color: none;
}
`

export default function Menu() {
    return (
        <ContainerMenu>
            <div className="box-tips"> 
                <div className="title">Dicas</div>
                <div className="sub-title">1º Ano</div>
                <div className="sub-title">2º Ano</div>
                <div className="sub-title">3º Ano</div>
            </div>
            <div className="box-tips1"> 
                <div className="title">Calculos</div>
                <div className="sub-title">Trigonometria</div>
                <div className="sub-title1">
                    <select name="cars" id="cars">
                    <option value="4-Operações">4 Operações</option>
                    <option value="Somar">Somar</option>
                    <option value="Subtrair">Subtrair</option>
                    <option value="Multiplicar">Multiplicar</option>
                    <option value="Divisão">Divisão</option>
                    </select>
                </div>
                <div className="sub-title">Potenciação e Radiação</div>
                <div className="sub-title"> Equação 1º / 2º Grau</div>
                <div className="sub-title">Conversão de Unidades</div>
                <div className="sub-title">Calculos Geométricos</div>
                <div className="sub-title">Porcentagem</div>
                <div className="sub-title">Teorema de Pítagoras</div>
            </div>
        </ContainerMenu>
    )
}