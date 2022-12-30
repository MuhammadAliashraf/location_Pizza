import React from "react";
import { View, Text, Dimensions, StatusBar } from "react-native";
import AuthStack from "./src/navigation/authnavigator";
import RootNavigation from "./src/navigation/rootnavigator";
import SigninwelcomeScreen from "./src/screens/authScreens/signinwelcome";
import { color } from "./src/style/appcolors";

function App() {
  return <>
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor={color.statusbar}
      />
    </View>
      <RootNavigation/>
  </>
}

export default App;