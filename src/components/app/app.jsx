import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import ResultScreen from "../result-screen/result-screen";
import GameOverScreen from "../game-over-screem/game-over-screen";
import GameScreen from "../game-screen/game-screen";

const App = (props) => {
  const {errorsCount, questions} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <WelcomeScreen errorsCount={errorsCount}/>
        </Route>
        <Route path="/login" exact>
          <SignInScreen/>
        </Route>
        <Route path="/result" exact>
          <ResultScreen/>
        </Route>
        <Route path="/lose" exact>
          <GameOverScreen/>
        </Route>
        <Route path="/game" exact>
          <GameScreen questions={questions} errorsCount={errorsCount}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
