function SearchBar({ value, handleChange }) {
  const handleInputChange = (e) => handleChange(e.target.value);

  return (
    <div className="SearchBar">
      <div className="container">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              type="search"
              className="input is-medium has-background-link-light"
              placeholder="Filter by brand or product"
              value={value}
              onChange={handleInputChange}
            />
          </div>
          <div className="control">
            <span
              className="button has-background-grey-dark has-text-danger
 is-medium mb-5"
            >
              Search
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
