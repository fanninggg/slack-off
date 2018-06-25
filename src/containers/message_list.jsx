// import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// import { fetchMessages } from '../actions';
// import Message from '../components/message';
// import MessageForm from './message_form';

// class MessageList extends Component {
//   componentWillMount() {
//     this.fetchMessages();
//   }

//   componentDidMount() {
//     this.refresher = setInterval(this.fetchMessages, 5000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.refresher);
//   }

//   fetchMessages = () => {
//     this.props.fetchMessages(this.props.selectedChannel);
//   }

// }

// function mapStateToProps(state) {
//   return {
//     messages: state.messages,
//     selectedChannel: state.selectedChannel
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchMessages }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }


  render() {
    return (
      <div className="channel-container">
        <div className="sidebar">
          <img src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1692/s300/le-wagon-logo.png" alt="Le Wagon" style={{ height: 50 + "px", width: 50 + "px" }} />
        </div>
        <div className="channel-column">
          <h3>Slack Knockoff</h3>
          <p>#{this.props.selectedChannel}</p>
        </div>
        <div className="channel-content">
          <div className="channel-title">
            <h3>Channel #{this.props.selectedChannel}</h3>
          </div>
          <hr />
          <div className="channel-messages">
            {
              this.props.messages.map((message) => {
                return <Message key={message.id} message={message} />;
              })
            }
          </div>
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

