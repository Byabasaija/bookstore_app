const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const bookCreateAction = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

const bookRemoveAction = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const changeFilterAction = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export { bookCreateAction, bookRemoveAction, changeFilterAction };
