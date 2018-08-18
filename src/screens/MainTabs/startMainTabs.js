import {Navigation} from 'react-native-navigation';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource(
      Platform.OS === "android"
      ? "md-map"
      : "ios-map",
    30),
    Icon.getImageSource(
      Platform.OS === "android"
      ? "md-share-alt"
      : "ios-share",
    30),
    Icon.getImageSource(
      Platform.OS === "android"
      ? "md-menu"
      : "ios-menu",
    30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Find Place',
          screen: 'awesome-reactnative.FindPlaceScreen',
          title: 'Find Place',
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "SideDrawerToggle"
              }
            ]
          }
        }, {
          label: 'Share Place',
          screen: 'awesome-reactnative.SharePlaceScreen',
          title: 'Share Place',
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "SideDrawerToggle"
              }
            ]
          }
        }
      ],
      tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
        tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
        tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
        tabBarBackgroundColor: '#551A8B', // optional, change the background color of the tab bar
      },
      appStyle: { // optional, add this if you want to style the tab bar beyond the defaults
        tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
        tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
        tabBarBackgroundColor: '#551A8B', // optional, change the background color of the tab bar
      },
      drawer: {
        left: {
          screen: "awesome-reactnative.SideDrawerScreen"
        },
        // animationType:"parallax"
      }
    });
  })
}

export default startTabs;
