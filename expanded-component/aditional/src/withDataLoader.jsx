import React from 'react';

export function withDataLoader(HocComponent, url) {
  return class extends React.Component {
    state = {
      data: this.fetchData(url),
    };
    fetchData = (url) => {
      return fetch(url).then((response) => response.json());
    };

    render() {
      return <HocComponent data={this.state.data} {...this.props} />;
    }
  };
}
