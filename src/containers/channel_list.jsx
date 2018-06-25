import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions';


class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel)
  }

  render() {
    return (
      <div className="channel-column">
        <h3 className="slackoff">Slack Knockoff</h3>
        <div>{
          this.props.channels.map((channel) => {
            return (
              <li
                key={channel}
                className={channel === this.props.selectedChannel ? 'active' : null}
                onClick={() => this.handleClick(channel)}
                role="presentation"
              >
                #{channel}
              </li>
            )
          })
        }</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
