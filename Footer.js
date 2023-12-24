import { Text, View, Image } from 'react-native';
import styles from "./themes/styles";

const Footer = () => {
    return (
        <View style={{ height: 90, width: 600, flexDirection: 'row', paddingTop: 15 }}>
        <View>
          <Image
            source={require('./assets/images/home.png')}
            style={{ width: 25, height: 25, marginLeft: 55 }}/>
            <Text style={{ marginLeft: 50, color: 'gray', fontSize: 12, marginTop: 4 }}>Home</Text>
        </View>
        <View>
          <Image
            source={require('./assets/images/trending.png')}
            style={{ width: 25, height: 25, marginLeft: 55 }}/>
            <Text style={{ marginLeft: 42, color: 'gray', fontSize: 12, marginTop: 4 }}>Trending</Text>
        </View>
        <View>
          <Image
            source={require('./assets/images/watchlist.png')}
            style={{ width: 25, height: 25, marginLeft: 50 }}/>
            <Text style={{ marginLeft: 35, color: 'gray', fontSize: 12, marginTop: 4 }}>Watchlist</Text>
          </View>
          <View>
        <Image
          source={require('./assets/images/profile_button.png')}
          style={{ width: 30, height: 30, marginLeft: 45, marginTop: -2 }}/>
          <Text style={{ marginLeft: 40, color: 'gray', fontSize: 12, marginTop: 2 }}>Profile</Text>
          </View>
        </View>
    );
  }

  export default Footer;


