import { receiveQuestions, saveAnswer } from "./questions";
import { receiveUsers, saveAnswerToUser } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import {
  _getQuestions as getQuestions,
  _getUsers as getUsers,
  _saveQuestionAnswer as saveQuestionAnswer,
} from "../utils/_DATA";

// const AUTHED_ID = "tylermcginnis";

export function handleReceiveData() {
  return (dispatch) => {
    dispatch(showLoading());
    // dispatch(setAuthedUser(AUTHED_ID));
    getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions));
      })
      .then(() => {
        getUsers().then((users) => {
          dispatch(receiveUsers(users));
          dispatch(hideLoading());
        });
      });
  };
}

export function handleSaveAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(saveAnswer({ authedUser, qid, answer }));
      })
      .then(() => {
        dispatch(saveAnswerToUser({ authedUser, qid, answer }));
      })
      .then(() => {
        dispatch(hideLoading());
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
