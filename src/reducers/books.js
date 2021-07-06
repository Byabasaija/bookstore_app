const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [{
    id: Math.random(),
    title: 'First Book',
    cat: 'Action',
  },
  {
    id: Math.random(),
    title: 'Second Book',
    cat: 'Biography',
  },
  {
    id: Math.random(),
    title: 'Third Book',
    cat: 'History',
  },

  ],
};

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
