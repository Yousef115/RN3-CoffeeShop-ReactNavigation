import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";

//Components
import List from "../Components/CoffeeList";
import Detail from "../Components/CoffeeDetail";

const CoffeeTab = createBottomTabNavigator(
  {
    ListScreen: List,
    DetailScreen: Detail
  },
  {
    NavigationOptions: {
      tabBarIcon: () => <Icon type="FontAwesome5" name="coffee" />,
      activeTintColor: "#b8cdd0",
      inactiveTintColor: "white"
    }
  }
);

export default CoffeeTab;
