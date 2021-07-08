import PropTypes from 'prop-types';
import './Book.css';

function Book(props) {
  const { book, removeHandler } = props;

  return (

    <div className="d-flex">
      <div>
        {book.category}
        {book.title}
      </div>

      <div className="row d-flex justify-content-center mt-100">
        <div className="col-md-6">
          <div className="progress blue">
            {' '}
            <span className="progress-left">
              {' '}
              <span className="progress-bar" />
              {' '}
            </span>
            {' '}
            <span className="progress-right">
              {' '}
              <span className="progress-bar" />
              {' '}
            </span>
            <div className="progress-value">90%</div>
          </div>

        </div>
      </div>

      <button type="submit" onClick={() => removeHandler(book)} className="btn btn-primary">Remove</button>

    </div>

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
