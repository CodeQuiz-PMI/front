import styled from "styled-components";

export const StyledCardQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 350px;
  justify-content: center;

  .number {
    width: 160px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    border: 2px solid;
    border-radius: 10px;
	cursor: pointer;
        font-family: "Space Mono", monospace;

  }

  p {
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
    height: 70px;
        font-family: "Space Mono", monospace;

  }
`;
