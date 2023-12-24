import { Text, TouchableOpacity, View, Image } from 'react-native';

const News = () => {
    return (
      <View>

          <View style= {{ backgroundColor: 'white', borderRadius: 25, margin: 20, marginTop: 15, marginBottom: 0, height: 580 }}>
          <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#101010', borderRadius: 30, marginTop: 15, marginBottom: 0, marginLeft: 15, padding: 8, paddingLeft: 15, width: 75 }}>
              <Text style={{ color: 'white', marginLeft: 5, fontSize: 13, fontFamily: 'OpenSans_Regular' }}>Filters</Text>
            </TouchableOpacity>
            <View style={{ height: 1, marginTop: 10, backgroundColor: '#F0F0F0' }}></View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./assets/images/seekingalpha.png')}
              style={{ width: 26, height: 26, marginLeft: 20, marginTop: 23 }}/>
            
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ marginTop: 15, marginLeft: 24, fontSize: 13 }}>Microsoft Is Too Expensive Here - Wait For </Text>
              <Text style={{ marginTop: 0, marginLeft: 24, fontSize: 13 }}>A Pullback (NASDAQ:MSFT)</Text>
              <Text style={{ fontSize: 12, color: 'gray', marginTop: 5, marginLeft: 24 }}>SeekingAlpha • 30 minutes ago</Text>
            </View>
            </View>
          <View style={{ height: 1, marginTop: 10, backgroundColor: '#F0F0F0' }}></View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./assets/images/motleyfool.png')}
              style={{ width: 26, height: 26, marginLeft: 20, marginTop: 23 }}/>
                        <View style={{ flexDirection: 'column' }}>
              <Text style={{ marginTop: 10, marginLeft: 24, fontSize: 13 }}>Is Microsoft, Amazon, or Alphabet the  </Text>
              <Text style={{ marginTop: 0, marginLeft: 24, fontSize: 13 }}>Best Stock in This $1.5 Trillion Industry?</Text>
              <Text style={{ fontSize: 12, color: 'gray', marginTop: 5, marginLeft: 24 }}>Motley Fool • 2 days ago</Text>
            </View>
          </View>
          <View style={{ height: 1, marginTop: 10, backgroundColor: '#F0F0F0' }}></View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./assets/images/yahoofinance.png')}
              style={{ width: 26, height: 26, marginLeft: 20, marginTop: 23 }}/>
                        <View style={{ flexDirection: 'column' }}>
              <Text style={{ marginTop: 10, marginLeft: 24, fontSize: 13 }}>I’d use this Warren Buffett approach to </Text>
              <Text style={{ marginTop: 0, marginLeft: 24, fontSize: 13 }}>finding cheap UK income shares</Text>
              <Text style={{ fontSize: 12, color: 'gray', marginTop: 5, marginLeft: 24 }}>Yahoo Finance • 4 days ago</Text>
            </View>
            </View>
          <View style={{ height: 1, marginTop: 10, backgroundColor: '#F0F0F0' }}></View>
          <View style={{ flexDirection: 'row' }}>
            <Image
                source={require('./assets/images/skynews.png')}
                style={{ width: 26, height: 26, marginLeft: 20, marginTop: 23 }}/>
                          <View style={{ flexDirection: 'column' }}>
              <Text style={{ marginTop: 10, marginLeft: 24, fontSize: 13 }}>Call of Duty maker Activision Blizzard to </Text>
              <Text style={{ marginTop: 0, marginLeft: 24, fontSize: 13 }}>be bought by Microsoft as UK regulator ...</Text>
              <Text style={{ fontSize: 12, color: 'gray', marginTop: 5, marginLeft: 24 }}>Sky News • 3 weeks ago</Text>
            </View>
            </View>
          <View style={{ height: 1, marginTop: 10, backgroundColor: '#F0F0F0' }}></View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./assets/images/planet.png')}
              style={{ width: 26, height: 26, marginLeft: 20, marginTop: 23 }}/>
                        <View style={{ flexDirection: 'column' }}>
              <Text style={{ marginTop: 10, marginLeft: 24, fontSize: 13 }}>Queryable Earth: combining satellite </Text>
              <Text style={{ marginTop: 0, marginLeft: 24, fontSize: 13 }}>imagery and next-gen AI</Text>
              <Text style={{ fontSize: 12, color: 'gray', marginTop: 5, marginLeft: 24 }}>Planet Labs • 3 weeks ago</Text>
            </View>
            </View>
            <View style={{ height: 1, marginTop: 10, backgroundColor: '#F0F0F0' }}></View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./assets/images/ft.png')}
              style={{ width: 26, height: 26, marginLeft: 20, marginTop: 23 }}/>
                        <View style={{ flexDirection: 'column' }}>
              <Text style={{ marginTop: 10, marginLeft: 24, fontSize: 13 }}>Microsoft pioneers use of generative AI in </Text>
              <Text style={{ marginTop: 0, marginLeft: 24, fontSize: 13 }}>software — at a price</Text>
              <Text style={{ fontSize: 12, color: 'gray', marginTop: 5, marginLeft: 24 }}>Financial Times • 1 month ago</Text>
            </View>
          </View>
          <View style={{ height: 1, marginTop: 10, backgroundColor: '#F0F0F0' }}></View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./assets/images/ft.png')}
              style={{ width: 26, height: 26, marginLeft: 20, marginTop: 23 }}/>
                        <View style={{ flexDirection: 'column' }}>
              <Text style={{ marginTop: 10, marginLeft: 24, fontSize: 13 }}>Microsoft pioneers use of generative AI in </Text>
              <Text style={{ marginTop: 0, marginLeft: 24, fontSize: 13 }}>software — at a price</Text>
              <Text style={{ fontSize: 12, color: 'gray', marginTop: 5, marginLeft: 24 }}>Financial Times • 1 month ago</Text>
            </View>
          </View>
          <View style={{ height: 100, width: 600, marginTop: 15, flexDirection: 'row', paddingTop: 15 }}>

        </View>

        </View>
      </View>
    )
  }

  export default News;