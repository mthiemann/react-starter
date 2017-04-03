import React from 'react';
import { Link } from 'react-router';

import MainWrapper from './MainWrapper';


export default () => (
  <MainWrapper>
    You are at home!
    <br/>
    <Link to='/newBattle'><button className='btn btn-success'>New battle</button></Link>
  </MainWrapper>
)
