import { useState } from 'react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import appLogo from '../../assets/logo.svg';
import { Copyright } from '../atoms/Copyright';
import { InputText } from '../atoms/InputText';
import { PrimaryButton } from '../atoms/PrimaryButton';

export const Login = (): JSX.Element => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Login form submitted' + JSON.stringify(formValues));
  };

  return (
    <StyledContainer>
      <LeftContainer>
        <img src={appLogo} alt="Logo" />
        <Typography variant="h3" color="white">
          Welcome to <br /> RC-Sandbox
        </Typography>
      </LeftContainer>
      <RightContainer>
        <Grid item>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <InputText
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formValues.email}
                onChange={inputChangeHandler}
              ></InputText>
              <InputText
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formValues.password}
                onChange={inputChangeHandler}
              ></InputText>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <PrimaryButton
                label="Sign In"
                sx={{ mt: 3, mb: 2 }}
              ></PrimaryButton>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} copyRightText="RC-Sandbox" />
            </Box>
          </Box>
        </Grid>
      </RightContainer>
    </StyledContainer>
  );
};

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
