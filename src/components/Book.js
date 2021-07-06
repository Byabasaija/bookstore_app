import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bookRemoveAction } from '../actions';

function Book(props) {
  const { book, bookRemoveAction } = props;

  const handleRemoveBook = (book) => {
    bookRemoveAction(book);
  };
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="submit" onClick={() => handleRemoveBook(book)}>Remove</button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string),
  bookRemoveAction: PropTypes.func.isRequired,

};

Book.defaultProps = {
  book: {},
};

const mapDispatchToProps = {
  bookRemoveAction,
};
export default connect(null, mapDispatchToProps)(Book);
