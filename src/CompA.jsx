import React, { Component } from 'react';
import CompB from './CompB';

 class CompA extends Component {
    name='sukhdeb';
    middlename='patra'
  render() {
    return <div>
        <h1>This is from compA</h1>
        <p>name value:--{this.name}<br/>middlename value:--{this.middlename}</p>
        
        <CompB Name={this.name}middlename={this.middlename}/>
    </div>;
  }
}

export default CompA;
