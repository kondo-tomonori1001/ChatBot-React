import React from 'react';
// materialUI
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// image
import NoProfile from '../assets/img/no-profile.png';
import MyProfile from '../assets/img/my-profile.png';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
}));

const chat = (props) => {
  // answer or question
  const isQuestion = (props.type === "question");
  const classes = isQuestion ? 'p-chat__row': 'p-chat__reverse';
  return(
    <div>
      <ListItem className = {classes}>
        <ListItemAvatar>
          {/* 条件分岐 */}
          {isQuestion ? (
            // isQuestionがtrue
            <Avatar alt="icon" src={MyProfile} />
            ) : (
            // isQuestionがfalse
            <Avatar alt="icon" src={NoProfile} />
          )}
        </ListItemAvatar>
        <div className="p-chat__bubble">{props.content}</div>
      </ListItem>
    </div>
  )
}

export default chat;