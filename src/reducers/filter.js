const CHANGE_FILTER = 'CHANGE_FILTER';

const filterReducer = (State = 'ALL', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return State;
  }
};

export default filterReducer;
