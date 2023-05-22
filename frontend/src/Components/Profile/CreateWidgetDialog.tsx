import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import { Button } from '@mui/material';

export interface CreateWidgetDialogProps
{
  open: boolean;
  widgetUse: any[];
  onClose: (value: string) => void;
}

export function CreateWidgetDialog(props: CreateWidgetDialogProps)
{
  const { open } = props;
  const handleClose = () =>
  {

  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Edit text</DialogTitle>
      <Button
        variant="contained"
        onClick={props.widgetUse[0]}
        style={{
          height: '40px',
          fontFamily: 'Dongle',
          fontSize: '1.5rem',
          backgroundColor: '#000000cc',
          borderRadius: '20px',
          boxShadow: 'none',
          margin: '5px',
        }}
      >
        Create Text
      </Button>
      <Button
        variant="contained"
        onClick={props.widgetUse[1]}
        style={{
          height: '40px',
          fontFamily: 'Dongle',
          fontSize: '1.5rem',
          backgroundColor: '#000000cc',
          borderRadius: '20px',
          boxShadow: 'none',
          margin: '5px',
        }}
      >
        Create Link Button
      </Button>
      <Button
        variant="contained"
        onClick={props.widgetUse[2]}
        style={{
          height: '40px',
          fontFamily: 'Dongle',
          fontSize: '1.5rem',
          backgroundColor: '#000000cc',
          borderRadius: '20px',
          boxShadow: 'none',
          margin: '5px',
        }}
      >
        Create Title
      </Button>
      <Button
        variant="contained"
        onClick={props.widgetUse[3]}
        style={{
          height: '40px',
          fontFamily: 'Dongle',
          fontSize: '1.5rem',
          backgroundColor: '#000000cc',
          borderRadius: '20px',
          boxShadow: 'none',
          margin: '5px',
        }}
      >
        Create Image
      </Button>
    </Dialog>
  );
}