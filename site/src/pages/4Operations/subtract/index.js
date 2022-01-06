import BoxOperations from "../../../components/box/box-operation/styled"
import Header from "../../../components/header/styled"
import Menu from "../../../components/menu/styled"
import { ContainerSubtract, Container } from "./styled"

export default function OperationSubtract(props) {
return (
    <Container>    
        <ContainerSubtract>
        <Header/>
            <div className="xx">
                <div className="menus">
                    <Menu />
                </div>
                <div className="content">
                    <div className="add">
                        <BoxOperations titulo="4 Operações (Subtração)" sinal1="-" sinal2="=" sinal3="-" sinal4="-" sinal5="=" sinal6="-"  sinal7="-" sinal8="-" sinal9="=" sinal10=""/>
                    </div>
                </div>
            </div>

        </ContainerSubtract>
    </Container>

)
}