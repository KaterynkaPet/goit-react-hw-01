import userData from "../userData.json";
import Profile from "./profile/Profile";

import friends from "../friends.json";
import FriendList from "./friend_list/FriendList";
import FriendListItem from "./FriendListItem";

import transactions from "../transactions.json";
import TransactionHistory from "./transaction_history/TransactionHistory";


function App () {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </>
  )
}

export default App;