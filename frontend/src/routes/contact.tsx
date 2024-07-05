import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import CallIcon from '@mui/icons-material/Call';
import {
  FormControl,
  FormGroup,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { createFileRoute } from '@tanstack/react-router';

import { Copyright } from '../components/atoms/Copyright';

export const Route = createFileRoute('/contact')({
  component: Contact,
});

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  contactType: string;
  contactContent: string;
  accept: boolean;
}

function Contact() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      contactType: '',
      contactContent: '',
      accept: false,
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <MainContainer>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <CallIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              お問い合わせ
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: '姓を入力してください',
                      },
                    }}
                    render={({ field, formState: { errors } }) => (
                      <TextField
                        autoComplete="given-name"
                        placeholder="姓"
                        required
                        fullWidth
                        id="firstName"
                        label="姓"
                        autoFocus
                        error={errors.firstName ? true : false}
                        helperText={errors.firstName?.message as string}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="lastName"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: '名を入力してください',
                      },
                    }}
                    render={({ field, formState: { errors } }) => (
                      <TextField
                        autoComplete="family-name"
                        placeholder="名"
                        required
                        fullWidth
                        id="lastName"
                        label="名"
                        error={errors.lastName ? true : false}
                        helperText={errors.lastName?.message as string}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'メールアドレスを入力してください',
                      },
                    }}
                    render={({ field, formState: { errors } }) => (
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="メールアドレス"
                        autoComplete="email"
                        error={errors.email ? true : false}
                        helperText={errors.email?.message as string}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: '電話番号を入力してください',
                      },
                    }}
                    render={({ field, formState: { errors } }) => (
                      <TextField
                        fullWidth
                        id="phone"
                        label="電話番号"
                        autoComplete="tel"
                        error={errors.phone ? true : false}
                        helperText={errors.phone?.message as string}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="contactType"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: '問い合わせ種別を選択してください',
                      },
                    }}
                    render={({ field, formState: { errors } }) => (
                      <FormControl
                        fullWidth
                        error={errors.contactType ? true : false}
                      >
                        <InputLabel id="contact-type">
                          問い合わせ種別
                        </InputLabel>
                        <Select
                          labelId="select-label"
                          id="select"
                          label="Select"
                          {...field}
                        >
                          <MenuItem value="products">商品について</MenuItem>
                          <MenuItem value="recruite">採用について</MenuItem>
                          <MenuItem value="incident">不具合について</MenuItem>
                          <MenuItem value="other">その他</MenuItem>
                        </Select>
                        <FormHelperText>
                          {errors.contactType?.message || ''}
                        </FormHelperText>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="contactContent"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'お問い合わせ内容を入力してください',
                      },
                    }}
                    render={({ field, formState: { errors } }) => (
                      <TextField
                        fullWidth
                        id="contactContent"
                        label="お問い合わせ内容"
                        multiline
                        rows={4}
                        error={errors.contactContent ? true : false}
                        helperText={errors.contactContent?.message as string}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="accept"
                    control={control}
                    defaultValue={false}
                    rules={{
                      validate: (value) => value === true || '同意が必要です',
                    }}
                    render={({ field, formState: { errors } }) => (
                      <FormGroup {...field}>
                        <FormControlLabel
                          control={<Checkbox name="check" />}
                          label="個人情報の取り扱いに同意します"
                          value={field.value}
                        />
                        <FormHelperText error={errors.accept ? true : false}>
                          {errors.accept?.message || ''}
                        </FormHelperText>
                      </FormGroup>
                    )}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                送信
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} copyRightText="RC-Sandbox" />
        </Container>
      </MainContainer>
    </>
  );
}

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#FFF',
  padding: '2rem',
});
