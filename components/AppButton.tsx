import { ButtonProps } from "@/ineterfaces";
import React from "react";
import { Button } from "@chakra-ui/react";
const AppButton: React.FC<ButtonProps> = ({
  value,
  colorScheme,
  variant,
  className,
  width,
  disabled,
  onClick,
}) => {
  return (
    <>
      <Button
        onClick={(event) => onClick(event)}
        colorScheme={colorScheme}
        variant={variant}
        className={className}
        disabled={disabled}
        w={width}
      >
        {value}
      </Button>
    </>
  );
};

export default AppButton;
