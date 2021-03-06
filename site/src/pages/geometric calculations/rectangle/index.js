
import BoxGeometric from "../../../components/box/box-geometric/styled"
import Header from "../../../components/header/styled"
import Menu from "../../../components/menu/styled"
import { GeometricRectangle, Container } from "./styled"

export default function GeometricRectangles(props) {
return (
    <Container>  
        <Header/>  
        <GeometricRectangle>
        
            <div className="xx">
                <div className="menus">
                    <Menu />
                </div>
                <div className="content">
                    <div className="add">
                        <BoxGeometric title="Calcular Perímetro" name1="B" sim1="+" name2="H" sim2="="  name3="P"  />
                        <BoxGeometric title="Calcular Área" name1="B" sim1="X" name2="H" sim2="="  name3="A"/>

                    </div>
                </div>
            </div>

        </GeometricRectangle>
    </Container>

)
}