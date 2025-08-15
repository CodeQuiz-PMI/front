import styled from "styled-components";

interface StyledProps {
  isAnswered?: boolean;
}

export const StyledCardQuestion = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 350px;
  justify-content: center;

  .card-question {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    height: 350px;
    justify-content: center;
    position: relative;
  }

  .number {
    width: 160px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 2px solid;
    border-radius: 10px;
    cursor: pointer;

    color: var(--primary-color-light);
    font-family: var(--main-font);
    font-size: 96px;
    font-style: normal;
    font-weight: var(--font-weight-normal);

    background-color: ${({ isAnswered }) =>
      isAnswered ? "#287E15" : "#294623"};
    position: relative;
  }

  p {
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
    height: 70px;
    color: var(--primary-color-light);
    font-family: var(--main-font);
    font-style: normal;
    font-weight: var(--font-weight-normal);
  }

  .card-question.lock {
    position: relative;
  }

  #lock {
    position: absolute;
    width: 40px;
    height: auto;
    top: 15%;
    left: 135px;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;
