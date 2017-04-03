import React from 'react';
import { hashHistory,
          IndexRoute,
          Route,
          Router
          } from 'react-router';

import BattleResultsContainer from '../containers/BattleResultsContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';
import NewBattleContainer from '../containers/NewBattleContainer';
import PromptContainer from '../containers/PromptContainer';

import Home from '../components/Home';
import Loading from '../components/Loading';
import Main from '../components/Main';
import NotFound from '../components/NotFound';


const Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header='Player One' component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
      <Route path='newBattle' header='New Battle' component={NewBattleContainer} />
      <Route path='confirmBattle' component={ConfirmBattleContainer} />
      <Route path='results' component={BattleResultsContainer}/>
      <Route path='loading' component={Loading} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
);

export { Routes };