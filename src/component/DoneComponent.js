import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  IconButton,
  Dialog,
  DialogContent,
  Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, dialogueOpen } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {dialogueOpen ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={dialogueOpen}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

class DoneComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogueOpen: false,
      done: []
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleToDoList = this.handleToDoList.bind(this);
  }

  handleOpen = e => {
    this.setState({
      dialogueOpen: true,
      header: e.target.innerText,
      body: this.props.done.find(
        x => x.header.trim() === e.target.innerText.trim()
      ).body
    });
  };

  handleClose = e =>
    this.setState({
      dialogueOpen: false
    });

  handleToDoList = todo => {
    this.props.handleToDoList(todo);
  };

  onDrop(data) {
    console.log(data);
    this.props.inProgress.concat(data);
  }

  render() {
    const { classes } = this.props;
    if (classes === undefined) {
      return;
    }
    return (
      <>
        <List className={classes.root}>
          {this.props.done.map(value => {
            const labelId = `checkbox-list-label-${value.header}`;

            return (
              <ListItem key={value} role={undefined} dense button>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    tabIndex={-1}
                    disabled
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={value.header}
                  onClick={this.handleOpen}
                />
              </ListItem>
            );
          })}
        </List>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby={this.state.header}
          open={this.state.dialogueOpen}
        >
          <DialogTitle id={this.state.header}>{this.state.header}</DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>{this.state.body}</Typography>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}
export default withStyles(useStyles)(DoneComponent);
