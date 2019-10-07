import { createBottomTabNavigator } from "react-navigation-tabs";

import OrderStackNav from "./OrderStackNav";
import ProfileStackNav from "./ProfileStackNav";

const BottomTabNav = createBottomTabNavigator({
  Orders: OrderStackNav,
  Profile: ProfileStackNav
});

export default BottomTabNav;
