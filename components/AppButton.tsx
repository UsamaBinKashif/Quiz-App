import { ButtonProps } from "@/ineterfaces";
import { Button } from "@chakra-ui/react";

const Appbutton: React.FC<ButtonProps> = ({
  value,
  onClick,
  colorScheme,
  variant,
  className,
  disabled,
  width,
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

export default Appbutton;
