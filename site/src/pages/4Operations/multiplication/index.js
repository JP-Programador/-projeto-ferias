import BoxOperations from "../../../components/box/box-operation/styled"
import Header from "../../../components/header/styled"
import Menu from "../../../components/menu/styled"
import { ContainerMultiplication, Container } from "./styled"

export default function OperationMultiplication(props) {
return (
    <Container>    
        <ContainerMultiplication>
        <Header/>
            <div className="xx">
                <div className="menus">
                    <Menu />
                </div>
                <div className="content">
                    <div className="add">
                        <BoxOperations titulo="4 Operações (Multiplicação)" sinal1="X" sinal2="=" sinal3="X" sinal4="X" sinal5="=" sinal6="X"  sinal7="X" sinal8="X" sinal9="=" sinal10=""/>
                    </div>
                </div>
            </div>

            </ContainerMultiplication>
    </Container>

)
}