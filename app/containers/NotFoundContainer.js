import React from 'react';

import Countdown from '../utils/Countdown';
import NotFound from '../components/NotFound';


class NotFoundContainer extends React.Component {
  
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  
  componentWillReceiveProps (nextProps) {
    if(nextProps === 0) {
      this.context.router.push('/');
    }
  }
  
  render () {
    return (
      <div>
        <Countdown seconds={5}>
          <NotFound />
        </Countdown>
      </div>
    )
  }
}

export default NotFoundContainer;