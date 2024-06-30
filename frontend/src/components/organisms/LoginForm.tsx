import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useRecoilValue } from 'recoil';

import useLoginForm from '../../hooks/useLoginForm';
import { authState } from '../../store/auth';
import { Copyright } from '../atoms/Copyright';
import { InputText } from '../atoms/InputText';
import { PrimaryButton } from '../atoms/PrimaryButton';

export const LoginForm = () => {
  const auth = useRecoilValue(authState);
  const { form, inputChange, login } = useLoginForm();

  return (
    <Grid item>
      <h2>{JSON.stringify(auth)}</h2>
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
        <Box component="form" noValidate onSubmit={login} sx={{ mt: 1 }}>
          <InputText
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={form.email}
            onChange={inputChange}
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
            value={form.password}
            onChange={inputChange}
          ></InputText>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <PrimaryButton label="Sign In" sx={{ mt: 3, mb: 2 }}></PrimaryButton>
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
  );
};
