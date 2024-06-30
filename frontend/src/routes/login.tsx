import { styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createFileRoute } from '@tanstack/react-router';

import appLogo from '../assets/logo.svg';
import { LoginForm } from '../components/organisms/LoginForm';

export const Route = createFileRoute('/login')({
  component: Login,
});

function Login() {
  return (
    <StyledContainer>
      <LeftContainer>
        <img src={appLogo} alt="Logo" />
        <Typography variant="h3" color="white">
          Welcome to <br /> RC-Sandbox
        </Typography>
      </LeftContainer>
      <RightContainer>
        <LoginForm />
      </RightContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
});

const LeftContainer = styled(Grid)({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  width: '100%',
  height: '100%',
  background: '#011627',
});

const RightContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '70%',
  height: '100%',
});
