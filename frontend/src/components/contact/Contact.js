import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact, getContact } from "../../js/actions/contact";
import {toggleEdit} from "../../js/actions/edit"
import { Button } from "react-bootstrap";
import "./Contact.css";

const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const handleEdit = (id)=>{
      dispatch(toggleEdit())
      dispatch(getContact(id))
    }
  
    return (
      <div className="card">
        <div className="text">
          <p>{contact.name}</p>
          <p>{contact.email}</p>
        </div>
        <div className="btns">
          <Link to="/edit">
            <Button onClick={() => handleEdit(contact._id)}>
              Edit Contact
            </Button>
          </Link>
          <Button
            variant="danger"
            onClick={() => dispatch(deleteContact(contact._id))}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  };
  
  export default Contact;
