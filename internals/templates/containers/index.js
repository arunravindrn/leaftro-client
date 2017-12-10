/*****************************
 * Author : <%= username %>
 * Created on : <%= date %>
 *****************************/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import styles from './styles';
import saga from './sagas';
import reducer from './reducers';
import actions from './actions';
import selectors from './selectors';


class <%= name %> extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  componentWillMount() {

  }

  render() {
    <div></div>
  }
}

<%= name %>.propTypes = {

}

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: '<%= camelCaseName %>', reducer });
const withSaga = injectSaga({ key: '<%= camelCaseName %>', saga })


export default compose(
  withReducer,
  withSaga,
  withConnect
)(<%= name %>);
