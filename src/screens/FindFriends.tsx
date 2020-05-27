import React, { useRef, useState } from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

import ThreeDotsMenu from "../components/ThreeDotsMenu";
import Theme from "../Theme/Theme";

const { width: screenWidth } = Dimensions.get("window");

interface FindFriendsProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth * 1.2
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover"
  },
  title: {
    // marginBottom:10,
  }
});

const ENTRIES1 = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration:
      "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    title: "Earlier this morning, NYC",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration:
      "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    title: "Acrocorinth, Greece",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration:
      "https://images.pexels.com/photos/1441151/pexels-photo-1441151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

const FindFriends: React.FC<FindFriendsProps> = ({ navigation }) => {
  const [entries, setEntries] = useState(ENTRIES1);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  const renderItem = ({ item, index }: { index: number }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginTop: 10
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="md-arrow-round-back"
            size={30}
            color={Theme.colors.grey}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Find Friends</Text>
        <TouchableOpacity>
          <ThreeDotsMenu
            onPress={() => console.log("open bottom sheet and go!")}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginHorizontal: 50
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: Theme.colors.accent,
            width: 65,
            height: 65,
            borderRadius: 32.5,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10
          }}
        >
          <Entypo name="check" color="white" size={35} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Theme.colors.blue,
            width: 65,
            height: 65,
            borderRadius: 32.5,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10
          }}
          onPress={goForward}
        >
          <Entypo name="cross" color="white" size={35} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "#e3dcdc", fontWeight: "600", marginRight: 5 }}>
          Find Friends nearby
        </Text>
        <MaterialCommunityIcons name="target" color="#e3dcdc" size={35} />
      </View>
    </SafeAreaView>
  );
};

export default FindFriends;
