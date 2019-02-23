import React from "react";
import "./avatar.css";

const avatarCard = props => (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Profession:</strong> {props.profession}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeavatar(props.id)} className="remove">
        
      </span>
    </div>
  );
  
  export default avatarCard;
  