const bookReducer = (state, action) => {
      switch(action.type){
          case CREATE_BOOK:
              return { books: [...state.books, action.payload] }
          break;
          case REMOVE_BOOK:
              return { books: state.books.filter((item) => { item != action.payload }) }
          break;
          default:
              return state;
      }
}