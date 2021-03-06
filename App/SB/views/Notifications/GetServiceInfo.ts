import { ServiceInfo } from '.'

export default function(service: string): ServiceInfo | undefined {
  switch (service) {
    case 'notifications':
      return {
        title: 'Notifications',
        subtitle: 'Enable notifications',
        details:
          'Choose Textile events that trigger notifications. Notifications can be enabled or disabled at any time.'
      }
    case 'INVITE_RECEIVED':
      return {
        title: 'New Thread Invite',
        subtitle: 'Someone shares a photo with you',
        dependsOn: 'notifications'
      }
    case 'ACCOUNT_PEER_JOINED':
      return {
        title: 'New Device Paired',
        subtitle: 'Someone shares a photo with you',
        dependsOn: 'notifications'
      }
    case 'FILES_ADDED':
      return {
        title: 'New Shared Photos',
        subtitle: 'Someone shares a photo with you',
        dependsOn: 'notifications'
      }
    case 'COMMENT_ADDED':
      return {
        title: 'New Photo Comment',
        subtitle: 'Someone shares a photo with you',
        dependsOn: 'notifications'
      }
    case 'LIKE_ADDED':
      return {
        title: 'New Photo Like',
        subtitle: 'Someone shares a photo with you',
        dependsOn: 'notifications'
      }
    case 'PEER_JOINED':
      return {
        title: 'Contact Joined Thread',
        subtitle: 'Someone shares a photo with you',
        dependsOn: 'notifications'
      }
    case 'PEER_LEFT':
      return {
        title: 'Contact Left Thread',
        subtitle: 'Someone shares a photo with you',
        dependsOn: 'notifications'
      }
    default:
      return undefined
  }
}
