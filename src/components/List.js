import React from 'react';
import ListItem from './ListItem';
import axios from 'axios';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users : [],
      alltimeToggle: true,
      recentToggle: true
    }

    this.sortAlltime = this.sortAlltime.bind(this);
    this.sortRecent = this.sortRecent.bind(this);
  }
  
  componentDidMount() {
    axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`)
      .then(res => {
        const users = res.data;
        this.setState(() => {
          return {
            users
          }
        });
        console.log(this.state)
        console.log(this.state.users)
      })
  }

  sortAlltime = () => {

    if(this.state.alltimeToggle){
      
      this.setState((prevState) => {
        return {
          users: prevState.users.sort(function (a, b) {
            return b.alltime - a.alltime;
          }),
          alltimeToggle: !prevState.alltimeToggle
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          users: prevState.users.sort(function (a, b) {
            return a.alltime - b.alltime;
          }),
          alltimeToggle: !prevState.alltimeToggle
        }
      })
    }
  }

  sortRecent = () => {
    if(this.state.recentToggle){
      
      this.setState((prevState) => {
        return {
          users: prevState.users.sort(function (a, b) {
            return a.recent - b.recent;
          }),
          recentToggle: !prevState.recentToggle
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          users: prevState.users.sort(function (a, b) {
            return b.recent - a.recent;
          }),
          recentToggle: !prevState.recentToggle
        }
      })
    }
  }

  render() {
    return (   
      <div className="container-fluid mt-5">
        <div className="content row d-flex justify-content-center align-items-center">
          <div className="col-11">
            <ul className="list-group mb-2 pb-0 d-flex align-items-center">
            <li className="list-group-item rounded expense-list-header">
                <span>#</span>
                <span className="text-left">Camper Profile</span>
                <span>Last 30 days Points<i className="fa fa-sort ml-2" onClick={this.sortRecent}  aria-hidden="true"></i></span>
                <span className="ml-2">All Time Points <i className="fa fa-sort ml-2" onClick={this.sortAlltime} aria-hidden="true"></i></span>
            </li>
            {this.state.users.length > 0 && this.state.users.map((el, i) => {
              return <ListItem key={el.username} {...el} index={i+1} />
            })}
          </ul>
          </div>
        </div>
      </div>
      );
    } 
  }