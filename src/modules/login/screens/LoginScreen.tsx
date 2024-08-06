import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from "../styles/loginScreen.styles";
import backgroundimg from "../../../../public/background.png";
import logo from "../../../../public/logo.png";
import Input from "../../../shared/inputs/input/input";
import Button from "../../../shared/buttons/button/Button";

const LoginScreen = () => {
  return (
    <div>
      <ContainerLoginScreen> 
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src={logo} />
            <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
            <Input title="USUÁRIO"/>
            <Input title="SENHA"/>
            <Button type="primary" margin='64px 0px 16px 0px'>ENTRAR</Button>
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src={backgroundimg} />
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
