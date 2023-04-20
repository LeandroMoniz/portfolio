import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    backdrop-filter: blur(5px);
    border-bottom: 0.2rem solid var(--cll-primary-alt);
    z-index: 3;
    >div {
        display: flex;
        align-items: center;
        .nav-bar {
            >ul.menu {
                list-style: none;
                display: flex;
            }
            li a span {
                color: var(--cll-primary-alt);
                margin-left: 1.5rem;
                font-weight: var(--fw-text);
                text-transform: uppercase;
                font-size: var(--fs-text);
                letter-spacing: .3rem;
                
                &:hover {
                    border-bottom: 2px solid var(--cll-primary-alt);
                }
            }
        }
    }
    >svg.mobile {
        display: none;
    }
    @media (max-width: 999px) {
        >div .nav-bar >ul.menu {
            display: none;
        }
        >svg.mobile {
            color:var(--cll-primary-alt);
            display: block;
            cursor: pointer;
        }
    }
    
`;