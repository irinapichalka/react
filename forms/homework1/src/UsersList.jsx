import React from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: this.props.users,
      text: '',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;

    if (value === '') {
      this.setState({
        users: this.props.users,
        text: '',
      });
    }
    const newUsers = this.props.users.filter((user) => {
      return (
        user.name.toUpperCase() === value.toUpperCase() || user.age === value
      );
    });

    if (newUsers.length !== 0) {
      this.setState({
        users: newUsers,
      });
    } else {
      this.setState({
        users: [],
      });
    }

    this.setState({
      text: value,
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
