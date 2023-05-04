import styled from "styled-components";

export const TechStyle = styled.section`
  padding-top: var(--pt-section);
  section {
    background-color: #bad9d9;
    margin-top: 4rem;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 70px;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
    border: 1px solid #52006b;
    width: 90%;
    margin: 20px auto 20px auto;
    border-radius: 10px;
    box-shadow: 0 0 5px #0000004b;
    span {
      color: var(--cll-primary);
      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        font-size: 5rem;
      }
      p {
        font-size: 2.5rem;
        font-weight: 600;
      }
    }
   
  }
  @media (max-width: 425px) {
      section {
        background-color: #bad9d9;
        margin-top: 4rem;
        padding: 30px;
        display: flex;
        flex-wrap: wrap;
        column-gap: 70px;
        row-gap: 20px;
        justify-content: center;
        align-items: center;
        border: 1px solid #52006b;
        width: 90%;
        margin: 20px auto 20px auto;
        border-radius: 10px;
        box-shadow: 0 0 5px #0000004b;
        flex-direction: column;
      }
      span {
      color: var(--cll-primary);
      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        font-size: 5rem;
      }
      p {
        font-size: 2.5rem;
        font-weight: 600;
      }
    }
    }
`;
