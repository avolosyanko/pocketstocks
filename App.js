// Dependencies
import { View, Text } from 'react-native';
import styles from "./themes/styles";
import { useFonts } from 'expo-font';
// Navigation dependencies
import {
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { NavigationContainer } from '@react-navigation/native';
// My custom components
import SearchBar from './SearchBar';
import Footer from './Footer'
import Overview from './Overview'
import News from './News'
import Statements from './Statements'
import Management from './Management'

// Top tabs
const TopTabs = createMaterialTopTabNavigator();
function TopTabsGroup(){
  return(
    <TopTabs.Navigator
    tabBarOptions={{
      labelStyle: {
        textTransform: 'capitalize'
      },
      indicatorStyle: {
        height: 3,
        backgroundColor: '#101010'
      },
      style: {
        backgroundColor: '#F2F2F2',
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 2
      },
      tabStyle: {
        width: 'auto', 
      },
      activeTintColor: '#101010',
      inactiveTintColor: 'grey'
    }}>
      <TopTabs.Screen name="Overview" component={Overview}/>
      <TopTabs.Screen name="News" component={News}/>
      <TopTabs.Screen name="Statements" component={Statements}/>
      <TopTabs.Screen name="Management" component={Management}/>
    </TopTabs.Navigator>
  )
}

// Layout Overview
const HomePage = () => {
  const [loaded] = useFonts({
    OpenSans_Regular: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSans_SemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
    OpenSans_Bold: require('./assets/fonts/OpenSans-Bold.ttf'),
  })
  if (!loaded){
    return null;
  }
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <SearchBar/>
        <TopTabsGroup/>
        <Footer/>
      </View>
    </NavigationContainer>
  );
}

export default HomePage;
