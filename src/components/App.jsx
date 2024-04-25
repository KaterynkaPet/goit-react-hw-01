import userData from "../userData.json";
import Profile from "./profile/Profile";

import friends from "../friends.json";
import FriendList from "./friend_list/FriendList";


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
    </>
  )
}

export default App;