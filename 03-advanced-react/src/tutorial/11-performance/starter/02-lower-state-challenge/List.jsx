import Person from './Person';

const List = ({ people }) => {
  return (
    <div className="container">
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;
