import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        
        
        
      <View style={styles.hfkOLVah}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  uEREsUas: {
    height: 60,
    width: 180,
    backgroundColor: "#21c252",
    borderRadius: 0,
    color: "#ladb5d",
    borderColor: "#9d1414",
    borderWidth: 16
  },
  rHzQOHsC: {
    height: 90,
    width: 150,
    backgroundColor: "#db1b1b",
    borderRadius: 0,
    color: "#777777",
    opacity: 0.63,
    borderWidth: 18
  },
  xVAsQyDB: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#1adb5d"
  },
  hfkOLVah: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled1;