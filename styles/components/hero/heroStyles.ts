import styled from "styled-components";

interface h2Props {
    intro?: boolean;
    size?: number;
}

export const Hero_h2 = styled.text<h2Props> 
`
 font-weight: ${(prop) => (
    prop.intro ? 'normal' : 'bold'
 )};

 color: white;
 

`