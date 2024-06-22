import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const add = (e) => {
    e.preventDefault();
    if (name === "" || age === "" || gender === "" || email === "") {
      alert("All fields are mandatory!");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    addContactHandler({ name, age, gender, email });
    setName("");
    setAge("");
    setGender("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Age</label>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue add-patient-btn">
          <i className="plus icon"></i> Add Patient
        </button>
      </form>
    </div>
  );
};

export default AddContact;
