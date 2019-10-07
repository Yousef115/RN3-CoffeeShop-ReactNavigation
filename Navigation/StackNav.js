import { createStackNavigator } from "react-navigation-stack";

//Components import
import Login from "../Components/Login";
import CoffeeList from "../Components/CoffeeList";
import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";

const StackNav = createStackNavigator(
  {
    LoginScreen: Login,
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail,
    CartScreen: CoffeeCart
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)",
        fontWeight: "bold"
      },
      headerTitleStyle: {},
      cardStyle: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default StackNav;
