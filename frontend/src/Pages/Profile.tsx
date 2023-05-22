/*****************************************************************************/
/*!
\file Home.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/


import React, { useEffect } from 'react';
import './Home.css';
import '../Theme/Theme';

import { Grid } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { CreateWidgetDialog } from '../Components/Profile/CreateWidgetDialog';
import Widget, { WidgetType, WidgetProp } from '../Components/Profile/Widget';
import EditorAddWidget from '../Components/Profile/EditorAddWidget';
import SaveProfile from '../Components/Profile/SaveProfile';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import Container from '../common/Container';

import { create, read, UpdateOne } from '../Route/widgetRoute';


var allWidgets: WidgetProp[] = [];

const Profile: React.FC = () => {
  useEffect(() => {
    // fetch the existing widget layout if there is any upon login
    const StartUp = async () => {
      const widgets = await read();

      widgets.forEach((widget, index) => {
        allWidgets.push({
          widget_index: index,
          widget_id: widget.id,
          widget_type: parseInt(widget.type),
          widget_text: widget.text,
          widget_url: widget.link,
          widget_edit: false,
          widget_delete: DeleteWidget,
          widget_move_up: MoveUp,
          widget_move_down: MoveDown,
          widget_edit_text: EditText,
          widget_edit_url: EditURL,
        })
      });
      setWidgetCount(widgets.length);
    }

    StartUp()
      .catch(console.error);

  }, []);

  const [widgetCount, setWidgetCount] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const [widgetChange, setWidgetChange] = React.useState(false);

  const DeleteWidget = async function (id: Number) {
    const isLargeNumber = (element: WidgetProp) => element.widget_index === id;

    var index = allWidgets.findIndex(isLargeNumber);
    console.log("deleting", index);

    await allWidgets.splice(index, 1);
    setWidgetCount(allWidgets.length);
  }
  const readAll = async () => {
    var widgets = await read();

    if (widgets.length) {
      for (var i = 0; i < widgets.length; ++i) {
        if (widgets[i].type === WidgetType[WidgetType.WIDGET_TEXT]) {
          AddSingleWidgetText(widgets[i].id, widgets[i].text);
        }
        //add others

      }
    }
  }

  const saveAll = async () => {
    const widgets = await read();

    if (widgets.length > 0) {
      allWidgets.forEach(async (value) => {
        const oldWidgetData = widgets.find(({ id }) => id === value.widget_id);
        if (oldWidgetData) {
          await UpdateOne(oldWidgetData.id.toString(), value.widget_type, value.widget_text, value.widget_url);
        }
        else {
          console.log("Index out of bounds for allWidgets in saveAll()");
        }
      })
    } else {
      for (let u = 0; u < allWidgets.length; ++u) {
        await create(allWidgets[u].widget_index.toString(), allWidgets[u].widget_type, allWidgets[u].widget_text, allWidgets[u].widget_url);
      }
    }
  }

  const SetEditMode = (event: any) => {
    console.log(event.target.checked)
    setEditMode(event.target.checked);
  }

  //TODO: test out if logic is working properly if number of new widgets != old widgets
  // some ids will be gone forever
  const SetDefaultLayout = () => {
    const oldWidgets = allWidgets;

    allWidgets = [];
    allWidgets.length = 0;
    AddSingleWidgetImage(0, "https://cdn2.lamag.com/wp-content/uploads/sites/6/2022/09/Ana-de-Armas.jpg",);
    AddSingleWidgetTitle(1, "ANA SIM");
    AddSingleWidgetText(2, "Social Media Influencer");
    AddSingleWidgetButton(3, "Portfolio", "en.wikipedia.org/wiki/Ana_de_Armas");
    AddSingleWidgetButton(4, "Website", "www.imdb.com/name/nm1869101/");
    AddSingleWidgetButton(5, "Instagram", "www.instagram.com/ana_d_armas/?hl=en");
    AddSingleWidgetButton(6, "Facebook", "www.facebook.com/anadearmasweb/");

    // reuse old ids if there are previously created widgets
    // but was overridden by default
    oldWidgets.forEach((widget, index) => {
      allWidgets[index].widget_id = widget.widget_id;
    });
  }
  const ReadLayout = () => {
    readAll();
  }
  React.useEffect(() => {
    if (widgetChange) {
      setWidgetChange(false);
    }
  }, [widgetChange])



  //move widget order down
  const MoveDown = async function (id: Number) {
    const getIndex = (element: WidgetProp) => element.widget_index === id;

    var index = await allWidgets.findIndex(getIndex);
    if (index > allWidgets.length - 2) return;
    var y = index + 1;
    var b = allWidgets[y];
    allWidgets[y] = allWidgets[index];
    allWidgets[index] = b;

    for (var i = 0; i < allWidgets.length; ++i) {
      allWidgets[i].widget_index = i;
    }
    setWidgetCount(allWidgets.length - 1);
    setWidgetCount(allWidgets.length);

  }
  //move widget orderup
  const MoveUp = async function (id: Number) {
    const getIndex = (element: WidgetProp) => element.widget_index === id;

    var index = await allWidgets.findIndex(getIndex);
    if (index < 1) return;

    var y = index - 1;
    var b = allWidgets[y];

    allWidgets[y] = allWidgets[index];
    allWidgets[index] = b;
    for (var i = 0; i < allWidgets.length; ++i) {
      allWidgets[i].widget_index = i;
    }
    setWidgetCount(allWidgets.length - 1);
    setWidgetCount(allWidgets.length);
  }

  const EditText = (id: any, text: any) => {
    console.log(" allWidgets[id]", allWidgets[id], id, allWidgets);
    allWidgets[id].widget_text = text;
    setWidgetChange(true);
  }
  const EditURL = (id: any, url: any) => {
    allWidgets[id].widget_url = url;
    setWidgetChange(true);
  }


  //add one text widget to container
  const AddSingleWidgetText = (id: number = widgetCount, text: string = "") => {
    const widgetText: WidgetProp = {
      widget_type: WidgetType.WIDGET_TEXT,
      widget_text: text,
      widget_url: "",
      widget_edit: editMode,
      widget_index: id,
      widget_edit_text: EditText,
      widget_edit_url: EditURL,
      widget_delete: DeleteWidget,
      widget_move_up: MoveUp,
      widget_move_down: MoveDown
    };
    HandleClickClose();
    AddWidget(widgetText);
  }
  //add one button widget to container
  const AddSingleWidgetButton = (id: number = widgetCount, text: string = "", url: string = "") => {
    const widgetText: WidgetProp = {
      widget_index: id,
      widget_type: WidgetType.WIDGET_BUTTON,
      widget_text: text,
      widget_url: url,
      widget_edit: editMode,
      widget_edit_text: EditText,
      widget_edit_url: EditURL,
      widget_delete: DeleteWidget,
      widget_move_up: MoveUp,
      widget_move_down: MoveDown
    };
    HandleClickClose();
    AddWidget(widgetText);
    console.log("added");
  }
  //add one button widget to container
  const AddSingleWidgetTitle = (id: number = widgetCount, text: string = "") => {
    const widgetText: WidgetProp = {
      widget_index: id,
      widget_type: WidgetType.WIDGET_TITLE,
      widget_text: text,
      widget_url: "",
      widget_edit: editMode,
      widget_edit_text: EditText,
      widget_edit_url: EditURL,
      widget_delete: DeleteWidget,
      widget_move_up: MoveUp,
      widget_move_down: MoveDown
    };
    HandleClickClose();
    AddWidget(widgetText);
    console.log("added");
  }
  //add one button widget to container
  const AddSingleWidgetImage = (id: number = widgetCount, url: string = "") => {
    const widgetText: WidgetProp = {
      widget_index: id,
      widget_type: WidgetType.WIDGET_IMAGE,
      widget_text: "",
      widget_url: url,
      widget_edit: editMode,
      widget_edit_text: EditText,
      widget_edit_url: EditURL,
      widget_delete: DeleteWidget,
      widget_move_up: MoveUp,
      widget_move_down: MoveDown
    };
    HandleClickClose();
    AddWidget(widgetText);
    console.log("added");
  }
  // render toggle to switch between edit mode on / off
  function RenderEditMode() {
    return (
      <FormGroup>
        <FormControlLabel control={<Switch onChange={SetEditMode} />} label="Edit Mode" />
      </FormGroup>
    );
  }

  //add widget to container
  const AddWidget = (widget: WidgetProp) => {
    allWidgets.push(widget);
    setWidgetCount(allWidgets.length);
    console.log("count:", widgetCount);

  }

  //close widget dialog
  const HandleClickClose = () => {
    setOpen(false);
  };

  //open widget dialog
  const HandleClickOpen = () => {
    setOpen(true);
  };

  const DialogText = () => {
    AddSingleWidgetText(widgetCount);
  }
  const DialogButton = () => {
    AddSingleWidgetButton(widgetCount);
  }
  const DialogTitle = () => {
    AddSingleWidgetTitle(widgetCount);
  }
  const DialogImage = () => {
    AddSingleWidgetImage(widgetCount);
  }


  const RenderCreateWidget = () => {
    return (
      <>
        <CreateWidgetDialog
          open={open}
          onClose={HandleClickClose}
          widgetUse={[DialogText, DialogButton, DialogTitle, DialogImage]}
        />
      </>)
  }

  return (
    <>
      <Container zIndex={2} >
        <Box >
          <Grid container display='flex' direction="row" alignItems="center" justifyContent="center" marginTop='25px' marginBottom='50px'>
            <Grid item>
              {RenderEditMode()}
            </Grid>
            <Grid item>
              <SaveProfile action={saveAll} >
              </SaveProfile>
              <Button
                variant="contained"
                onClick={SetDefaultLayout}
                style={{
                  borderRadius: '20px',
                  boxShadow: 'none',
                  margin: '5px',
                }}
              >
                CREATE DEFAULT
              </Button>
              <Button
                variant="contained"
                onClick={ReadLayout}
                style={{
                  borderRadius: '20px',
                  boxShadow: 'none',
                  margin: '5px',
                }}
              >
                READ ALL
              </Button>
            </Grid>
          </Grid>
          <Grid container item direction="column" display='flex'  >

            {allWidgets.map((widget: WidgetProp) => {
              console.log(widget)
              return <>
                <Widget
                  widget_index={widget.widget_index}
                  widget_delete={widget.widget_delete}
                  widget_type={widget.widget_type}
                  widget_text={widget.widget_text}
                  widget_url={widget.widget_url}
                  widget_edit_text={widget.widget_edit_text}
                  widget_edit_url={widget.widget_edit_url}
                  widget_edit={editMode}
                  widget_move_up={widget.widget_move_up}
                  widget_move_down={widget.widget_move_down}>
                </Widget></>
            })}
            {editMode &&
              <EditorAddWidget action={HandleClickOpen} >
              </EditorAddWidget>}
            {RenderCreateWidget()}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Profile;
