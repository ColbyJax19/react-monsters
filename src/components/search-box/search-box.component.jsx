import './search-box.styles.css';

//initialize search box
const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
