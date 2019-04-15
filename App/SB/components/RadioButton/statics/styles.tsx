import { StyleSheet, ImageStyle, ViewStyle } from 'react-native'

interface Styles {
  button: ViewStyle
  disabled: ViewStyle
  buttonSelected: ViewStyle
  buttonImage: ImageStyle
  buttonDisabled: ViewStyle
}

export default StyleSheet.create<Styles>({
  button: {
    height: 17,
    width: 17,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#9B9B9B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  disabled: {
    height: 17,
    width: 17,
    borderRadius: 12,
    backgroundColor: '#9B9B9B',
    borderColor: '#9B9B9B',
    borderWidth: 2
  },
  buttonImage: {
    height: 8,
    width: 10,
    position: 'absolute',
    zIndex: 10
  } as ImageStyle,
  buttonSelected: {
    height: 17,
    width: 17,
    borderRadius: 12,
    backgroundColor: '#2625FF',
    borderColor: '#2625FF',
    borderWidth: 2
  },
  buttonDisabled: {
    backgroundColor: '#9B9B9B',
    borderColor: '#9B9B9B'
  }
})