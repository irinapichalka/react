import React from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;

    //if(value === '')

    this.setState({
      text: value,
    });
  };

  render() {
    let htmlForUsers = [];

    if (this.state.text === '') {
      htmlForUsers = this.props.users.map((user) => (
        <User name={user.name} age={user.age} key={user.id} />
      ));
    } else {
      htmlForUsers = this.props.users
        .filter((user) => {
          return (
            user.name.toUpperCase() === this.state.text.toUpperCase() ||
            user.age === this.state.text
          );
        })
        .map((user) => <User name={user.name} age={user.age} key={user.id} />);
    }

    return (
      <div>
        <Filter
          onChange={this.handleChange}
          filterText={this.state.text}
          count={htmlForUsers.length}
        />
        <ul className='users'>{htmlForUsers}</ul>
      </div>
    );
  }
}

export default UsersList;
