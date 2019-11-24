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
  Button
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
  }
}));

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
          <Paper>
            <ListSubheader>TODO</ListSubheader>
            <TodoListComponent />
          </Paper>
        </Grid>
        <Grid item xs={3} className={classes.gridStyle}>
          <Paper>
            <ListSubheader>IN-PROGRESS</ListSubheader>
            <TodoListComponent />
          </Paper>
        </Grid>
        <Grid item xs={3} className={classes.gridStyle}>
          <Paper>
            <ListSubheader>DONE</ListSubheader>
            <TodoListComponent />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
