import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

import { withNavigation } from "react-navigation";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

const CoffeeItem = props => {
  const { navigation } = props;
  const { cafe } = props;
  const handlePress = () => {
    props.navigation.navigate("DetailScreen", {
      cafeID: cafe
    });
  };
  return (
    <ImageBackground
      source={{ uri: props.cafe.background }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={{ uri: props.cafe.img }}
                style={styles.thumbnail}
              />
              <Text style={styles.text}>{props.cafe.name}</Text>
              <Text note style={styles.text}>
                {props.cafe.distance}
              </Text>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

export default withNavigation(CoffeeItem);
