import React from "react";
import user from "../images/user.png";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user"></img>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">{email}</div>
      </div>
      <div className="right floated content">
        <i
          className="trash alternate outline icon"
          style={{ color: "red", cursor: "pointer" }}
        ></i>
      </div>
    </div>
  );
};
export default ContactCard;
