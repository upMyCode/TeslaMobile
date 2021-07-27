import React from "react"
import { View, Text, FlatList, Dimensions } from "react-native"
import styles from "./styles"
import cars from "./cars"
import CarItem from "../CarItem"

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        snapToAlignment='start'
        decelerationRate='fast'
        showsVerticalScrollIndicator='false'
        snapToInterval={Dimensions.get("window").height}
        renderItem={({ item }) => (
          <CarItem
            name={item.name}
            tagline={item.tagline}
            image={item.image}
            taglineCTA={item.taglineCTA}
          />
        )}
      />
    </View>
  )
}

export default CarsList
