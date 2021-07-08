import PropTypes from 'prop-types';
import './Book.css';

function Book(props) {
  const { book, removeHandler } = props;

  return (

    <div className="d-flex Book-Panel mx-auto">
      <div>
        <h3 className="category">
          {' '}
          {book.category}
          {' '}
        </h3>
        <h1 className="title">
          {book.title}
        </h1>
        <div>
          <span className="com-rem-ed">comments</span>
          <button type="submit" onClick={() => removeHandler(book)} className="com-rem-ed btn-remove">Remove</button>
          <span className="com-rem-ed">edit</span>
        </div>
      </div>

      <div className="d-flex justify-content-center ">
        <div className="">
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
            {/* <div className="progress-value">90%</div> */}
          </div>

        </div>
      </div>

      <div>
        <div className="Percent-Complete">64%</div>
        <div className="Completed">completed</div>
      </div>

      <div className="rect-update">
        <span className="Update-progress">update progress</span>
      </div>

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
