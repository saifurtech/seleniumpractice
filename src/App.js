import React from "react";
import "./App.css";
import TodoListComponent from "./component/TodoListComponent";
import {
  Grid,
  makeStyles,
  Paper,
  ListSubheader
} from "@material-ui/core";

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
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={(classes.root, "App")}
      spacing={2}
      justify="center"
    >
      <Grid item xs={3}>
        <Paper>
          <ListSubheader>TODO</ListSubheader>
          <TodoListComponent />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>
          <ListSubheader>IN-PROGRESS</ListSubheader>
          <TodoListComponent />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>
          <ListSubheader>DONE</ListSubheader>
          <TodoListComponent />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
