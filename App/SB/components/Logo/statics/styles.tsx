import { StyleSheet, ImageStyle, ViewStyle } from 'react-native'

type Styles = {
  container: ViewStyle
  image: ImageStyle
}

export default StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    marginTop: 39
  },
  image: {
    marginBottom: 22
  } as ImageStyle
})
