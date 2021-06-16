import { RECEIVE_USERS, SAVE_ANSWER_TO_USER } from "../actions/users";
import { SAVE_QUESTION } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case SAVE_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: [...state[question.author].questions, question.id],
        },
      };

    case SAVE_ANSWER_TO_USER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: { ...state[authedUser].answers, [qid]: answer },
        },
      };
    default:
      return state;
  }
}
