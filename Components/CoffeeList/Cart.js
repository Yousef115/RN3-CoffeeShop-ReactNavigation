import React, { Component } from "react";
import { Button, Icon } from "native-base";
import { withNavigation } from "react-navigation";

class Cart extends Component {
  render() {
    return (
      <Button
        transparent
        onPress={() => this.props.navigation.navigate("CartScreen")}
      >
        <Icon
          style={{ color: "white" }}
          type="FontAwesome"
          name="shopping-cart"
        />
      </Button>
    );
  }
}

export default withNavigation(Cart);
