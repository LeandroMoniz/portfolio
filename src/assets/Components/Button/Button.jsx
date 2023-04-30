import React from 'react';


import { ButtonStyled } from "./ButtonStyle";

const Button = ({children, onPress}) => {
    return ( 
        <ButtonStyled onClick={onPress}>
          <span>{children}</span> 
        </ButtonStyled>
     );
}
 
export default Button;