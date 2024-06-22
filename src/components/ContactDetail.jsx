/* eslint-disable react/prop-types */
import user from "../images/user.png";

const ContactDetail = ({ contact, onClose }) => {
  const { name, age, gender, email } = contact;

  return (
    <div className="contact-detail">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">Age: {age}</div>
          <div className="description">Gender: {gender}</div>
          <div className="description">Email: {email}</div>
        </div>
        <i
          className="close icon"
          style={{ color: "red", cursor: "pointer" }}
          onClick={onClose}
        ></i>
      </div>
    </div>
  );
};

export default ContactDetail;
