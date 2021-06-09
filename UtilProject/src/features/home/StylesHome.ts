import {StyleSheet} from 'react-native';
import Corlor from '../../constants/colors';
const styles = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 60,
    borderWidth: 1,
  },

  homeSearchStyle: {
    paddingLeft: 10,
    justifyContent: 'center',
  },
  container: {
    paddingTop: 70,
    alignItems: 'center',
    color: Corlor.mainColor,
  },
  title: {
    color: Corlor.mainColor,
  },
  itemFlatlist: {
    padding: 10,
  },
  button: {
    borderBottomWidth: 1,
  },
});
export default styles;
