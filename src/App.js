import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Memo from './memo/Memo';
import AddForm from './forms/AddForm';
import FindForm from './forms/FindForm';
import DelForm from './forms/DelForm';

class App extends Component {
  td = {
    width: "250px"
  }

  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <div>
        <h1>Memo</h1>
        <AddForm />
        <hr />
        <table>
          <tbody>
            <tr>
              <td style={this.td}><FindForm /></td>
              <td style={this.td}><DelForm /></td>
            </tr>
          </tbody>
        </table>
        <Memo />
      </div>
    );
  }
}

export default connect()(App);
