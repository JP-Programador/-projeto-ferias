
import BoxGeometric from "../../../components/box/box-geometric/styled"
import Header from "../../../components/header/styled"
import Menu from "../../../components/menu/styled"
import { GeometricCircles, Container } from "./styled"

export default function GeometricCircle(props) {
return (
    <Container>    
        <GeometricCircles>
        <Header/>
            <div className="xx">
                <div className="menus">
                    <Menu />
                </div>
                <div className="content">
                    <div className="add">
                        <BoxGeometric title="Calcular Perímetro" name1="Raio" sim1="X" name2="Pi" sim2="="  />
                        <BoxGeometric title="Calcular Área" name1="Raio" sim1="X" name2="Pi" sim2="="/>

                    </div>
                </div>
            </div>

        </GeometricCircles>
    </Container>

)
}