/*****************************************************************************/
/*!
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/
import React from 'react';
import { Button } from '@mui/material';

export interface WidgetAddWidget
{
  action: () => void;
};

const SaveProfile: React.FC<WidgetAddWidget> = (prop) =>
{
  const renderWidget = () =>
  {
    return (
      <Button
        variant="contained"
        onClick={prop.action}
        style={{
          borderRadius: '20px',
          boxShadow: 'none',
          margin: '5px',
        }}
      >
        SAVE PROFILE
      </Button>
    )
  };

  return (
    <>
      {renderWidget()}
    </>
  );
};
export default SaveProfile;
