import { RECEIVE_MESSAGE, ERROR_MESSAGE } from '../actions'

export function messages (state = { message: "Empty Message" }, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return { message: action.msg };
    case ERROR_MESSAGE:
      return { message: "Empty Message" };
    default:
      return state
  }
}