function ListGroup() {
  let items = [];
  items = [
    "Spiderman",
    "Iron-Man",
    "Mr Manhatten",
    "Dr Strange",
    "Batman",
    "Ms Marvel",
    "Dooms Day",
  ];

  return (
    <>
      <h1>List Group</h1>
      {items.length == 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => console.log(item, index)}
            className="list-group-item"
          >
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
