import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { bookRemoveAction } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BookList = (props) => {
  const { books, removeBook } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  return (

    <div>

      <CategoryFilter />
      <table>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
        { books.map((abook) => (
          <Book
            book={abook}
            key={abook.id}
            removeHandler={handleRemoveBook}
          />
        ))}
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.bookReducer.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(bookRemoveAction(book));
  },
});

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

BookList.defaultProps = {
  books: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
