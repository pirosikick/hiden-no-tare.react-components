import React, { PropTypes } from 'react';

/**
 * Hello component
 *
 * @param {string} props.name - name
 */
function Hello({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;
