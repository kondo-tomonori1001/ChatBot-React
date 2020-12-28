import React from 'react';
import { Chat } from './index';
import { createStyles,makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles(() => (
  createStyles({
    'chats':{
      height:400,
      padding:'0',
      overflow:'auto',
    }
  })
));

const Chats = (props) => {
  // material-UI
  const classes = useStyles();
  return(
    <div>
      <List id={"scroll-area"} className={classes.chats}>
        {props.chats.map((chat,index) => {
          return <Chat content={chat.text} type={chat.type} key={index.toString()}/>
        })}
      </List>
    </div>
  )
}

export default Chats;