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
    facebook: "#3B5998"
  },
  typography: {}
};

Theme.typography = {
  heading1: {
    fontSize: 24,
    color: Theme.colors.blue,
    fontFamily: "Poppins-Bold"
  },

  heading2: {
    fontSize: 18,
    color: Theme.colors.blue,
    fontFamily: "Poppins-Bold"
  },

  heading3: {
    fontSize: 16,
    color: Theme.colors.blue,
    fontFamily: "Roboto-Regular"
  },

  heading4: {
    fontSize: 14,
    color: Theme.colors.blue,
    fontFamily: "Roboto-Bold"
  },

  body: {
    fontSize: 14,
    color: Theme.colors.blue,
    fontFamily: "Roboto-Regular"
  },

  subtitle: {
    fontSize: 12,
    color: Theme.colors.blue,
    fontFamily: "Roboto-Bold"
  },

  subtext: {
    fontSize: 12,
    lineHeight: 16,
    color: Theme.colors.blue,
    fontFamily: "Roboto-Regular"
  },

  subtext2: {
    fontSize: 12,
    lineHeight: 16,
    color: Theme.colors.blue,
    opacity: 0.5,
    fontFamily: "Roboto-Regular"
  },
  underlined: {
    fontSize: 12,
    lineHeight: 16,
    color: Theme.colors.blue,
    textDecorationLine: "underline",
    fontFamily: "Roboto-Regular"
  }
};

export default Theme;
