/* eslint-disable react/prop-types */
import user1 from "../images/user.png";
import user2 from "../images/user2.png";
import { IoClose } from "react-icons/io5";

const ContactDetail = ({ contact, onClose }) => {
  const { name, age, gender, email } = contact;

  return (
    <div className="w-1/3 bg-white p-2 rounded-md shadow-md shadow-slate-400">
      <div className="w-full relative">
        <div className="">
          <img width={450} src={gender.toLowerCase()[0] == "f" ? user2 : user1} alt="user" />
        </div>
        <div className="">
          <div className="">{name}</div>
          <div className="">Age: {age}</div>
          <div className="">Gender: {gender}</div>
          <div className="">Email: {email}</div>
        </div>
        <IoClose
          className="font-bold text-red-500 text-2xl absolute top-2 right-2 cursor-pointer"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ContactDetail;
