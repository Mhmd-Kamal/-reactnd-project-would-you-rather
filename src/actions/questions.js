import { showLoading, hideLoading } from "react-redux-loading-bar";
import { _saveQuestion } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}

export function saveAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveQuestion({ optionOneText, optionTwoText, author }) {
  return (dispatch) => {
    // dispatch(showLoading());
    return (
      _saveQuestion({ optionOneText, optionTwoText, author })
        .then((question) => {
          dispatch(saveQuestion(question));
        })
        // .then(() => {
        //   dispatch(hideLoading());
        // })
        .catch((e) => {
          console.log(e);
        })
    );
  };
}
