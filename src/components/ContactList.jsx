/* eslint-disable react/prop-types */
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
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
    <div className="main">
      <h2>Contact List</h2>
      <Link to="/add">
        <button className="add-patient-btn">
          <i className="icon plus"></i> Add Contact
        </button>
      </Link>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
