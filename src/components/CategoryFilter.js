const CategoryFilter = () => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select>
      {categories.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
      ;
    </select>
  );
};

export default CategoryFilter;
