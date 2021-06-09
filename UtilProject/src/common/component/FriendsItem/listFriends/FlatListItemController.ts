import FriendAPI from '../../../../services/api/AddFriends/index';

class FlatListItemController {
  constructor(){}
  getFriendsFromAPI(){
    return new Promise((resolve, reject) => {
      var api = new FriendAPI();
      api.getFriends().then(friends => {
        resolve(friends);
      });
    });
  }
}
export default FlatListItemController;
