import { BackgroundImage } from "../styles/loginScreen.styles";
import backgroundimg from "../../../../public/background.png";

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src={backgroundimg} />
    </div>
  );
};

export default LoginScreen;
