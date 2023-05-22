/*****************************************************************************/
/*!
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/
import React from 'react';

import { Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { SimpleDialog } from '../Profile/EditDialog';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

export enum WidgetType
{
    WIDGET_TEXT = 1,
    WIDGET_TITLE = 2,
    WIDGET_BUTTON = 3,
    WIDGET_IMAGE = 4,
};

export interface WidgetProp
{
    widget_index: number // the order the widget is placed from top to bottom, currently not stored in db
    widget_id?: number // unique id that is stored in db, optional as newly created widgets do not have ids until sent to db
    widget_type: WidgetType
    widget_text: string
    widget_url: string
    widget_edit: Boolean
    widget_delete: any
    widget_move_up: any
    widget_move_down: any
    widget_edit_text: any
    widget_edit_url: any
};

const Widget: React.FC<WidgetProp> = (props) =>
{
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('');

    //set widget text
    const InputChangeSetText = function (event: any)
    {
        props.widget_edit_text(props.widget_index, event.target.value);
    };
    //set button url
    const InputChangeSetURL = function (event: any)
    {
        props.widget_edit_url(props.widget_index, event.target.value);
    };

    const handleClose = (value: string) =>
    {
        setOpen(false);
        setSelectedValue(value);
    };
    const handleClickOpen = () =>
    {
        setOpen(true);
    };
    const deleteWidget = () =>
    {
        props.widget_delete(props.widget_index);
    }
    const openInNewTab = () =>
    {
        window.open("https://" + props.widget_url);
    };
    const MoveWidgetUp = () =>
    {
        props.widget_move_up(props.widget_index)
    }

    const MoveWidgetDown = () =>
    {
        props.widget_move_down(props.widget_index)
    }

    const renderChangeOrder = () =>
    {
        return (
            <>
                <Button
                    variant="contained"
                    onClick={MoveWidgetUp}
                    fullWidth={false}
                    style={{
                        height: '40px',
                        width: '40px',
                        fontSize: '1.5rem',
                        borderRadius: '20px',
                        boxShadow: 'none',
                    }}
                >
                    <KeyboardArrowUpIcon />
                </Button>
                <Button
                    variant="contained"
                    onClick={MoveWidgetDown}
                    fullWidth={true}
                    style={{
                        height: '40px',
                        width: '40px',
                        fontSize: '1.5rem',
                        borderRadius: '20px',
                        boxShadow: 'none',
                    }}
                >
                    <KeyboardArrowDownIcon />
                </Button>
            </>
        )
    }

    const renderEditMode = () =>
    {
        return (
            <>
                <SimpleDialog
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose}
                    InputChangeSetURL={InputChangeSetURL}
                    InputChangeSetText={InputChangeSetText}
                    widgetDelete={deleteWidget}
                    widgetType={props.widget_type}
                />

                <Fab style={{ marginLeft: '25px' }} color="secondary" aria-label="edit " onClick={handleClickOpen}>
                    <EditIcon />
                </Fab>
            </>)
    }


    const renderEditableWidget = () =>
    {
        if (props.widget_edit)
        {
            return (
                <Box   minHeight={'100px'} maxWidth={'90%'} display={'flex'}  justifyContent={'center'} 
                    alignItems={'center'}>
                    <Box  alignItems={'left'}margin={'10px'}>
                        {renderEditMode()}
                    </Box>
                    <Box bgcolor={'alternate.main'} minHeight={'100px'} width={'800px'} display={'flex'}  justifyContent={'center'}
                    alignItems={'center'}>
                        {renderWidget()}
                        </Box>

                    <Box  alignItems={'right'}margin={'10px'}>
                        {renderChangeOrder()}
                    </Box>
                </Box>
            );
        } else
        {
            return (<>{renderWidget()}</>);
        }
    }

    const renderWidget = () =>
    {
        if (props.widget_type === WidgetType.WIDGET_TEXT)
        {
            return (
                <Typography margin={'25px'} fontSize={'1.5rem'}>
                    {props.widget_text}
                </Typography>)
        }
        if (props.widget_type === WidgetType.WIDGET_BUTTON)
        {
            return (
                <Button
                    variant="contained"
                    onClick={openInNewTab}

                    style={{
                        fontSize: '1.25rem',
                        height: '75px',
                        width: '500px',
                        maxWidth: '95%',
                        borderRadius: '50px',
                        boxShadow: 'none',
                        margin: '5px',
                    }}
                >
                    {props.widget_text}
                </Button>
            )
        }
        if (props.widget_type === WidgetType.WIDGET_TITLE)
        {
            return (
                <Typography
                    align={'center'}
                    variant={'subtitle2'}
                    color="textSecondary"
                    fontSize={'4rem'}
                    fontFamily={'Akira'}
                    style={{ letterSpacing: '2px' }}>
                    {props.widget_text}
                </Typography>)

        }
        if (props.widget_type === WidgetType.WIDGET_IMAGE)
        {
            return (
                <CardMedia
                    image={props.widget_url}
                    style={{ borderRadius: '100px' }}
                    title={'image'}
                    sx={{
                        height: '150px',
                        width: '150px'
                    }}
                />
            )
        }
    };

    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid container direction="row" alignItems="center" justifyContent="center">
                    {renderEditableWidget()}
                </Grid>
            </Grid>
        </>
    );
};
export default Widget;
