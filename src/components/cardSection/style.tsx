import styled from "styled-components";

interface StyledProps {
  isAnswered?: boolean;
  isLocked?: boolean;
}

export const StyleCardSection = styled.li<StyledProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    padding: 25px 10px;

    width: 280px;
    height: 245px;

    border-radius: 9px;
    border: 3px solid #2FFF00;

    background-color: ${({ isAnswered }) =>
        isAnswered ? "#287E15" : "#294623"};

    position: relative;
    opacity: ${({ isLocked }) => (isLocked ? 0.5 : 1)};
    pointer-events: ${({ isLocked }) => (isLocked ? "none" : "auto")};

    .lock-icon {
        position: absolute;
        bottom: 28px;
        left: 25px;
        width: 40px;
        height: 40px;
    }

    button{
        width: 234px;
        height: 47px;

        color: #2FFF00;
        text-align: center;
        font-family: "Jersey 25";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        display: flex;
        flex-direction: column;
        justify-content: center;
        
        border-radius: 5px;
        border: 1px solid transparent; 
        background: rgba(0, 0, 0, 0.25);

        &:hover {
            background-color: rgba(137, 255, 63, 0.5);
        }
    }

    h3{
        color: #2FFF00;
        text-align: center;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        font-family: "Jersey 25";
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    span {
        color: #2FFF00;
        text-align: center;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        font-family: "Jersey 25";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-direction: row;
    }
`;