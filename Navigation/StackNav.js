import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";

//Components import
import Login from "../Components/Login";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";

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
      }
    }
  }
);

export default StackNav;
