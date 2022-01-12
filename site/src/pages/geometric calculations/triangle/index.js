
import BoxGeometric from "../../../components/box/box-geometric/styled"
import Header from "../../../components/header/styled"
import Menu from "../../../components/menu/styled"
import { ContainerTriangle, Container } from "./styled"

export default function GeometricTriangle(props) {
return (
    <Container>    
        <Header/>
        <ContainerTriangle>
        
            <div className="xx">
                <div className="menus">
                    <Menu />
                </div>
                <div className="content">
                    <div className="add">
                        <BoxGeometric title="Calcular Perímetro" name1="A" sim1="+" name2="B" sim2="+" name3="C" sim3="=" name4="R :"  />
                        <BoxGeometric title="Calcular Área" name1="B" sim1="x" name2="H" sim2="="  name3="A"/>

                    </div>
                </div>
            </div>

        </ContainerTriangle>
    </Container>

)
}