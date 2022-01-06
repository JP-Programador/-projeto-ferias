
import Rest from "../../components/box/box-rest/styled"
import Header from "../../components/header/styled"
import Menu from "../../components/menu/styled"
import { ContainerPercentage, Container } from "./styled"

export default function OperationPercentage() {
return (
    <Container>    
        <ContainerPercentage>
        <Header/>
            <div className="xx">
                <div className="menus">
                    <Menu />
                </div>
                <div className="content">
                    <div className="add">
                       <Rest name1="Quanto é" name2="de" name3="Resultado" por="%"/> 
                    </div>
                </div>
            </div>

        </ContainerPercentage>
    </Container>

)
}