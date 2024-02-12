import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.statusGreen}>Online</p>
      ) : (
        <p className={css.statusRed}>Offline</p>
      )}
    </>
  );
};
