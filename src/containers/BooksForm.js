import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <input />
      <select>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
        ;
      </select>
      <button type="submit"> Submit</button>

    </div>
  );
};

export default BooksForm;
