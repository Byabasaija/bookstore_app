import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const { filterChange } = props;

  return (
    <div className="mx-auto FILTER-Panel">
      <select onChange={(e) => filterChange(e.target.value)} className="Form-Panel w-25 ">
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
        ;
      </select>
    </div>

  );
};

CategoryFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
