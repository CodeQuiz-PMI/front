import styled, { css } from "styled-components";
import { iStyledButtonProps } from "./types";

export const StyledButton = styled.button<iStyledButtonProps>`
  ${({ buttonVariation }) => {
        switch (buttonVariation) {
            case "type1":
                return css`
          height: 103px;
          width: 427px;
          color: #88ff3f;
          font-size: 40px;
          border: 1px solid #88ff3f;
          border-radius: 10px;
          background-color: #121212;
          font-family: "Space Mono";

          &:hover {
            cursor: pointer;
            background-color: rgba(137, 255, 63, 0.5);
          }
        `;
            case "type2":
                return css`
          height: 76px;
          width: 304px;
          color: #88ff3f;
          font-size: 30px;
          border: 1px solid #88ff3f;
          border-radius: 10px;
          background-color: #121212;
          font-family: "Space Mono";

          &:hover {
            cursor: pointer;
            background-color: rgba(137, 255, 63, 0.5);
          }
        `;
            case "type3":
                return css`
          height: 76px;
          width: 304px;
          color: rgba(137, 255, 63, 0.5);
          font-size: 30px;
          border: 1px solid rgba(137, 255, 63, 0.5);
          border-radius: 10px;
          background-color: #121212;
          font-family: "Space Mono";
        `;
            case "type4":
                return css`
          width: 202px;
          height: 51px;
          color: #88ff3f;
          font-size: 20px;
          border: 1px solid #88ff3f;
          border-radius: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          background-color: #121212;
          font-family: "Space Mono";

          &:hover {
            cursor: pointer;
            background-color: rgba(137, 255, 63, 0.5);
            img {
              background-color: rgba(137, 255, 63, 0);
            }
          }
        `;
            case "type5":
                return css`
          width: 145px;
          height: 56px;
          color: #88ff3f;
          font-size: 20px;
          border: 1px solid #88ff3f;
          border-radius: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          background-color: #121212;
          font-family: "Space Mono";

          &:hover {
            cursor: pointer;
            background-color: rgba(137, 255, 63, 0.5);
            img {
              background-color: rgba(137, 255, 63, 0);
            }
          }
        `;
            case "type6":
                return css`
          width: 270px;
          height: 56px;
          color: #88ff3f;
          font-size: 20px;
          border: 1px solid #88ff3f;
          border-radius: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          background-color: #121212;
          font-family: "Space Mono";

          &:hover {
            cursor: pointer;
            background-color: rgba(137, 255, 63, 0.5);
            img {
              background-color: rgba(137, 255, 63, 0);
            }
          }
        `;
            case "buttonCardSection":
                return css`
          width: 150px;
          height: 56px;
          color: #88ff3f;
          font-size: 20px;
          border: 1px solid #88ff3f;
          border-radius: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          background-color: #121212;
          font-family: "Space Mono";

          &:hover {
            cursor: pointer;
            background-color: rgba(137, 255, 63, 0.5);
            img {
              background-color: rgba(137, 255, 63, 0);
            }
          }
        `;
        }
    }}
`;
