

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { WidgetType } from './Widget';

export interface SimpleDialogProps
{
    widgetType: WidgetType;
    InputChangeSetText: any;
    InputChangeSetURL: any;
    open: boolean;
    selectedValue: string;
    widgetDelete: any;
    onClose: (value: string) => void;
}

export function SimpleDialog(props: SimpleDialogProps)
{
    const { onClose, selectedValue, open } = props;

    const handleClose = () =>
    {
        onClose(selectedValue);
    };
    const renderDialog = () =>
    {
        console.log("open");
        if (props.widgetType === WidgetType.WIDGET_TEXT)
        {
            return (
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle>Edit text</DialogTitle>
                    <TextField id="outlined-basic" label="Edit text" variant="outlined" onChange={props.InputChangeSetText} />
                    <Button
                        variant="contained"
                        onClick={props.widgetDelete}
                        style={{
                            height: '40px',

                            fontFamily: 'Dongle',
                            fontSize: '1.5rem',
                            backgroundColor: '#00000055',
                            borderRadius: '20px',
                            boxShadow: 'none',
                            margin: '5px',
                        }}
                    >
                        DELETE
                    </Button>

                </Dialog>
            );
        }
        if (props.widgetType === WidgetType.WIDGET_TITLE)
        {
            return (
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle>Edit title</DialogTitle>
                    <TextField id="outlined-basic" label="Edit text" variant="outlined" onChange={props.InputChangeSetText} />
                    <Button
                        variant="contained"
                        onClick={props.widgetDelete}
                        style={{
                            height: '40px',

                            fontFamily: 'Dongle',
                            fontSize: '1.5rem',
                            backgroundColor: '#00000055',
                            borderRadius: '20px',
                            boxShadow: 'none',
                            margin: '5px',
                        }}
                    >
                        DELETE
                    </Button>

                </Dialog>
            );
        }
        if (props.widgetType === WidgetType.WIDGET_BUTTON)
        {
            return (
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle>Edit text</DialogTitle>
                    <TextField id="outlined-basic" label="Edit text" variant="outlined" onChange={props.InputChangeSetText} />
                    <TextField id="outlined-basic" label="Edit hyper link" variant="outlined" onChange={props.InputChangeSetURL} />
                    <Button
                        variant="contained"
                        onClick={props.widgetDelete}
                        style={{
                            height: '40px',

                            fontFamily: 'Dongle',
                            fontSize: '1.5rem',
                            backgroundColor: '#00000055',
                            borderRadius: '20px',
                            boxShadow: 'none',
                            margin: '5px',
                        }}
                    >
                        DELETE
                    </Button>

                </Dialog>
            );
        }
        if (props.widgetType === WidgetType.WIDGET_IMAGE)
        {
            return (
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle>Edit Image</DialogTitle>
                    <TextField id="outlined-basic" label="Edit text" variant="outlined" onChange={props.InputChangeSetText} />
                    <TextField id="outlined-basic" label="Edit hyper link" variant="outlined" onChange={props.InputChangeSetURL} />
                    <Button
                        variant="contained"
                        onClick={props.widgetDelete}
                        style={{
                            height: '40px',

                            fontFamily: 'Dongle',
                            fontSize: '1.5rem',
                            backgroundColor: '#00000055',
                            borderRadius: '20px',
                            boxShadow: 'none',
                            margin: '5px',
                        }}
                    >
                        DELETE
                    </Button>

                </Dialog>
            );
        }



    }



    return (
        <>
            {renderDialog()}
        </>
    );
}