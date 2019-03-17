import React from 'react';
import Item from './Item';

class List extends React.Component{
  render(){
    return (
      <ul>
      {this.props.data.map( item => 
      	<Item name={item} />

      	)}
     
      </ul>
      )
  }
}

export default List;
