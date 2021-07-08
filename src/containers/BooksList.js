import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { bookRemoveAction, changeFilterAction } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/styles.css';

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

      <div className="d-flex flex-column">
        {
            books.filter((book) => book.category === filter1 || filter1 === 'All' || filter1 === '').map((abook) => (
              <Book
                book={abook}
                key={abook.id}
                removeHandler={handleRemoveBook}
                filter={filter1}
              />
            ))

         }

      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.bookReducer.books,
  filter1: state.filterReducer.filter,
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
