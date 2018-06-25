import React from 'react';

function strToRGB(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return `#${"00000".substring(0, 6 - c.length)}${c}`;
}


const Message = (props) => {
const time = new Date(props.message.created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <div className="message-user-and-time">
        <div className="message-user">
          <span style={{ fontWeight: "bold", color: strToRGB(props.message.author) }}>{props.message.author}</span>
        </div>
        <span className="time">-  {time}</span>
      </div>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
