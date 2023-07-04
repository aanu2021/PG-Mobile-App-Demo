/* eslint-disable comma-dangle */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin', {
        relativeSourceLocation: true,
      },
      // eslint-disable-next-line prettier/prettier
    ]
  ],
};
