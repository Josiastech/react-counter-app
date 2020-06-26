// Functional Component
import React from 'react';
import PropTypes from 'prop-types';
//  import React, { Fragment } from 'react';
const FirstApp = ({ saludo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>asaadsa</p>
    </>
  )
}

FirstApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

// Fragment -  Higher Order Component
// un HOC es un componenete padre que recibe
// otros componentes hijos


export default FirstApp