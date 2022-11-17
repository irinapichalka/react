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
    const { users } = this.props;
    const { text } = this.state;
    const usersToDisplay = users.filter(({ name }) =>
      name.toLowerCase().includes(text)
    );

    const htmlForUsers = usersToDisplay.map((user) => (
      <User name={user.name} age={user.age} key={user.id} />
    ));

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
