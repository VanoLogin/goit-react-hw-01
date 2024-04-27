import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";

import profileUser from "./components/Profile/Profile.json";
import friendList from "./components/FriendList/FriendList.json";
import transactionHistory from "./components/TransactionHistory/TransactionHistory.json";
export default function App() {
  return (
    <>
      <Profile
        name={profileUser.name}
        tag={profileUser.tag}
        location={profileUser.location}
        avatar={profileUser.avatar}
        stats={profileUser.stats}
      />
      <FriendList friends={friendList} />
      <TransactionHistory items={transactionHistory} />
    </>
  );
}
// console.log(transactionHistory);
