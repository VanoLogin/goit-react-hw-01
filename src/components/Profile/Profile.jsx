import styles from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={styles.container}>
    <div className={styles.userContainer}>
      <img src={avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ul className={styles.userList}>
      <li className={styles.userItem}>
        <span>Followers</span>
        <span>{followers}</span>
      </li>

      <li className={styles.userItem}>
        <span>Views</span>
        <span>{views}</span>
      </li>

      <li className={styles.userItem}>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  </div>
);
export default Profile;
