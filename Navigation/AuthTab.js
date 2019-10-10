import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Icon } from "native-base";

//Components
import Login from "../Components/Login";
import Profile from "../Components/Profile";

const AuthTab = createStackNavigator(
  {
    LoginScreen: Login,
    ProfileScreen: Profile
  },
  {
    NavigationOptions: {
      tabBarIcon: () => <Icon type="FontAwesome5" name="user" />,
      activeTintColor: "#b8cdd0",
      inactiveTintColor: "white"
    }
  }
);

export default AuthTab;
