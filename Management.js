import { Text, TouchableOpacity, View, Image } from 'react-native';

const Management = () => {
    return (
      <View>
        
        <View style={{ backgroundColor: 'white', borderRadius: 25, margin: 20, marginTop: 15, marginBottom: 0, height: 580  }}>
  
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginLeft: 20, color: '#101010', marginTop: 20, marginBottom: 12, fontSize: 13 }}>Insider Activity</Text>
            <Text style={{ marginLeft: 160, marginTop: 20, color: '#101010', fontSize: 13 }}>108.53B</Text>
          </View>
        </View>
        <View style={{ marginTop: 50}}></View>
      </View>
    )
  }

  export default Management;