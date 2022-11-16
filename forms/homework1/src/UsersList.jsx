import React from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: props.users,
      text: '',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    const newUsers = this.props.users.filter((user) => {
      console.log(value);
      console.log(user.name);
      return (
        user.name.toUpperCase() === value.toUpperCase() || user.age === value
      );
    });

    console.log(newUsers);
    if (newUsers.length !== 0) {
      this.setState({
        users: newUsers,
      });
    }

    this.setState({
      text: value,
      //users: this.props.users,
    });
  };

  render() {
    const htmlForUsers = this.state.users.map((user) => (
      <User name={user.name} age={user.age} key={user.id} />
    ));

    return (
      <div>
        <Filter
          onChange={this.handleChange}
          filterText={this.state.text}
          count={this.state.users.length}
        />
        <ul className='users'>{htmlForUsers}</ul>
      </div>
    );
  }
}

export default UsersList;
