import icon from '../cat.png'
import ListOfLinks from './ListOfLinks';
function Footer() {
  const list1Items = [
    { name: "About", link: "https://www.cats.org.uk/sponsor" },
    { name: "Belly Rubs", link: "https://www.cats.org.uk/sponsor" },
    { name: "Donate", link: "https://www.cats.org.uk/sponsor" },
    { name: "Cat Nip", link: "https://www.cats.org.uk/sponsor" },
    { name: "Customers", link: "https://www.cats.org.uk/sponsor" }
  ];
  const list2Items = [
    { name: "Resources", link: "https://www.cats.org.uk/sponsor" },
    { name: "Dogs", link: "https://www.cats.org.uk/sponsor" },
    { name: "Blog", link: "https://www.cats.org.uk/sponsor" },
    { name: "eBooks", link: "https://www.cats.org.uk/sponsor" },
    { name: "Revenge", link: "https://www.cats.org.uk/sponsor" }
  ];
  const list3Items = [
    { name: "Contact", link: "https://www.cats.org.uk/sponsor" },
    { name: "Help", link: "https://www.cats.org.uk/sponsor" },
    { name: "Blog", link: "https://www.cats.org.uk/sponsor" },
    { name: "Meow", link: "https://www.cats.org.uk/sponsor" },
    { name: "Mice", link: "https://www.cats.org.uk/sponsor" }
  ];
  const list4Items = [
    { name: "Ts & Cs", link: "https://www.cats.org.uk/sponsor" },
    { name: "Privacy Policy", link: "https://www.cats.org.uk/sponsor" }
  ];
  return (
    <footer>
      <section className="nav__container footer">
        <ul className="footer__section ul">
          {list1Items.map((listItem, i) =>
            <ListOfLinks name={listItem.name} link={listItem.link} key={i} />)}
        </ul>
        <ul className="footer__section ul">
          {list2Items.map((listItem, i) =>
            <ListOfLinks name={listItem.name} link={listItem.link} key={i} />)}
        </ul>
        <ul className="footer__section ul">
          {list3Items.map((listItem, i) =>
            <ListOfLinks name={listItem.name} link={listItem.link} key={i} />)}
        </ul>
        <ul className="footer__section ul">
          {list4Items.map((listItem, i) =>
            <ListOfLinks name={listItem.name} link={listItem.link} key={i} />)}
          <li className="links">&copy; 2021 TR Inc.</li>
          <i><img className="icon" src={icon} alt="A ginger cat silhouette" /></i>
        </ul>
      </section>
    </footer>
  )
}

export default Footer;