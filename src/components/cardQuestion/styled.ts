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

    color: #2fff00;
    font-family: "Jersey 25";
    font-size: 96px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    background-color: ${({ isAnswered }) =>
      isAnswered ? "#287E15" : "#294623"};
    position: relative;
  }

  p {
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
    height: 70px;
    color: #2fff00;
    font-family: "Jersey 25";
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .card-question.lock {
    position: relative;
  }

  #lock {
    position: absolute;
    width: 40px;
    height: auto;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;
