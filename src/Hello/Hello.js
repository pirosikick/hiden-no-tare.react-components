import React, { PropTypes } from 'react';

/**
 * Hello component
 *
 * @param {object} props
 * @param {string} props.name - name
 */
function Hello(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;
