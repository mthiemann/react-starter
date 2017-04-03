import React from 'react';


export default (props) => (
  <div className='jumbotron text-center'>
    <h1 className='text-center'>#404 - Page not found!</h1>
    <p>You will be redirected in {props.seconds} seconds</p>
  </div>
)