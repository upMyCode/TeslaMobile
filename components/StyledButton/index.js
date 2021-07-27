import React from "react"
import { View, Text, Pressable } from "react-native"
import styles from "./styles"

const StyledButton = ({ type, content, onPress }) => {
  const backgroundColor = type === "primery" ? "#171A20CC" : "#FFFFFFA6"
  const textColor = type === "primery" ? "#FFFFFF" : "#171A20"

  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, { backgroundColor }]} onPress={onPress}>
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default StyledButton
