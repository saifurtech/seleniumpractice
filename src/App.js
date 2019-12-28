import React, { useState } from "react";
import "./App.css";
import TodoListComponent from "./component/TodoListComponent";
import {
  Grid,
  makeStyles,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  ButtonGroup,
  TextField,
  TextareaAutosize
} from "@material-ui/core";
import InProgressListComponent from "./component/InProgressListComponent";
import DoneComponent from "./component/DoneComponent";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  gridStyle: {
    backgroundColor: "#eef3f7"
  },
  appBarStyle: {
    backgroundColor: "LightSteelBlue"
  },
  btnStyle: {
    backgroundColor: "LightSteelBlue",
    color: "White"
  }
}));

const labelInputProps = {
  step: 300,
  disabled: true,
  margin: "normal",
  variant: "standard"
};

function App() {
  let data = require("./sampleTodo.json");
  const classes = useStyles();
  let header = "";
  let body = "";
  const [todo, setTodo] = useState(data.todo);
  const [inProgress, setInProgress] = useState(data.inProgress);
  const [done, setDone] = useState(data.done);

  return (
    <DndProvider backend={Backend}>
      <AppBar position="static" className={classes.appBarStyle}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          />
          <Typography variant="h6" className={classes.title}>
            My TODO List
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <br />
      <Grid container className={classes.root} spacing={2} justify="center">
        <Grid item xs={2} className={classes.gridStyle}>
          <TextField label="ADD TODO" inputProps={labelInputProps} />
          <Paper>
            <Typography component={"div"}>
              <TextField
                required
                id="header"
                label="What Do You Need to Do"
                margin="normal"
                onInput={e => (header = e.target.value)}
              />
            </Typography>
            <Typography>
              <TextareaAutosize
                placeholder="Describe Your TODO"
                rows={5}
                onInput={e => (body = e.target.value)}
              />
            </Typography>
            <ButtonGroup size="medium" aria-label="Add or cancel button">
              <Button
                className={classes.btnStyle}
                onClick={() => {
                  if (header === "" || body === "") {
                    return;
                  }
                  setTodo(todo.concat({ header: header, body: body }));
                }}
              >
                Add
              </Button>
              <Button className={classes.btnStyle} onClick={() => {}}>
                Clear
              </Button>
            </ButtonGroup>
          </Paper>
        </Grid>
        <Grid item xs={2} className={classes.gridStyle}>
          <TextField label="TODO LIST" inputProps={labelInputProps} />
          <Paper>
            <TodoListComponent
              handleToDoList={() => todo}
              todos={todo}
              handleInProgress={header => {
                let ele = todo.find(x => x.header === header);
                setTodo(todo.filter(x => x.header !== ele.header));
                setInProgress(inProgress.concat(ele));
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={2} className={classes.gridStyle}>
          <TextField label="IN-PROGRESS" inputProps={labelInputProps} />
          <Paper>
            <InProgressListComponent
              handleInProgressList={() =>
                setInProgress(inProgress.concat(data.inProgress))
              }
              inProgress={inProgress}
              handleDone={header => {
                let ele = inProgress.find(x => x.header === header);
                setInProgress(inProgress.filter(x => x.header !== ele.header));
                setDone(done.concat(ele));
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={2} className={classes.gridStyle}>
          <TextField label="DONE" inputProps={labelInputProps} />
          <Paper>
            <DoneComponent
              handleInProgressList={() => setDone(done.concat(data.done))}
              done={done}
            />
          </Paper>
        </Grid>
      </Grid>
    </DndProvider>
  );
}

export default App;
