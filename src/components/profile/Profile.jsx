import clsx from "clsx";
import css from "./Profile.module.css";

function Profile({ image, name, tag, location, stats }) {
       
    return (
        <div className={css.container}>
            <div>
                <img className={css.image}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.name}>{name}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>

            <ul className={css.list}>
                <li className={css.actions}>
                    <span>Followers</span>
                    <span className={css.quantity}>{stats.followers}</span>
                </li>
                <li className={css.actions}>
                    <span>Views</span>
                    <span className={css.quantity}>{stats.views}</span>
                </li>
                <li className={css.actions}>
                    <span>Likes</span>
                    <span className={css.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};
export default Profile;