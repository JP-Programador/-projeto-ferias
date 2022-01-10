import Header from "../../components/header/styled"
import Menu from "../../components/menu/styled"
import { ContainerHome, Container } from "./styled"

import Box from "../../components/box/box-Conversions/styled"

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
                    <Box 
                        titulo="Moeda"
                        op1="Dolár Americano"  ep1="Dolár"
                        op2="Real Brasileiro"  ep2="Real Brasileiro"
                        op3="Quiate" ep3="Quiate"
                        op4="Euro" ep4="Euro"
                        op5="Guarani Paraguaio" ep5="Guarani Paraguaio"
                        op6="Libra Sudanesa" ep6="Libra Sudanesa"
                        op7="Libra Egipícia" ep="Libra Egipícia"

                    />
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