import React from 'react';
import { Link } from 'react-router-dom';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      { props.match.params.id ? <p>Editing expense with ID: {props.match.params.id}</p> : <p>Edit Page</p> }
      <Link to="/">{`< Back`}</Link>
    </div>
  );
}

export default EditExpensePage;
