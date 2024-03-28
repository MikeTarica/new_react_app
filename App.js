import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Gallery from "./Gallery.js";
import Profile from "./Profile.js";
import "./css/global-styling.css";

export default function Bio() {
  return (
    <div class="summary">
      <Profile />
      <Gallery />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff3",
    alignItems: "center",
    justifyContent: "center",
    margin: "2"
  }
});
