import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #00ff00;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #00ff00;
  margin-top: 10px;
  text-align: center;
  max-width: 600px;
`;

export const IconSettings = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg, img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

export const StageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const StageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

export const StageNumber = styled.div`
  width: 50px;
  height: 50px;
  background-color: #0a0a0a;
  border: 2px solid #00ff00;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
  color: #00ff00;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StageLine = styled.div`
  height: 2px;
  background-color: #00ff00;
  flex-grow: 1;
  margin: 0 10px;
`;

export const StageTitle = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #00ff00;
  text-align: center;
`;

export const Button = styled.button`
  margin-top: 40px;
  padding: 10px 20px;
  font-size: 16px;
  color: #00ff00;
  background: transparent;
  border: 2px solid #00ff00;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #00ff00;
    color: #0a0a0a;
  }
`;
