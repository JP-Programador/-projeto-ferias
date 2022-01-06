
import Rest from "../../components/box/box-rest/styled"
import Header from "../../components/header/styled"
import Menu from "../../components/menu/styled"
import { ContainerPotency, Container } from "./styled"

export default function OperationPotency() {
return (
    <Container>    
        <ContainerPotency>
        <Header/>
            <div className="xx">
                <div className="menus">
                    <Menu />
                </div>
                <div className="content">
                    <div className="add">
                       <Rest name1="A" name2="B" name3="A^B"/> 
                    </div>
                </div>
            </div>

        </ContainerPotency>
    </Container>

)
}