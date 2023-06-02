import { Component } from "react";
import './search-box.styles.css'

//initialize search box
class SearchBox extends Component {
    render(){
        const{className, placeholder} = this.props
    return(
    <input 
    className={`search-box ${className}`}
    type='search' 
    placeholder={placeholder} 
    onChange={this.props.onChangeHandler} />
)}}








export default SearchBox