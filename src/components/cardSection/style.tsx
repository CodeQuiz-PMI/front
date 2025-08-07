import styled from "styled-components";

export const StyleCardSection = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    padding:10px;

    width: 370px;
    height: 245px;

    border-radius: 9px;
    border: 3px solid #2FFF00;
    background: rgba(47, 255, 0, 0.10);

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