# SMART HOME APP

## Introduction
A smart home app using React Native to control your home devices through IOT Gateway

## How to run
First run: `yarn install`, then:
- ios with Xcode: `npx react-native run-ios`
- Android: `react-native run-android` (not test yet)
## Source code structure
`src/components` - Contains components
- `atoms` - The smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts.
- `molecules` – They are the composition of one or more components of atoms.
- `organisms` – The combination of molecules that work together or even with atoms that compose more elaborate interfaces.

`src/scenes` - Contains screens
- `login`
- `home`

## Additional Note
- Add custom fonts to `src/assets/fonts` then run `react-native link` to link your fonts to the iOS / Android native code.

## References
- [Atomic Design](https://cheesecakelabs.com/blog/atomic-design-react/)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [React Native VN tutorial](https://github.com/huongnguyenvan/react-native)
- [Project structure](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/)