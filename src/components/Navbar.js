import ListOfLinks from './ListOfLinks';
function Navbar() {
    return (
        <nav className="nav__container">
            <ul className="nav__container ul ul__navbar">
             <ListOfLinks name="Home" link="home"/>
             <ListOfLinks name="Mews" link="mews"/>
             <ListOfLinks name="Contact" link="contact"/>
             <ListOfLinks name="About" link="https://www.cats.org.uk/sponsor"/>
            </ul>
        </nav>
    )
}

export default Navbar;