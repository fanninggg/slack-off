import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';


const App = () => {
  return (
    <div className="app">
      <div className="channel-container">
        <div className="sidebar">
          <a href="http://www.benfanning.co.uk">
            <img src="https://avatars1.githubusercontent.com/u/33252472?s=400&v=4" alt="Chief Slacker" style={{ height: 50 + "px", width: 50 + "px", borderRadius: 50 + "%" }} />
          </a>
        </div>
        <ChannelList />
        <MessageList />
      </div>
    </div>
  );
};

export default App;
