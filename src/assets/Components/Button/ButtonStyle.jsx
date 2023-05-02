import styled from "styled-components";

export const ButtonStyled = styled.button`
        font-family: sans-serif;
        text-decoration: none;
        border: 2px solid #333;
        letter-spacing: 2px;
        text-align: center;
        position: relative;
        transition: all .35s;
        color: black;
        cursor: pointer;
        border-radius: 1rem;
        font-weight: 500;
        // background-color: var(--cll-primary-bot);
        padding: 1rem;
        font-size: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: var(--ff-body);
      
        & span{
            position: relative;
            z-index: 2;
        }
        
      
      &:after{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: var(--cll-primary-bot);
        transition: all .35s;
      };
      
      &:hover{
        color: #fff;
      };
      
      &:hover:after{
        width: 100%;
      };
`;