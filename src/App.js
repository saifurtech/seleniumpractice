import React from "react";
import "./App.css";
import TodoListComponent from "./component/TodoListComponent";
import {
  Grid,
  makeStyles,
  Paper,
  ListSubheader,
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
    backgroundColor: "Lavender"
  },
  appBarStyle: {
    backgroundColor: "Orchid"
  },
  btnStyle: {
    backgroundColor: "Orchid",
    color: "White"
  }
}));

const labelInputProps = {
  step: 300,
  fullWidth: true,
  disabled: true,
  margin: "normal",
  variant: "standard"
};

function App() {
  const classes = useStyles();

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
            <Typography>
              <TextField
                required
                id="header"
                label="What Do You Need to Do"
                margin="normal"
              />
            </Typography>
            <Typography>
              <TextareaAutosize placeholder="Describe Your TODOs" rows={5} />
            </Typography>
            <ButtonGroup size="medium" aria-label="Add or cancel button">
              <Button className={classes.btnStyle}>Add</Button>
              <Button className={classes.btnStyle}>Clear</Button>
            </ButtonGroup>
          </Paper>
        </Grid>
        <Grid item xs={3} className={classes.gridStyle}>
          <TextField label="TODO LIST" inputProps={labelInputProps} />
          <Paper>
            <TodoListComponent />
          </Paper>
        </Grid>
        <Grid item xs={3} className={classes.gridStyle}>
          <TextField label="IN-PROGRESS" inputProps={labelInputProps} />
          <Paper>
            <TodoListComponent />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
