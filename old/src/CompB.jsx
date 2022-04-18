import React, { Component } from 'react';

 class CompB extends Component {
  render() {
    return <div>
        <h2>This is from CompB</h2>
        <pre>{JSON.stringify(this.props)}</pre>
       
    </div>;
  }
}

export default CompB;
