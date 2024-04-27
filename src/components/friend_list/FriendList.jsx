import FriendListItem from "../FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <div className={css.container}>
            <ul className={css.list}>
                {friends.map((friend) => {
                return <li key={friend.id}><FriendListItem{...friend} /></li>;
                })}
            </ul>
        </div>
    )
}
export default FriendList;