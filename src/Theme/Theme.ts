import { Platform } from "react-native";

// const { width: SCREEN_WIDTH } = Dimensions.get("window");

// const scale = SCREEN_WIDTH / 320;

const Theme = {
  font: {
    book: {},
    bold: {
      fontFamily: "bold"
    },
    heavy: {
      fontFamily: "heavy"
    },
    regular: {
      fontFamily: "regular"
    }
  },
  spacing: {
    xTiny: 4,
    tiny: 8,
    small: 12,
    base: 16,
    large: 32,
    xLarge: 48
  },
  buttons: {
    AuthButton: {
      height: 41,
      width: "83%",
      marginBottom: 12,
      borderRadius: 40,
      shadowOpacity: 0.1,
      shadowOffset: { height: 0, width: 0 },
      elevation: 2,
      flexDirection: "row",
      justifyContent: "flex-start",
      backgroundColor: "white"
    }
  },
  headers: {
    AuthHeader: {
      backgroundColor: "#FF2540",
      width: "350@s",
      shadowOpacity: 0,
      shadowOffset: { height: 0, width: 0 },
      elevation: 0,
      borderBottomWidth: 0,
      paddingTop: Platform.OS === "ios" ? "12@vs" : 0
    }
  },
  colors: {
    accent: "#EE5859",
    blue: "#252E69",
    orange: "#F5A98F",
    yellow: "#EEDEAA",
    white: "#fff",
    facebook: "#3B5998",
    black: "#000",
    grey: "#ccc",
    lightGrey: "#f0f2f0"
  },
  typography: {}
};

Theme.typography = {
  heading1: {
    fontSize: 35,
    color: Theme.colors.black,
    fontWeight: "800"
    // fontFamily: "Poppins-Bold"
  },

  heading2: {
    fontSize: 28,
    fontWeight: "800",
    color: Theme.colors.black
    // fontFamily: "Poppins-Bold",
  },

  heading3: {
    fontSize: 20,
    color: Theme.colors.black
    // fontFamily: "Roboto-Regular",
  },

  heading4: {
    fontSize: 14,
    color: Theme.colors.black
    // fontFamily: "Roboto-Bold",
  },

  body: {
    fontSize: 14,
    color: Theme.colors.black
    // fontFamily: "Roboto-Regular",
  },

  subtitle: {
    fontSize: 15,
    color: Theme.colors.black,
    fontWeight: "500"
    // fontFamily: "Roboto-Bold",
  },

  subtext: {
    fontSize: 15,
    lineHeight: 16,
    color: Theme.colors.grey
    // fontFamily: "Roboto-Regular",
  },

  subtext2: {
    fontSize: 12,
    lineHeight: 16,
    color: Theme.colors.blue,
    opacity: 0.5
    // fontFamily: "Roboto-Regular"
  },
  underlined: {
    fontSize: 12,
    lineHeight: 16,
    color: Theme.colors.blue,
    textDecorationLine: "underline"
    // fontFamily: "Roboto-Regular"
  },
  input: {
    fontSize: 18,
    color: Theme.colors.black
    // fontFamily: "Roboto-Bold",
  }
};

export default Theme;
