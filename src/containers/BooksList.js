import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = (props) => {
  const { books } = props;

  return (
    <table>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
      { books.map((abook) => (<Book book={abook} key={abook} />))}
    </table>
  );
};
const mapStateToProps = (state) => ({ books: state.bookReducer.books });
BookList.propTypes = {
  books: PropTypes.isRequired,
};

export default connect(mapStateToProps)(BookList);
