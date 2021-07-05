const initialState = {
  books: [{
    id: Math.random,
    title: 'First Book',
    cat: 'Action',
  },
  {
    id: Math.random,
    title: 'Second Book',
    cat: 'Biography',
  },
  {
    id: Math.random,
    title: 'Third Book',
    cat: 'History',
  },

  ],
};
const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...state.books, action.payload] };

    case REMOVE_BOOK:
    //   return { books: state.books.filter((item) => { return item != action.payload; }) };
      break;
    default:
      return state;
  }
};

export default bookReducer;
