import React, { Component } from 'react';
import MoreFAQ from './MoreFAQ.js'

import { Route } from 'react-router-dom'

class FAQ extends Component {
  render() {
      return (
        <div>
        <h1>FAQ</h1>
        <Route path="/faq/more" component={MoreFAQ} />
        </div>
      )
  }
}

export default FAQ;
