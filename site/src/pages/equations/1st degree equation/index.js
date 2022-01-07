import BoxEquations from "../../../components/box/box-equantions/styled"
import Header from "../../../components/header/styled"
import Menu from "../../../components/menu/styled"
import { ContainerOnedegreeEquation, Container } from "./styled"

export default function OnedegreeEquation(props) {
return (
    <Container>    
        <ContainerOnedegreeEquation>
        <Header/>
            <div className="xx">
                <div className="menus">
                    <Menu />
                </div>
                <div className="content">
                    <div className="add">
                        <BoxEquations/>
                    </div>
                </div>
            </div>

        </ContainerOnedegreeEquation>
    </Container>

)
}