import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList'; 
import user from './user.json';
import data from './data.json';
import friendsData from './friends.json'; 
import TransactionHistory from './TransactionHistory';
import transactions from './transactions.json';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="App_title__YS7Xx">React Homework 1 - Components</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />

    </div>
  );
};

export default App;

