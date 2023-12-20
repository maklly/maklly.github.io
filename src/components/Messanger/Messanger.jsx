import React from 'react';
import classes from './Messanger.module.scss';

const Messenger = () => {
  return (
    <div className={classes.messenger}>
      <div className={classes.messenger__direct}>
        <div className={classes.messenger__direct__title}>
          <button className={classes.active}>Inbox</button>
          <button>Unread</button>
          <button>Sent</button>
        </div>
        <div className={`${classes.messenger__direct__user} ${classes.activeText}`}>
          <div className={classes.messenger__direct__av}></div>
          <div className={classes.messenger__direct__info}>
            <h4>John Doe</h4>
            <p>Hey there!</p>
          </div>
          <div className={classes.messenger__direct__time}>10:30 AM</div>
        </div>
      </div>
      <div className={classes.messenger__content}>
        <div className={classes.dialog}>
          <div className={classes.dialogHeader}>
            <h2>Conversation with John Doe</h2>
          </div>
          <div className={classes.dialogContent}>
            <div className={classes.message}>
              <div className={classes.messageAvatar}></div>
              <div className={classes.messageText}>
                <p>Hello!</p>
              </div>
            </div>
            <div className={classes.message}>
              <div className={classes.messageAvatar}></div>
              <div className={classes.messageText}>
                <p>Hi there! How can I help you?</p>
              </div>
            </div>
          </div>
          <div className={classes.dialogInput}>
            <textarea placeholder="Type your message..." className={classes.textarea}></textarea>
            <button className={classes.sendButton}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
