import PropTypes from 'prop-types';

function Book(props) {
  const { book, removeHandler } = props;

  return (

    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="submit" onClick={() => removeHandler(book)}>Remove</button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string),
  removeHandler: PropTypes.func.isRequired,

};

Book.defaultProps = {
  book: {},
};

export default Book;
