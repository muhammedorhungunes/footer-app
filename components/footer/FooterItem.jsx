import Card from "../ui/Card";

const FooterItem = (props) => {
  return (
    <li className="m-4">
      <Card>
        <div className="w-full h-32 overflow-hidden rounded-t-sm">
            <h3 className="text-xl text-black text-center mt-8 text-blue-800">{"user ID: "}{props.userId}</h3>
        </div>
        <div className="text-center	p-4">
          <h3 className="text-xl text-black">{props.title}</h3>
          <address>{props.body}</address>
        </div>
      </Card>
    </li>
  );
};

export default FooterItem;
