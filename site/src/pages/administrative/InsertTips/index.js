import HeaderAdm from "../../../components/headerAdm/styled"
import { ContainerTips } from "./styled"

export default function InsertTips() {
    return (
        <ContainerTips>
            <HeaderAdm />
            <div className="content">
                <div className="cover-content" style={{display: 'flex', marginLeft: '5.7em'}}>
                    <div className="cover-name"style={{marginRight: '1em' }}>
                        Nome de Capa: 
                        <input style={{width: '22em' }}/>
                        <div className="vil">Campo Obrigátorio !</div>
                    </div>
                    <div className="cover-select">                  
                        <select>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
                <div className="all-image">
                    <div className="box-image" style={{marginRight: '3em'}}>
                        Link da Imagem de Capa:
                        <input style={{width: '36.4em'}} />
                        <div className="vil1">Campo Obrigátorio !</div>
                    </div>
                    <div className="box-image">
                         Link da Imagem 1:
                        <input />
                    </div>
                    <div className="box-image">
                        Link da Imagem 2:
                        <input />
                    </div>
                    <div className="box-image">
                        Link da Imagem 3:
                        <input />
                    </div>
                </div>
                <div className="all-description">
                    <div className="box-description">
                        Descrição 1
                        <textarea placeholder="Escreva-se aki" />
                    </div> 
                    <div className="box-description">
                        Descrição 2
                        <textarea placeholder="Escreva-se aki"/>
                    </div> 
                    <div className="box-description">
                        Descrição 3
                        <textarea placeholder="Escreva-se aki"/>
                        <div className="but"> Publicar </div>
                        <div className="but1"> Limpar </div>    
                    </div>              
                </div>
            
            </div>
            
        </ContainerTips>
    )
}