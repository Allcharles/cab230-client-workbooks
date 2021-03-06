export function AnimalComponent({ name, number, eats }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{number}</p>
      <p>Eats the following</p>
      <ul>
        {eats.map((food) => (
          <li>{food}</li>
        ))}
      </ul>
    </div>
  );
}
