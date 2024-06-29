import { TextField } from '@mui/material';

interface Props {
  margin?: 'none' | 'dense' | 'normal';
  required?: boolean;
  fullWidth?: boolean;
  id?: string;
  label?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  value?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = (props: Props) => {
  return (
    <TextField
      margin={props.margin}
      required={props.required}
      fullWidth={props.fullWidth}
      id={props.id}
      label={props.label}
      name={props.name}
      autoComplete={props.autoComplete}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
