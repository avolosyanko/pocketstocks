import { Text, View, Image } from 'react-native';
import styles from "./themes/styles";

const Footer = () => {
    return (
        <View style={{ height: 90, width: 600, flexDirection: 'row', paddingTop: 15 }}>
        <View>
          <Image
            source={require('./assets/images/home.png')}
            style={{ width: 25, height: 25, marginLeft: 38 }}/>
            <Text style={{ marginLeft: 34, color: 'black', fontSize: 12, marginTop: 4 }}>Home</Text>
        </View>
        <View>
          <Image
            source={require('./assets/images/trending.png')}
            style={{ width: 25, height: 25, marginLeft: 40 }}/>
            <Text style={{ marginLeft: 25, color: 'gray', fontSize: 12, marginTop: 4 }}>Trending</Text>
        </View>
        <View>
          <Image
            source={require('./assets/images/watchlist.png')}
            style={{ width: 25, height: 25, marginLeft: 38 }}/>
            <Text style={{ marginLeft: 24, color: 'gray', fontSize: 12, marginTop: 4 }}>Watchlist</Text>
          </View>
          <View>
          <Image
            source={require('./assets/images/notifications.png')}
            style={{ width: 25, height: 25, marginLeft: 38 }}/>
            <Text style={{ marginLeft: 17, color: 'gray', fontSize: 12, marginTop: 4 }}>Notifications</Text>
          </View>
          <View>
        <Image
          source={require('./assets/images/profile_button.png')}
          style={{ width: 30, height: 30, marginLeft: 20, marginTop: -4 }}/>
          <Text style={{ marginLeft: 16, color: 'gray', fontSize: 12, marginTop: 3 }}>Profile</Text>
          </View>
        </View>
    );
  }

  export default Footer;


