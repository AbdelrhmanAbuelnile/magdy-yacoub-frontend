/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/userContext";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import Header from "../components/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import ContactList from "../components/ContactList";
import ContactDetail from "../components/ContactDetail";
import MedicalProfile from "../components/MedicalProfile";
import AddContact from "./AddContact";

const queryClient = new QueryClient();
function Layout() {
	const { token } = useContext(AuthContext);
	console.log("🚀 ~ Layout ~ token:", token);

	const LOCAL_STORAGE_KEY = "contacts";
	const [contacts, setContacts] = useState([]);
	const [selectedContact, setSelectedContact] = useState(null);
	const [vitalSigns, setVitalSigns] = useState({
		heartRate: 75,
		bodyTemp: 36.5,
		blood: "90/60",
	});

	const addContactHandler = (contact) => {
		const newContact = { id: uuidv4(), ...contact };
		const newContactList = [...contacts, newContact];
		setContacts(newContactList);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
	};

	const removeContactHandler = (id) => {
		const newContactList = contacts.filter((contact) => contact.id !== id);
		setContacts(newContactList);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
	};

	const selectContactHandler = (contact) => {
		setSelectedContact(contact);
	};

	const closeContactHandler = () => {
		setSelectedContact(null);
	};

	useEffect(() => {
		const retrieveContacts = JSON.parse(
			localStorage.getItem(LOCAL_STORAGE_KEY)
		);
		if (retrieveContacts) setContacts(retrieveContacts);
	}, []);

	return (
		<div className="ui container">
			<Header />
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route
						path="/"
						exact
						element={
							<div className="main-content">
								<ContactList
									contacts={contacts}
									getContactId={removeContactHandler}
									selectContactHandler={selectContactHandler}
								/>
								{selectedContact && (
									<div className="detail-section">
										<ContactDetail
											contact={selectedContact}
											onClose={closeContactHandler}
										/>
										<MedicalProfile vitalSigns={vitalSigns} />
									</div>
								)}
							</div>
						}
					/>
					<Route
						path="/add"
						element={<AddContact addContactHandler={addContactHandler} />}
					/>
				</Routes>
			</QueryClientProvider>
		</div>
	);
}

export default Layout;
