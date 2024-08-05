import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
} from "../styles/loginScreen.styles";
import backgroundimg from "../../../../public/background.png";
import logo from "../../../../public/logo.png";
import Input from "../../../shared/inputs/input/input";

const LoginScreen = () => {
  return (
    <div>
      <ContainerLoginScreen> 
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src={logo} />
            <Input title="USUÁRIO"/>
            <Input title="SENHA"/>
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src={backgroundimg} />
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
