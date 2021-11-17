import CardText from "./CardText";

function CindyClawford() {
    const textItems = [
        { name: 'Species: Cat' },
        { name: 'Favourite Food(s): Mice' },
        { name: 'Birth Year: 2012' }
    ];
    return (
        <div className="card">
            <h3 className="card__text card__header">Cindy Clawford</h3>
            <img className="card__image" src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="A cute tabby kitten"></img>
            {textItems.map((textItem, i) => <CardText name={textItem.name} key={i} />)}
        </div>
    )
}

export default CindyClawford;