// import { Fragment } from "react";
function listGroup() {
 const items = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Philadelphia',
    'Phoenix',
    'San Antonio',
    'San Diego',
 ];


  return (
    <>
     <h1>List Group</h1>
     <ul className="list-group">
        { items.map((item) => <li className="list-group-item">{item}</li> ) }
    </ul>
    </>
  );
}

export default listGroup;
