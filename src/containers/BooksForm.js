import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bookCreateAction } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'title') {
      const title = event.target.value;
      this.setState({
        title,
      });
    } else if (event.target.name === 'category') {
      const category = event.target.value;
      this.setState({
        category,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { category, title } = this.state;
    const id = Math.random().toString();
    const { addBook } = this.props;
    addBook({ id, category, title });
    this.setState({
      category: '',
      title: '',
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title, category } = this.state;
    return (

      <div>
        <form>
          <input onChange={(e) => this.handleChange(e)} name="title" value={title} />
          <select onChange={(e) => this.handleChange(e)} name="category">
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
            ;
          </select>
          <div>{category}</div>
          <button type="submit" onClick={(e) => this.handleSubmit(e)}> Submit</button>
        </form>

      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => {
    dispatch(bookCreateAction(book));
  },
});

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
