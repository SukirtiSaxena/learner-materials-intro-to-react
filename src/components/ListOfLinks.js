function ListOfLinks(props) {
    return (
        <li><a className="links" href={props.link}>{props.name}</a></li>
    )
}

export default ListOfLinks;