import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Container } from "native-base";
import { ExpoConfigView } from "@expo/samples";

export default class InputScreen extends React.Component {
  state = {};

  render() {
    return (
      //   <Container>
      //     <Text>Hello does this work???</Text>
      //   </Container>
      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Can you see this now?</Text>
      </View>
      //     <View style={styles.tabBarInfoContainer}>
      //     <Text style={styles.tabBarInfoText}>
      //         This is a tab bar. You can edit it in:
      //     </Text>

      //     <View
      //         style={[styles.codeHighlightContainer, styles.navigationFilename]}
      //     >
      //         <MonoText style={styles.codeHighlightText}>
      //         navigation/MainTabNavigator.js
      //         </MonoText>
      //     </View>
      //     </View>
      // </View>
    );
  }
}
