import React from "react"
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={`${classes.dialog} ${classes.active}`}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  let dialogs = [
    {id:1, name: "Dimych"},
    {id:2, name: "Andrey"},
    {id:3, name: "Sveta"},
    {id:4, name: "Sasha"},
    {id:5, name: "Nikitos"}
  ];

  let messages = [
    {id:1, message: "Hi"},
    {id:2, message: "How is your it-camasutra?"},
    {id:3, message: "Yo"},
    {id:4, message: "Yo"},
    {id:5, message: "Yo"}
  ];

  let dialogsElements = dialogs.map (
    dialog => <DialogItem name={dialog.name} id={dialog.id}/>
  );

  let messagesElements = messages.map (
    message => <Message message={message.message} id={message.id}/>
  )

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;