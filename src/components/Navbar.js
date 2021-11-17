import ListOfLinks from './ListOfLinks';
function Navbar() {
    const listItems = [
          { name: "Home", link:"home" },
          { name: "Mews", link:"mews" },
          { name: "Contact", link:"contact" },
          { name: "About", link:"https://www.cats.org.uk/sponsor" }
    ];
    return (
        <nav className="nav__container">
            <ul className="nav__container ul ul__navbar">
            {listItems.map((listItem, i) => 
            <ListOfLinks name={listItem.name} link={listItem.link} key={i} />)}
           </ul>
        </nav>
    )
}

export default Navbar;