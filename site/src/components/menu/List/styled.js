
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerList = styled.div `
div:hover {
    color: blue;
    cursor: pointer;
    margin: .9em;
}
div {
    margin: .7em;
}


`

export default function List(props) {
    return (
        <ContainerList>
            
       <Link to={props.k1}>  <div> {props.s1} {props.l1} </div> </Link>
       <Link to={props.k2}>  <div>  {props.s2} {props.l2 } </div> </Link>
       <Link to={props.k3}>   <div> {props.s3} {props.l3}</div> </Link>
           <Link to={props.k4}><div>  {props.s4} {props.l4}</div> </Link> 
            <Link to={props.k5}> <div> {props.s5} {props.l5}</div>  </Link>
          
        </ContainerList>
    )
}