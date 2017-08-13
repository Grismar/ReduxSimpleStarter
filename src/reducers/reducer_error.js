export default function (state, action) {
  if (action.error) {
    return {
      error: true,
      message: action.payload.message
    }
  } else {
    return {
      error: false,
      message: 'none'
    }
  }
}
