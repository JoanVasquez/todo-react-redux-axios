export const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">GET Request</div>
      <ul className="list-group list-group-flush">
        {props.results?.map((item) => (
          <li className="list-group-item">{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};
