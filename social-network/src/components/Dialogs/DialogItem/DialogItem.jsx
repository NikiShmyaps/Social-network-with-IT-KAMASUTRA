import React from "react"
import classes from '../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={`${classes.dialog} ${classes.active}`}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;