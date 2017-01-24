export default function({ dispatch }) {
  return next => action => {
    // if action has no payload or the payload has not .then() property
    if(!action.payload || !action.payload.then)
      return next(action);

    // make sure action's promise resolves.
    action.payload.then(response => {
      // create new action with old type but replace response data.
      const newAction = { ...action, payload:response}
      dispatch(newAction);
    });
  }
}
