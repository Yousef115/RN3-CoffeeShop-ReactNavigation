import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";

//Components
import Cart from "./OrderTab";
import OrderHistory from "../Components/OrderHistory";

const OrderTab = createBottomTabNavigator(
  {
    CartScreen: Cart,
    OrderScreen: OrderHistory
  },
  {
    NavigationOptions: {
      tabBarIcon: () => <Icon type="FontAwesome5" name="shopping-cart" />
    }
  }
);

export default OrderTab;
