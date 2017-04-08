import React from 'react';
import { hashHistory,
          IndexRoute,
          Route,
          Router,
          } from 'react-router';

import BattleResultsContainer from '../containers/BattleResultsContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';
import NewBattleContainer from '../containers/NewBattleContainer';
import NotFoundContainer from '../containers/NotFoundContainer';
import PromptContainer from '../containers/PromptContainer';

import Home from '../components/Home';
import Loading from '../components/Loading';
import Main from '../components/Main';


const Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="playerOne" component={PromptContainer} header="Player One" />
      <Route path="playerTwo/:playerOne" component={PromptContainer} header="Player Two" />
      <Route path="newBattle" component={NewBattleContainer} header="New Battle" />
      <Route path="confirmBattle" component={ConfirmBattleContainer} />
      <Route path="results" component={BattleResultsContainer} />
      <Route path="loading" component={Loading} />
      <Route path="*" component={NotFoundContainer} />
    </Route>
  </Router>
);

export default Routes;
