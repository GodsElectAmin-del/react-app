function ListGroup() {
  let items = [
    "Spiderman",
    "Iron-Man",
    "Mr Manhatten",
    "Dr Strange",
    "Batman",
    "Ms Marvel",
    "Dooms Day",
  ];
  items = [];

  return (
    <>
      <h1>List Group</h1>
      {items.length == 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// TODO Restore the List Group build
// TODO add an Condition for when the list is empty
// TODO logging cklicking events

export default ListGroup;
