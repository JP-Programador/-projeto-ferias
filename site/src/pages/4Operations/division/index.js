import BoxOperations from "../../../components/box/box-operation/styled"
import Header from "../../../components/header/styled"
import Menu from "../../../components/menu/styled"
import { ContainerDivision, Container } from "./styled"

export default function OperationDivision(props) {
return (
    <Container>    
        <ContainerDivision>
        <Header/>
            <div className="xx">
                <div className="menus">
                    <Menu />
                </div>
                <div className="content">
                    <div className="add">
                        <BoxOperations titulo="4 Operações (Divisão)" sinal1="/" sinal2="=" sinal3="/" sinal4="/" sinal5="=" sinal6="/"  sinal7="/" sinal8="/" sinal9="=" />
                    </div>
                </div>
            </div>

        </ContainerDivision>
    </Container>

)
}