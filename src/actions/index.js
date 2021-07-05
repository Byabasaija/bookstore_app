const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookCreateAction = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

const bookRemoveAction = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

export { bookCreateAction, bookRemoveAction };
