import FooterItem from "./FooterItem";

const FooterList = (props) => {
    return (
        <ul className="m-0 p-0 list-none	">
          {props.footers.map((footer) => (
            <FooterItem
              key={footer.id}
              userId={footer.userId}
              title={footer.title}
              body={footer.body}
            />
          ))}
        </ul>
      );
}

export default FooterList