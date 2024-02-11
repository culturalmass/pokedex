import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <Button
      variant="default"
      type="button"
      size="icon"
      className="text-2xl"
      onClick={onClick}
    >
      <Icon />
    </Button>
  );
};

export default AuthSocialButton;
