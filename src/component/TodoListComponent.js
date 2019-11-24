import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  withStyles
} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";

const useStyles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
});

class TodoListComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <List className={classes.root}>
        {[0, 1, 2, 3].map(value => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={value} role={undefined} dense button>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  /**checked={checked.indexOf(value) !== -1}**/
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    );
  }
}
export default withStyles(useStyles)(TodoListComponent);
