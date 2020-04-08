import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface HomeProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 20
  },
  headerText: {
    fontSize: 30,
    fontWeight: "800"
  }
});

const Home: React.FC<HomeProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Feed</Text>
        <Entypo name="feather" size={30} color="black" />
      </View>

      {/* <ScrollView>
        {[1, 2, 3].map((_, idx) => (
          <FeedCard key={idx} />
        ))}
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default Home;
