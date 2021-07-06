const initialState = {
  books: [{
    id: Math.random().toString(),
    title: 'First Book',
    category: 'Action',
  },
  {
    id: Math.random().toString(),
    title: 'Second Book',
    category: 'Biography',
  },
  {
    id: Math.random().toString(),
    title: 'Third Book',
    category: 'History',
  },

  ],
};
const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookReducer = (State = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...State.books, action.payload] };

    case REMOVE_BOOK:
      return { books: State.books.filter((item) => item !== action.payload) };

    default:
      return State;
  }
};

export default bookReducer;
