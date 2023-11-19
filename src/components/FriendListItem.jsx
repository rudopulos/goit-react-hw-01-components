import React from 'react';
import PropTypes from 'prop-types';
import './FriendListItem.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="FriendItem_item__Ky0Uz">
      <span className={`FriendItem_status${isOnline ? 'Online' : 'Offline'}__uwb-G`}></span>
      <img className="FriendItem_avatar__2Ro1N" src={avatar} alt={name} width="48" />
      <p className="FriendItem_name__2Ro1N">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

