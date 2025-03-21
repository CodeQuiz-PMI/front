export interface iButtonProps {
    children: React.ReactNode;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
    buttonVariation?: string;
    disabled?: boolean
}

export interface iStyledButtonProps {
    buttonVariation?: string;
}