import { Link, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

interface Props {
  copyRightText: string;
  sx?: SxProps;
}

export const Copyright = (props: Props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={props.sx}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        {props.copyRightText}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
