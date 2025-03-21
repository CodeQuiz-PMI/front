import { StyledButton } from "./style";
import { iButtonProps } from "./types";

export const Button = ({
  children,
  type,
  onClick,
  buttonVariation,
}: iButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      buttonVariation={buttonVariation}
    >
      {children}
    </StyledButton>
  );
};