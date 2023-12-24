import { Text, TouchableOpacity, View, Image } from 'react-native';

const Statements = () => {
    return (
      <View>
  
        <View style={{ backgroundColor: 'white', borderRadius: 25, margin: 20, marginTop: 15, marginBottom: 0, height: 580  }}>
        <View style={{ height: 35, backgroundColor: '#F0F0F0', borderRadius: 30, width: 310, flexDirection: 'row', marginLeft: 20, marginTop: 20, marginBottom: 20 }}>
              <View style={{ backgroundColor: 'white', margin: 5, borderRadius: 30, marginLeft: 5 }}>
                <Text style={{ paddingLeft: 30, paddingTop: 5, paddingRight: 30, color: 'gray', fontSize: 12 }}>Income</Text>
              </View>
              <Text style={{ marginLeft: 25, paddingTop: 10, color: 'gray', fontSize: 12 }}>Balance</Text>
              <Text style={{ marginLeft: 40, paddingTop: 10, color: 'gray', fontSize: 12 }}>Cash Flow</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 20, color: '#101010', marginTop: 20, fontSize: 13 }}>Revenue</Text>
              <Text style={{ marginLeft: 205, marginTop: 20, color: '#101010', fontSize: 13 }}>218.31B</Text>
            </View>
            <View style={{ height: 1, marginTop: 15, backgroundColor: '#F0F0F0'}}></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 20, color: '#101010', marginTop: 12, fontSize: 13 }}>Revenue Per Share</Text>
              <Text style={{ marginLeft: 155, marginTop: 12, color: '#101010', fontSize: 13 }}>29.35</Text>
            </View>
            <View style={{ height: 1, marginTop: 15, backgroundColor: '#F0F0F0'}}></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 20, color: '#101010', marginTop: 12, fontSize: 13 }}>Quarterly Revenue Growth</Text>
              <Text style={{ marginLeft: 102, marginTop: 12, color: '#101010', fontSize: 13 }}>12.80%</Text>
            </View>
            <View style={{ height: 1, marginTop: 15, backgroundColor: '#F0F0F0'}}></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 20, color: '#101010', marginTop: 12, fontSize: 13 }}>Gross Profit</Text>
              <Text style={{ marginLeft: 211, marginTop: 12, color: '#101010', fontSize: 13 }}>N/A</Text>
            </View>
            <View style={{ height: 1, marginTop: 15, backgroundColor: '#F0F0F0'}}></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 20, color: '#101010', marginTop: 12, fontSize: 13 }}>EBITDA</Text>
              <Text style={{ marginLeft: 210, marginTop: 12, color: '#101010', fontSize: 13 }}>108.53B</Text>
            </View>
            <View style={{ height: 1, marginTop: 15, backgroundColor: '#F0F0F0'}}></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 20, color: '#101010', marginTop: 12, fontSize: 13 }}>Net Income Avi to Common</Text>
              <Text style={{ marginLeft: 108, marginTop: 12, color: '#101010', fontSize: 13 }}>77.1B</Text>
            </View>
            <View style={{ height: 1, marginTop: 15, backgroundColor: '#F0F0F0'}}></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 20, color: '#101010', marginTop: 12, fontSize: 13 }}>Diluted EPS</Text>
              <Text style={{ marginLeft: 200, marginTop: 12, color: '#101010', fontSize: 13 }}>10.30</Text>
            </View>
            <View style={{ height: 1, marginTop: 15, backgroundColor: '#F0F0F0'}}></View>
            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
              <Text style={{ marginLeft: 20, color: '#101010', marginTop: 12, fontSize: 13 }}>Quarterly Earnings Growth</Text>
              <Text style={{ marginLeft: 100, marginTop: 12, color: '#101010', fontSize: 13 }}>27.00%</Text>
            </View>

        </View>
      </View>
    )
  }

  export default Statements;