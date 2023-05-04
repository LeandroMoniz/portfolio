import styled, {css} from "styled-components";

export const MenuMobileStyle = styled.div`
    position: fixed;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, rgba( 165, 159, 168, 1) 20%, rgba(254, 252, 255, 1) 80%);
    opacity: 0;
    pointer-events: none;
    
    transform: translateY(50px);
    transition: .5s;
    >svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: var(--cll-primary);
        cursor: pointer;
        transform: rotate(45deg);
        transition: .5s;
    }
    nav {
        
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        transform: scale(0.7);
        transition: .5s;
        a {
            color: var(--cll-primary);
            font-size: 2.5rem;
            font-weight: var(--fw-text);
            
        }
    }
    
    ${({isVisible}) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);
        nav {
            transform: scale(1.2);
        }
        
        >svg {
            transform: rotate(0deg);
        }
    `}
`;