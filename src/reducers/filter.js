import { initialState } from './books';

const CHANGE_FILTER = 'CHANGE_FILTER';

const filterReducer = (State = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { filter: action.payload };
    default:
      return State;
  }
};

export default filterReducer;
