import CardText from "./CardText";

function Gwumpy() {
  const textItems = [
    { name: 'Species: Cat' },
    { name: 'Favourite Food(s): Caviar' },
    { name: 'Birth Year: 1984' }
  ];
  return (
    <div className="card">
      <h3 className="card__text card__header">Mr Gwumpy</h3>
      <img className="card__image" src="https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg" alt="A grumpy cat, frowning angrily"></img>
      {textItems.map((textItem, i) => <CardText name={textItem.name} key={i} />)}
    </div>
  )
}

export default Gwumpy;