import Box from "../../components/box/styled"
import Header from "../../components/header/styled"
import Menu from "../../components/menu/styled"
import { ContainerHome, Container } from "./styled"

export default function Home() {
    return (
        <Container>
         <Header/>
        <ContainerHome>
            
            <div className="xx">
                <div className="menus">
                    <Menu />
                </div>
                <div className="filho"> 
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </div> 
            </div>
        </ContainerHome>
        </Container>
    )
}