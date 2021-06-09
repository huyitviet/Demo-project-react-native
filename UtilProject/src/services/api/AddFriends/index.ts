import FriendsApiEndpoints from './FriendsApiEndpoints';
import {BASE_API} from '../../../constants/api/ApiFriends';

class FriendAPI {
  constructor() {}

  getFriends() {
    return new Promise((resolve, reject) => {
      fetch('https://60b4ef87fe923b0017c83297.mockapi.io/friends')
      .then(response => response.json())
      .then(json => {
        resolve(json);
      })
    })

    
  }
}
export default FriendAPI;
