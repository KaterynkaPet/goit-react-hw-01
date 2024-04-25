function FriendList({ friends }) {
    return (
        <ul>
		    <li>
                <img src={friends.avatar} alt="Avatar" width="48" />
                <p>{friends.name}</p>
                <p>
                    {friends.isOnline == true
                    ?"Online":"Offline"}
                </p>
            </li>
        </ul>
    )
}
export default FriendList;