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
                        op1="Dolár Americano"  ep1="Dolár Americano"
                        op2="Real Brasileiro"  ep2="Real Brasileiro"
                        op3="Quiate" ep3="Quiate"
                        op4="Euro" ep4="Euro"
                        op5="Guarani Paraguaio" ep5="Guarani Paraguaio"
                        op6="Libra Sudanesa" ep6="Libra Sudanesa"
                        op7="Libra Egipícia" ep7="Libra Egipícia"
                        op8="Renminbi (Yuan)" ep8="Renminbi (Yuan)"
                        op9="Iene" ep9="Iene"
                        op10="Libra esterlina" ep10="Libra esterlina"
                        
                    />
                    <Box 
                        titulo="Comprimento"
                        op1="Quilômetro" ep1="Quilômetro"
                        op2="Metro " ep2="Metro"
                        op3="Centìmetro" ep3="Centímetro"
                        op4="Milímetro" ep4="Milímetro"
                        op5="Micrômetro" ep5="Micrômetro"
                        op6="Nanômetro" ep6="Nanômetro"
                        op7="Milha" ep7="Milha"
                        op8="Jarda" ep8="Jarda"
                        op9="Pé" ep9="Pé"
                        op10="Polegada" ep10="Polegada"

                    />
                    <Box
                    titulo="Volume"
                    op1="Galão americano" ep1="Galão americano"
                    op2="Quarto líquido americano" ep2="Quarto líquido americano"
                    op3="Pinta americana" ep3="Pinta america"
                    op4="Copo" ep4="Copo"
                    op5="Onça líquida americana" ep5="Onça líquida americana"
                    op6="Colher de chá americana" ep6="Colher da chá americana"
                    op7="Metro cúbico" ep7="Metro cúbico"
                    op8="Lítro" ep8="Lítro"
                    op9="Mililitro" ep9="Mililitro"
                    op10="Galão imperial" ep10="Galão imperial"/>
                    <Box titulo="Massa"
                    op1="Tonelada" ep1="Tonelada"
                    op2="Quilograma" ep2="Quilograma"
                    op3="Grama" ep3="Grama"
                    op4="Miligrama" ep4="Miligrama"
                    op5="Micrograma" ep5="Micrograma"
                    op6="Tonelada de deslocamento" ep6="Tonelada de deslocamento"
                    op7="Tonelada curta" ep7="Tonelada curta"
                    op8="Stone" ep8="Stone"
                    op9="Libra" ep9="Libra"
                    op10="Onça" ep10="Onça"
                    />
                    <Box titulo="Área" 
                    op1="Quilômetro quadrado" ep1="Quilômetro quadro"
                    op2="Metro quadrado" ep2="Metro quadrado"
                    op3="Milha quadrada" ep3="Milha quadrada"
                    op4="Jarda quadrada" ep4="Jarda quadrada"
                    op5="Pé quadrado" ep5="Pé quadrado"
                    op6="Polegada quadrada" ep6="Polegada quadrada"
                    op7="Hactare" ep7="Hactare"
                    op8="Acre" ep8="Acre"
                    op9="" ep9=""
                    op10="" ep10=""

                    />
                    <Box titulo="Velocidade"
                    op1="Milha por hora" ep1="Milha por hora"
                    op2="Pés por segundo" ep2="Pés por segundo"
                    op3="Metro por segundo" ep3="Metro por segundo"
                    op4="Quilômetro por hora " ep4="Quilômetro por hora"
                    op5="Nó" ep5="Nó"
                    op6="" ep6=""
                    op7="" ep7=""
                    op8="" ep8=""
                    op9="" ep9=""
                    op10="" ep10=""

                    />

                </div> 
            </div>
        </ContainerHome>
        </Container>
    )
}