import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.commonContainer}>
      <div className={css.profileContainer}>
        <div className={css.avatarContainer}>
          <img src={image} alt="User avatar" className={css.profileAvatar} />
          <p className={css.profileName}>{name}</p>
          <p className={css.profileTag}>@{tag}</p>
          <p className={css.profileLocation}>{location}</p>
        </div>
        <ul className={css.statsList}>
          <li className={css.listItem}>
            <span className={css.itemTitle}>Followers</span>
            <span className={css.itemAmount}>{stats.followers}</span>
          </li>
          <li className={css.listItem}>
            <span className={css.itemTitle}>Views</span>
            <span className={css.itemAmount}>{stats.views}</span>
          </li>
          <li className={css.listItem}>
            <span className={css.itemTitle}>Likes</span>
            <span className={css.itemAmount}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
