import CardText from "./CardText";

function MissPurrfect() {
    const textItems = [
        { name: 'Species: Cat' },
        { name: 'Favourite Food(s): Wet food, dry food' },
        { name: 'Birth Year: 2016' }
    ];
    return (
        <div className="card">
            <h3 className="card__text card__header">Little Miss Purrfect</h3>
            <img className="card__image" src="https://learnwebcode.github.io/json-example/images/cat-2.jpg" alt="A gray fluffy kitten"></img>
            {textItems.map((textItem, i) => <CardText name={textItem.name} key={i} />)}
        </div>
    )
}

export default MissPurrfect;