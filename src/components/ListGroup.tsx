function ListGroup() {
  const items = [
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
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
