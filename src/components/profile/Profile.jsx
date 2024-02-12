import css from "./Profile.module.css";

export const Profile = ({
  avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <>
        <img className={css.img} src={avatar} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.spanFirst}>Followers</span>
          <span className={css.spanSecond}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.spanFirst}>Views</span>
          <span className={css.spanSecond}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.spanFirst}>Likes</span>
          <span className={css.spanSecond}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
