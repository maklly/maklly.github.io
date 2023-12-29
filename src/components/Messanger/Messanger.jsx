import React, { useEffect, useState } from 'react';
import * as signalR from "@microsoft/signalr";
import { sendMessage } from '../../api';

const Messages = () => {
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5213/api/ChatHub")
      .build();

    connection.on("ReceiveMessage", (user, message) => {
      console.log(user + ": " + message);
    });

    connection.start()
      .catch(err => console.error(err.toString()));

    // Clean up the connection on unmount
    return () => {
      connection.stop();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    sendMessage(userId, message)
      .then(response => console.log(response))
      .catch(error => console.error('Error:', error));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userId} onChange={e => setUserId(e.target.value)} placeholder="User ID" />
        <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Messages;


// import React from 'react';
// import classes from './Messanger.module.scss';
//
// const Messenger = () => {
//   return (
//     <div className={classes.messenger}>
//       <div className={classes.messenger__direct}>
//         <div className={classes.messenger__direct__title}>
//           <button className={classes.active}>Inbox</button>
//           <button>Unread</button>
//           <button>Sent</button>
//         </div>
//         <div className={`${classes.messenger__direct__user} ${classes.activeText}`}>
//           <div className={classes.messenger__direct__av}></div>
//           <div className={classes.messenger__direct__info}>
//             <h4>John Doe</h4>
//             <p>Hey there!</p>
//           </div>
//           <div className={classes.messenger__direct__time}>10:30 AM</div>
//         </div>
//       </div>
//       <div className={classes.messenger__content}>
//         <div className={classes.dialog}>
//           <div className={classes.dialogHeader}>
//             <h2>Conversation with John Doe</h2>
//           </div>
//           <div className={classes.dialogContent}>
//             <div className={classes.message}>
//               <div className={classes.messageAvatar}></div>
//               <div className={classes.messageText}>
//                 <p>Hello!</p>
//               </div>
//             </div>
//             <div className={classes.message}>
//               <div className={classes.messageAvatar}></div>
//               <div className={classes.messageText}>
//                 <p>Hi there! How can I help you?</p>
//               </div>
//             </div>
//           </div>
//           <div className={classes.dialogInput}>
//             <textarea placeholder="Type your message..." className={classes.textarea}></textarea>
//             <button className={classes.sendButton}>Send</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Messenger;
