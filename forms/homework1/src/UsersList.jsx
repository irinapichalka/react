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

    this.setState({
      text: value,
    });
  };

  render() {
    const htmlForUsers = this.state.users.map((user) => (
      <User name={user.name} age={user.age} id={user.id} />
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
