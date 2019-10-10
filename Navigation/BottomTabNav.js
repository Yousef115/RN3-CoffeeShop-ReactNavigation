import { createBottomTabNavigator } from "react-navigation-tabs";

import OrderTab from "./OrderTab";
import AuthTab from "./AuthTab";
import CoffeeTab from "./CoffeeTab";

const BottomTabNav = createBottomTabNavigator(
  {
    CoffeeTab: CoffeeTab,
    OrderTab: OrderTab,
    AuthTab: AuthTab
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: { backgroundColor: "rgb(20,90,100)" },
      activeBackgroundColor: "#b8cdd0",
      inactiveBackgroundColor: "white"
    }
  }
);

export default BottomTabNav;
