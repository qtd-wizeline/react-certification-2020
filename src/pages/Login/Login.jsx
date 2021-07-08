import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import LoginForm from '../../components/LoginForm';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import { StyledLoginPage, ContentWrapper } from './Login.styled';

function LoginPage() {
  const [globalState] = useContext(GlobalContext);
  if (globalState.user.id !== '') {
    return <Redirect to="/" />;
  }
  return (
    <StyledLoginPage>
      <ContentWrapper>
        <LoginForm />
      </ContentWrapper>
    </StyledLoginPage>
  );
}

export default LoginPage;
