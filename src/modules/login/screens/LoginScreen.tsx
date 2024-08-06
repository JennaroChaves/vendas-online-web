import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';
import backgroundimg from '../../../../public/background.png';
import logo from '../../../../public/logo.png';
import Input from '../../../shared/inputs/input/input';
import Button from '../../../shared/buttons/button/Button';
import { useState } from 'react';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState ('');
  const handleUsename = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    alert(`username: ${username}, password: ${password}`);
  };


  return (
    <div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src={logo} />
            <TitleLogin level={2} type="secondary">
              LOGIN
            </TitleLogin>
            <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleUsename} value={username} />
            <Input type='Password' title="SENHA" margin="32px 0px 0px" onChange={handlePassword} value={password}/>
            <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
              ENTRAR
            </Button>
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src={backgroundimg} />
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;