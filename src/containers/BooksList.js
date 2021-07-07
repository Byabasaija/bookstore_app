import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { bookRemoveAction, changeFilterAction } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BookList = (props) => {
  const {
    books, removeBook, filterBook, filter1,
  } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (filter) => {
    filterBook(filter);
  };

  return (

    <div>

      <CategoryFilter filterChange={handleFilterChange} />
      <div>
        State filter:
        {filter1}
      </div>
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
  filter1: state.bookReducer.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(bookRemoveAction(book));
  },
  filterBook: (filter) => {
    dispatch(changeFilterAction(filter));
  },
});

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
  filter1: PropTypes.string,
};

BookList.defaultProps = {
  books: [],
  filter1: 'ALL',
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
