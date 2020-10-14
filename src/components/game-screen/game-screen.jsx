import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {GameType} from "../../const";
import {Redirect} from "react-router-dom";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen";
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen";

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (!question || step >= question.length) {
      return (
        <Redirect to="/"/>
      );
    }

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <QuestionArtistScreen
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1
              }));
            }}
            question={question}
          />
        );
      case GameType.GENRE:
        return (
          <QuestionGenreScreen
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1
              }));
            }}
            question={question}
          />
        );
    }

    return (
      <Redirect to="/"/>
    );
  }
}

GameScreen.propTypes = {
  questions: PropTypes.array.isRequired
}

export default GameScreen;
