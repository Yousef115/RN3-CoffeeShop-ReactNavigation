import React from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//Data
import items from "../../data/items";

class CoffeeCart extends Component {
  render() {
    let cartItems;
    if (items) {
      cartItems = items.map(item => <CartItem item={item} key={item.id} />);
    }

    return (
      <List>
        {cartItems}
        <Button full danger onPress={() => navigation.navigate("OrderScreen")}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default CoffeeCart;
