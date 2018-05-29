export const REQUEST_MESSAGE = 'REQUEST_MESSAGE'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const ERROR_MESSAGE = 'ERROR_MESSAGE'

export function requestMessage () {
    return {
      type: REQUEST_MESSAGE
    }
  }
  
export function receiveMessage (msg) {
    return {
        type: RECEIVE_MESSAGE,
        msg: msg.message
    }
}

export function errorMessage () {
    return {
        type: ERROR_MESSAGE
    }
}

export function fetchMsg () {
    return dispatch => {
        return fetch('/api/message')
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
                    throw new Error(response.statusText)
            })
            .then(
                msg => dispatch(receiveMessage(msg)),
                () => dispatch(errorMessage())
            )
    }
}
