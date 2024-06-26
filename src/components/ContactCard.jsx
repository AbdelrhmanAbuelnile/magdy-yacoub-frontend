/* eslint-disable react/prop-types */
import { BiTrash } from "react-icons/bi";
import user1 from "../images/user.png";
import user2 from "../images/user2.png";

const ContactCard = (props) => {
  const { id, name, age, gender, email } = props.contact
  return (
    <div className="flex justify-between items-center hover:bg-white duration-200 px-2 w-full border-y border-slate-300" onClick={() => props.selectContactHandler(props.contact)}>
      <div className="flex justify-center items-center gap-4">
      <img className="w-12 rounded-full" src={gender.toLowerCase()[0] == "f" ? user2 : user1} alt="user" />
      <div className="flex flex-col justify-center items-start gap-0">

          <div className="font-semibold text-xl">{name}</div>
          <p>{age}, {gender}</p>
          <p>{email}</p>
      </div>
      </div>
      <BiTrash
        className="trash alternate icon text-red-500 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          props.clickHandler(id);
        }}
      />
    </div>
  );
};

export default ContactCard;
