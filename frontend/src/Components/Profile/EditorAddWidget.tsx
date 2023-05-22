/*****************************************************************************/
/*!
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/
import React from 'react';

import { Button, Grid } from '@mui/material';

export interface WidgetAddWidget
{
    action: () => void;
};

const EditorAddWidget: React.FC<WidgetAddWidget> = (prop) =>
{

    const renderWidget = () =>
    {
        return (
            <Grid
                container
                spacing={0}

                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Button
                    variant="contained"
                    onClick={prop.action}
                    style={{
                        height: '40px',
                        fontSize: '1.5rem',
                        borderRadius: '20px',
                        boxShadow: 'none',
                        margin: '5px',
                    }}
                >
                    +
                </Button>
            </Grid>
        )
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

                <div className="PageContainer">
                    <div className="glow">
                        {renderWidget()}
                    </div>
                </div>

            </Grid>
        </>
    );
};
export default EditorAddWidget;
