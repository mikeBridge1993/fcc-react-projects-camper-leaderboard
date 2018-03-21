import React from 'react';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
  return (
    <li className="list-group-item mb-1 d-flex rounded expense-list-item">
        <span>{this.props.index}</span>
        <span className="text-success text-left"><img src={this.props.img} className="rounded border border-secondary mr-2"/>{this.props.username}</span>
        <span>{this.props.recent}</span>
        <span className="ml-2">{this.props.alltime}</span>
    </li>
    );
  }
}