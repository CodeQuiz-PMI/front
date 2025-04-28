import styled from "styled-components";

export const StyleCardSection = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 410px;
    height: 265px;
    border-radius: 9px;
    border: 3px solid #88FF3F;
    background: rgba(136, 255, 63, 0.04);

    h3{
        font-size: 25px;
        width: 95%;
        text-align: center;
    }

    p {
        font-family: "Space Mono", monospace;
        font-size: 18px;
        text-align: center;
        width: 95%;
    }

    span {
        font-size: 20px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;