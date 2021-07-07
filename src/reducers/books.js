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

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...state.books, action.payload] };

    case REMOVE_BOOK:
      return { books: state.books.filter((item) => item !== action.payload) };

    default:
      return state;
  }
};

export default bookReducer;
