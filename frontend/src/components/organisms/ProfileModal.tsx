import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useSnackbar } from 'notistack';
import { useRecoilState } from 'recoil';

import { authState, userState } from '../../store/auth';

interface Props {
  open: boolean;
  handleClose: () => void;
}

interface LoginFormState {
  email: string;
}

export const ProfileModal = (props: Props) => {
  const [form, setForm] = useState<LoginFormState>({
    email: '',
  });
  const { open, handleClose } = props;
  const snackbar = useSnackbar();

  const [auth, setAuth] = useRecoilState(authState);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (auth.user) {
      setForm({ email: auth.user.username });
    }
  }, [auth, open, user]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!auth.user) {
      return;
    }
    setUser({
      ...user,
      id: auth.user.id,
      username: form.email,
    });
    setAuth({
      ...auth,
      user: {
        ...auth.user,
        username: form.email,
      },
    });
    snackbar.enqueueSnackbar('Profile updated!', {
      variant: 'success',
    });
    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>Please input your profile.</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="userid"
            name="userid"
            label="Id"
            type="text"
            value={auth.user?.id}
            fullWidth
            variant="standard"
            inputProps={{ readOnly: true }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Regist</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
