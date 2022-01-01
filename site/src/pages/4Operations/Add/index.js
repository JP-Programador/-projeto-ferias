import BoxOperations from "../../../components/box/box-operation/styled"
import Header from "../../../components/header/styled"
import Menu from "../../../components/menu/styled"
import { ContainerAdd, Container } from "./styled"

export default function OperationAdd() {
return (
    <Container>    
        <ContainerAdd>
        <Header/>
            <div className="xx">
                <div className="menus">
                    <Menu />
                </div>
                <div className="content">
                    <div className="add">
                        <BoxOperations />
                    </div>
                </div>
            </div>

        </ContainerAdd>
    </Container>

)
}