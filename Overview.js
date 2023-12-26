import { Text, TouchableOpacity, View, Image } from 'react-native';

const Overview = () => {
    return (
      <View>

        <View style={{ backgroundColor: 'white', borderRadius: 15, margin: 18, marginTop: 15, marginBottom: 0, height: 580 }}>
        <View style={{ flexDirection: 'column', borderRadius: 10, marginTop: 0, marginLeft: 5, marginBottom: 158 }}>
                    <View style={{ flexDirection: 'column' }}>

            <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./assets/images/company_logo.png')}
              style={{ width: 20, height: 20, marginLeft: 15, marginTop: 25 }}/>
              <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 22, marginLeft: 10 }}>321.</Text>
              <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 0, marginTop: 31 }}>77 </Text>
              <Text style={{ fontSize: 12, color: '#2774e9ff', marginLeft: 5, marginTop: 31 }}>▲ +2.39%</Text>
            </View>
            </View>
          <View>
            <Text style={{ marginLeft: 15, marginTop: 2, marginBottom: 0, color: 'gray', fontFamily: 'OpenSans_SemiBold', fontSize: 18 }}>Microsoft Corporation</Text>
            <Text style={{ marginLeft: 15, marginTop: 5, color: 'gray', fontFamily: 'OpenSans_Regular', fontSize: 13 }}>USD • MSFT • NYSE</Text>
          </View>

        <View style={{ flexDirection: 'row' }}>
          
          </View>
                          
            </View>
            <View style={{ height: 35, backgroundColor: '#F2F2F2', borderRadius: 10, width: 324, flexDirection: 'row', marginLeft: 15, marginTop: 20, marginBottom: 0 }}>
              <View style={{ backgroundColor: 'white', margin: 5, borderRadius: 7, marginLeft: 5 }}>
                <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 5, paddingRight: 15, color: 'gray'}}>1D</Text>
              </View>
              <Text style={{ fontSize: 12, marginLeft: 11, paddingTop: 10, color: 'gray' }}>1W</Text>
              <Text style={{ fontSize: 12, marginLeft: 26, paddingTop: 10, color: 'gray' }}>1M</Text>
              <Text style={{ fontSize: 12, marginLeft: 26, paddingTop: 10, color: 'gray' }}>6M</Text>
              <Text style={{ fontSize: 12, marginLeft: 26, paddingTop: 10, color: 'gray' }}>1Y</Text>
              <Text style={{ fontSize: 12, marginLeft: 26, paddingTop: 10, color: 'gray' }}>5Y</Text>
              <Text style={{ fontSize: 12, marginLeft: 26, paddingTop: 10, color: 'gray' }}>Max</Text>
            </View>
            <View>
        </View>
  
        <View>
          <View style={{ height: 1, marginLeft: 20, marginRight: 20, marginTop: 15, backgroundColor: '#F0F0F0'}}></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 20, color: '#101010', marginTop: 10, fontSize: 12, fontFamily: 'OpenSans_Regular' }}>Sector / Industry</Text>
              <Text style={{ marginLeft: 138, marginTop: 12, color: '#101010', fontSize: 12, fontFamily: 'OpenSans_Regular' }}>Tech / Software</Text>
            </View>
          <View style={{ height: 1, marginLeft: 20, marginRight: 20, marginTop: 10, backgroundColor: '#F0F0F0' }}></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 20, color: '#101010', marginTop: 10, fontSize: 12, fontFamily: 'OpenSans_Regular' }}>1Y range</Text>
              <Text style={{ marginLeft: 185, marginTop: 10, color: '#101010', fontSize: 12, fontFamily: 'OpenSans_Regular' }}>330.22 - 354.23</Text>
            </View>
          <View style={{ height: 1, marginLeft: 20, marginRight: 20, marginTop: 10, backgroundColor: '#F0F0F0' }}></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 20, color: '#101010', marginTop: 10, fontSize: 12, fontFamily: 'OpenSans_Regular' }}>Market Capitalisation</Text>
              <Text style={{ marginLeft: 160, marginTop: 10, color: '#101010', fontSize: 12, fontFamily: 'OpenSans_Regular' }}>2510 B</Text>
            </View>
          <View style={{ height: 1, marginLeft: 20, marginRight: 20, marginTop: 10, backgroundColor: '#F0F0F0' }}></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 20, color: '#101010', marginTop: 10, fontSize: 12, fontFamily: 'OpenSans_Regular' }}>P/E Ratio (vs. Industry Avg)</Text>
              <Text style={{ marginLeft:106, marginTop: 10, color: '#101010', fontSize: 12, fontFamily: 'OpenSans_Regular' }}>30.23 (75.2)</Text>
            </View>
          <View style={{ height: 1, marginLeft: 20, marginRight: 20, marginTop: 10, backgroundColor: '#F0F0F0' }}></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 20, color: '#101010', marginTop: 10, fontSize: 12, fontFamily: 'OpenSans_Regular' }}>Earnings Date</Text>
              <Text style={{ marginLeft: 170, marginTop: 10, color: '#101010', fontSize: 12, fontFamily: 'OpenSans_Regular' }}>10 Dec 2023</Text>
            </View>
        </View>
        <View style={{ height: 1, marginLeft: 20, marginRight: 20, marginTop: 10, backgroundColor: '#F0F0F0' }}></View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'lightgray', borderRadius: 15, marginTop: 10, marginBottom: 10, marginLeft: 15, padding: 12, paddingLeft: 32, width: 160 }}>

            <Text style={{ color: 'gray', marginLeft: 5, fontSize: 13, fontFamily: 'OpenSans_SemiBold' }}>Actions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#101010', borderRadius: 15, marginTop: 10, marginBottom: 10, marginLeft: 10, padding: 12, paddingLeft: 32, width: 160 }}>
            <Text style={{ color: 'white', marginLeft: 5, fontSize: 13, fontFamily: 'OpenSans_SemiBold' }}>Comments</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }


  export default Overview;