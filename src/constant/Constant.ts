import { grey, orange } from "@material-ui/core/colors";

export default {
  BUTTON_GRADIENT_START: "#F2994A",
  BUTTON_GRADIENT_END: "#F2C94C",
  TEXT_DARK: grey[800],
  TEXT_SECONDARY: grey[600],
  COLOR_PRIMARY: orange[400],
  COLOR_PRIMARY_LIGHT: orange[50],
  COLOR_PRIMARY_LIGHT_TRANS: "rgba(255, 243, 224,0.5)",
  FONT_FAMILY_BEAUTY: "Lobster",
  FONT_FAMILY_MAIN: "Open Sans",
  LOCAL_STORAGE_CART: "cart_details",
  PHONE_REGEX: [
    "^(840|84|0|)8(1|2|3|4|5|6|7|8|9)\\d{7}$",
    "(840|84|0|)9\\d{8}",
    "^(840|84|0|)5(2|6|8|9)\\d{7}$",
    "(840|84|0|)7(0|6|7|8|9)\\d{7}",
    "(840|84|0|)3[2-9]\\d{7}",
  ].join("|"),
};
