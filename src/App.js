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
import MenuIcon from "@material-ui/icons/Menu";
import InProgressListComponent from "./component/InProgressListComponent";

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

  return (
    <>
      <AppBar position="static" className={classes.appBarStyle}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My TODO List
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <br />
      <Grid container className={classes.root} spacing={2} justify="center">
        <Grid item xs={3} className={classes.gridStyle}>
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
                  setTodo({
                    header: header,
                    body: body
                  });
                }}
              >
                Add
              </Button>
              <Button className={classes.btnStyle}>Clear</Button>
            </ButtonGroup>
          </Paper>
        </Grid>
        <Grid item xs={3} className={classes.gridStyle}>
          <TextField label="TODO LIST" inputProps={labelInputProps} />
          <Paper>
            <TodoListComponent
              handleToDoList={() => setTodo(todo.concat(data.todo))}
              todos={todo}
            />
          </Paper>
        </Grid>
        <Grid item xs={3} className={classes.gridStyle}>
          <TextField label="IN-PROGRESS" inputProps={labelInputProps} />
          <Paper>
            <InProgressListComponent
              handleInProgressList={() =>
                setInProgress(inProgress.concat(data.inProgress))
              }
              inProgress={inProgress}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;