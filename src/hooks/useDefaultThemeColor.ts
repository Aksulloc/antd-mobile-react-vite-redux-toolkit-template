const lightColor = '#FFFFFF';
const darkColor = '#061d33';

const useDefaultThemeColor = (invert = false) => {
  return invert ? lightColor : darkColor;
  //useColorModeValue(darkColor, lightColor);
};

export { useDefaultThemeColor };
