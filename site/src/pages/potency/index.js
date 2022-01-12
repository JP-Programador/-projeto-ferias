
import Rest from "../../components/box/box-rest/styled"
import Header from "../../components/header/styled"
import Menu from "../../components/menu/styled"
import Title from "../../components/title/styled"

import { ContainerPotency, Container } from "./styled"

export default function OperationPotency() {
return (
    <Container>    
         <Header/>
        <ContainerPotency>
       
            <div className="xx">
                
                <div className="menus">
                    <Menu />
                </div>
                <div className="content">
                    
                    <div className="add"> 
                    <Title />
                       <Rest name1="A =" name2="B =" name3="A = " /> 
                       <h5>b </h5>
                    </div>
                </div>
            </div>

        </ContainerPotency>
    </Container>

)
}