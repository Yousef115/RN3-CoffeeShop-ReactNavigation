import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Icon } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";
import Cart from "./Cart";

// Data
import cafes from "../../data/cafes";

const CoffeeList = () => {
  let shops;
  if (cafes) {
    shops = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
  }
  return (
    <Content>
      <List>{shops}</List>
    </Content>
  );
};

export default CoffeeList;

CoffeeList.navigationOptions = () => {
  return {
    title: "Coffee List",
    headerLeft: null,
    headerRight: <Cart />
  };
};
