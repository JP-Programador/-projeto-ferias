import styled from "styled-components";

const ContainerRest = styled.div`
display:  flex;
flex-direction: column;
background-color: white;
height: 12em;
width: 40em;
border-radius: 1em;
align-items: center;
padding: 2em 0em 3.5em 0em;


.pt{
    margin-left: 15px;
    font-size: 22px;
}



.box-inputs{
    display: flex;
    margin: 25px 0px ;
    text-align: center;
    align-items: center;
}
.name{
    color: black;
    margin: 5px 5px 0px 10px ;
}


input {
   width: 32em;
   height: 2.4em;
   border: 2px solid black;
   border-radius: 5px;
}
`
export default function Rest(props){
    return(
        <ContainerRest> 
        
        <div className="box-rest">
           <div className="box-inputs">
               <div className="name">{props.name1}</div> 
               <input id="" type="number"></input>
               <div className="pt">{props.por}</div>
           </div>

           <div className="box-inputs">
               <div className="name">{props.name2}</div>
               <input id="" type="number"></input>
           </div>

           <div className="box-inputs">
                <div className="name">{props.name3}</div>
                <input id="" type="number"></input>
           </div>
        </div>
         

        </ContainerRest>
    )
    
}