import BoxConversions from "../../components/box/box-conversions/styled";
import Header from "../../components/header/styled";
import Menu from "../../components/menu/styled";
import { Container, ContainerConversions } from "./styled";

export default function Conversions() {

    return (
        <Container> 
        <Header/>   
      <ContainerConversions>
    
          <div className="xx">
              <div className="menus">
                  <Menu />
              </div>
              <div className="content">
                      <BoxConversions />
                      <BoxConversions />
                      <BoxConversions />
                      
              </div>
          </div>

      </ContainerConversions>
  </Container>

    )
}