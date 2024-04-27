import css from "./friend_list/FriendList.module.css";
import clsx from "clsx";

function FriendListItem({ avatar, name, isOnline, id }) {
    return (
        <div className={css.item}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
                <p className={css.name}>{name}</p>
                <p className={clsx(css.stats, isOnline ? css.online:css.offline)}>
                    {isOnline === true ?"Online":"Offline"}
                </p>
        </div>
    )
}

export default FriendListItem;