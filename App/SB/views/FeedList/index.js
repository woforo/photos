import React from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, Image } from 'react-native'
import HeaderButtons, { Item } from 'react-navigation-header-buttons'
import Icons from '../../../Components/Icons'

import FeedItem from '../../components/FeedItem'
import Button from '../../components/Button'
import Avatar from '../../../Components/Avatar'

import NotificationsActions from '../../../Redux/NotificationsRedux'

import styles from './statics/styles'
import PreferencesActions from '../../../Redux/PreferencesRedux'
import TextileNodeActions from '../../../Redux/TextileNodeRedux'

class Notifications extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {}
    const username = params.profile && params.profile.username ? params.profile.username : undefined
    const headerLeft = (
      <HeaderButtons left>
        <Item
          title='Account'
          delayLongPress={3000}
          onLongPress={params.toggleVerboseUi}
          onPress={() => navigation.navigate('Account', { username })}
          buttonWrapperStyle={{ marginLeft: 11, marginRight: 11 }}
          ButtonElement={
            <Avatar
              width={24}
              height={24}
              defaultSource={require('../../../Images/v2/main-image.png')}
              owner
            />
          }
        />
      </HeaderButtons>
    )
    const headerTitle = 'Notifications'

    return {
      headerLeft,
      headerTitle,
      headerRight: (<View />) // ensure spacing in android
    }
  }

  // gets called every time the user enters this tab
  _onFocus () {
    // refresh the messages for the user
    this.props.refreshNotifications() // < will get called on the very first entry too
  }

  // gets called every time the user exists the tab
  _onBlur () {
    // if the user was on the page long enough, we'll just clear all unread
    this.props.readAllNotifications()
  }

  componentDidMount () {
    // on mount, set listeners for enter and exit of the tab
    this.props.navigation.addListener('willFocus', this._onFocus.bind(this))
    this.props.navigation.addListener('willBlur', this._onBlur.bind(this))
    this.props.navigation.setParams({
      profile: this.props.profile
    })
  }

  componentWillUnmount () {
    // remove the listeners for enter / exit the tab
    this.props.navigation.removeListener('blur', this._onBlur.bind(this))
    this.props.navigation.removeListener('onFocus', this._onFocus.bind(this))
  }

  _onClick (notification) {
    this.props.clickNotification(notification)
  }

  _keyExtractor = (item, index) => item.id + '_' + index

  _renderItem = ({ item }) => {
    return (
      <FeedItem profile={this.props.profile} notification={item} onClick={this._onClick.bind(this)} />
    )
  }

  _renderPlaceholder () {
    return (
      <View style={styles.emptyStateContainer}>
        <Image
          style={styles.emptyStateImage}
          source={require('../../views/ThreadsList/statics/thread-empty-state.png')} />
        <Text style={styles.emptyStateText}>
          Nothing to see here yet... Start sharing your memories with friends and family with threads.
          Create one on the <Icons name='threads' size={16} color='black' /> tab below!
          </Text>
      </View>
    )
  }

  _renderTour () {
    return (
      <View style={styles.emptyStateContainer}>
        <Image
          resizeMode={'contain'}
          style={styles.emptyStateImage}
          source={require('../../../Images/v2/invite_friends.png')} />
        <Text style={styles.emptyStateText}>
          This is where your activities and
          engagements are listed for easy
          browsing. Go share a photo!
        </Text>
        <Button primary text='Cool!' onPress={() => {
          this.props.completeTourScreen()
        }} />
      </View>
    )
  }

  _renderItems () {
    return (
      <View style={styles.contentContainer}>
        <FlatList
          data={this.props.notifications}
          keyExtractor={this._keyExtractor.bind(this)}
          renderItem={this._renderItem.bind(this)}
          refreshing={false}
          onRefresh={this.props.refreshMessages}
          initialNumToRender={20}
        />
      </View >
    )
  }

  render () {
    return (
      <View style={styles.container}>
        {this.props.showTourScreen && this._renderTour()}
        {this.props.showPlaceholder && this._renderPlaceholder()}
        {!this.props.showPlaceholder && !this.props.showTourScreen && this._renderItems()}
        {/* <Toast ref='toast' position='top' fadeInDuration={50} style={styles.toast} textStyle={styles.toastText} /> */}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const notifications = state.notifications.notifications
    .filter((n) => {
      if (n.type === 1) return true // a device notification
      return n.actor_username !== undefined && n.actor_username !== ''
    })
  const tourScreenFeed = state.preferences.tourScreens.feed === true
  return {
    notifications,
    profile: state.preferences.profile,
    showTourScreen: tourScreenFeed,
    showPlaceholder: notifications.length === 0 && !tourScreenFeed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    refreshNotifications: () => dispatch(NotificationsActions.refreshNotificationsRequest()),
    readAllNotifications: () => dispatch(NotificationsActions.readAllNotificationsRequest()),
    refreshMessages: () => { dispatch(TextileNodeActions.refreshMessagesRequest()) },
    clickNotification: (notification) => dispatch(NotificationsActions.notificationSuccess(notification)),
    completeTourScreen: () => { dispatch(PreferencesActions.completeTourSuccess('feed')) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
