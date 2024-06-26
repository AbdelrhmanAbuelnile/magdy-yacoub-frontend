/* eslint-disable react/prop-types */
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { PiPlusBold } from "react-icons/pi";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
    props.onClose();
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deleteContactHandler}
        selectContactHandler={props.selectContactHandler}
      />
    );
  });

  return (
    <div className="w-5/12">
      <h2 className="text-xl font-medium">Contact List</h2>
      <Link to="/add">
        <button className="add-patient-btn text-sm">
          <PiPlusBold  className="icon plus"/> Add Contact
        </button>
      </Link>
      <div className="w-full">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
