import styled from "styled-components";

export type BestBadgeProps ={
    size?:number;
}
export default function BestBadge({size}:BestBadgeProps){
    return <Img {...{size}} src="/images/badges/badge3.png"/>
}

const Img = styled.img<{size?:number}>`
    position:absolute;
    top:0;
    right:0;
    width:${props=> props.size ? props.size*0.1+"rem" : "2rem"};
    height:${props=> props.size ? props.size*0.1+"rem" : "2rem"};
    z-index: 10;
`;