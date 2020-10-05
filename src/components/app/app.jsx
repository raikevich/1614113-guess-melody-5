import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import ResultScreen from "../result-screen/result-screen";
import GameOverScreen from "../game-over-screem/game-over-screen";
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen";

const App = (props) => {
  const {errorsCount} = props;

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
        <Route path="/dev-artist" exact>
          <QuestionArtistScreen/>
        </Route>
        <Route path="/dev-genre" exact>
          <QuestionGenreScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
