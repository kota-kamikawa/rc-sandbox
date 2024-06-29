import { Button } from '@mui/material';
import { SxProps } from '@mui/system';

interface Props {
  label: string;
  sx?: SxProps;
}

export const PrimaryButton = (props: Props) => {
  return (
    <Button type="submit" fullWidth variant="contained" sx={props.sx}>
      {props.label}
    </Button>
  );
};
