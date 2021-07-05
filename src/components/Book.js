import PropTypes from 'prop-types';

function Book(props) {
  const { book } = props;
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.cat}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.isRequired,
};

export default Book;
