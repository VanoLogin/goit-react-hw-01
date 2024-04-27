import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles.container}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li key={id} className={styles.item}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

export default FriendList;
