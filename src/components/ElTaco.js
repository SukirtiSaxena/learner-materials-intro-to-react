import CardText from "./CardText";

function ElTaco() {
    const textItems = [
        { name: 'Species: Cat' },
        { name: 'Favourite Food(s): tequila, bar snax' },
        { name: 'Birth Year: 1995' }
    ];
    return (
        <div className="card">
            <h3 className="card__text card__header">El Taco</h3>
            <img className="card__image" src="https://i.imgflip.com/mh1vd.jpg" alt="A cat wearing a sombrero, drinking tequila"></img>
            {textItems.map((textItem, i) => <CardText name={textItem.name} key={i} />)}
        </div>
    )
}

export default ElTaco;