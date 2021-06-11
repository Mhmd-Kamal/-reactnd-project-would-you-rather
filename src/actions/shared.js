import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import {
  _getQuestions as getQuestions,
  _getUsers as getUsers,
} from "../utils/_DATA";

const AUTHED_ID = "tylermcginnis";

export function handleReceiveData() {
  return (dispatch) => {
    dispatch(setAuthedUser(AUTHED_ID));
    getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions));
    });
    getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
  };
}
