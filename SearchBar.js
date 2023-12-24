import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from "./themes/styles";
import { Link } from 'expo-router'

const SearchBar = () => {
    return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.SearchBar}>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', marginTop: 55, marginBottom: 10, padding: 10, borderRadius: 10, marginLeft: 20, backgroundColor: '#E8E8E8', borderWidth: 1, borderColor: '#E8E8E8' }}>
                <Text style={{ fontSize: 13, color: 'gray', marginRight: 160, marginTop: 0, marginBottom: 0, fontSize: 13, fontFamily: 'OpenSans_Regular', marginLeft: 10 }}>Search Pocketstocks</Text>
                <Image
                  source={require('./assets/images/filter.png')}
                  style={{ width: 18, height: 18, marginLeft: 10, marginRight: 5, marginTop: 0 }}/>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    );
  }

  export default SearchBar;