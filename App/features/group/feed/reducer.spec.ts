import { feedActions as actions, feedReducer as reducer } from './'
import { FeedItemData } from '@textile/react-native-sdk'

const initialState = reducer(undefined, {} as any)

const group1 = 'group1'
const group2 = 'group2'
const items: ReadonlyArray<FeedItemData> = [
  {
    type: 0, // FeedItemType.Text
    block: 'block1',
    value: {
      block: 'block1',
      date: {
        seconds: 0,
        nanos: 0
      },
      user: {
        address: 'address',
        name: 'name',
        avatar: 'avatar'
      },
      body: 'body',
      comments: [],
      likes: []
    }
  },
  {
    type: 0, // FeedItemType.Text
    block: 'block2',
    value: {
      block: 'block2',
      date: {
        seconds: 0,
        nanos: 0
      },
      user: {
        address: 'address',
        name: 'name',
        avatar: 'avatar'
      },
      body: 'body',
      comments: [],
      likes: []
    }
  },
  {
    type: 0, // FeedItemType.Text
    block: 'block3',
    value: {
      block: 'block3',
      date: {
        seconds: 0,
        nanos: 0
      },
      user: {
        address: 'address',
        name: 'name',
        avatar: 'avatar'
      },
      body: 'body',
      comments: [],
      likes: []
    }
  }
]
const otherItems: ReadonlyArray<FeedItemData> = [
  {
    type: 0, // FeedItemType.Text
    block: 'block4',
    value: {
      block: 'block4',
      date: {
        seconds: 0,
        nanos: 0
      },
      user: {
        address: 'address',
        name: 'name',
        avatar: 'avatar'
      },
      body: 'body',
      comments: [],
      likes: []
    }
  },
  {
    type: 0, // FeedItemType.Text
    block: 'block5',
    value: {
      block: 'block5',
      date: {
        seconds: 0,
        nanos: 0
      },
      user: {
        address: 'address',
        name: 'name',
        avatar: 'avatar'
      },
      body: 'body',
      comments: [],
      likes: []
    }
  }
]

describe('feed', () => {
  describe('initial state', () => {
    it('should match snapshot', () => {
      expect(initialState).toMatchSnapshot()
    })
  })
  describe('refresh', () => {
    it('should manage async calls to refresh', () => {
      const state0 = reducer(
        initialState,
        actions.refreshFeed.request({ id: group1 })
      )
      expect(state0.groups[group1]).toBeDefined()
      expect(state0.groups[group1]!.loading).toBeTruthy()
      expect(state0.groups[group1]!.items).toHaveLength(0)
      expect(state0.groups[group1]!.error).toBeUndefined()
      const state1 = reducer(
        state0,
        actions.refreshFeed.success({ id: group1, items })
      )
      expect(state1.groups[group1]).toBeDefined()
      expect(state1.groups[group1]!.loading).toBeFalsy()
      expect(state1.groups[group1]!.items).toEqual(items)
      expect(state1.groups[group1]!.error).toBeUndefined()
      const state2 = reducer(
        state1,
        actions.refreshFeed.request({ id: group1 })
      )
      expect(state2.groups[group1]).toBeDefined()
      expect(state2.groups[group1]!.loading).toBeTruthy()
      expect(state1.groups[group1]!.items).toEqual(items)
      expect(state2.groups[group1]!.error).toBeUndefined()
      const state3 = reducer(
        state2,
        actions.refreshFeed.success({ id: group1, items })
      )
      expect(state3.groups[group1]).toBeDefined()
      expect(state3.groups[group1]!.loading).toBeFalsy()
      expect(state3.groups[group1]!.items).toEqual(items)
      expect(state3.groups[group1]!.error).toBeUndefined()
      const state4 = reducer(
        state3,
        actions.refreshFeed.request({ id: group1 })
      )
      expect(state4.groups[group1]).toBeDefined()
      expect(state4.groups[group1]!.loading).toBeTruthy()
      expect(state4.groups[group1]!.items).toEqual(items)
      expect(state4.groups[group1]!.error).toBeUndefined()
      const state5 = reducer(
        state4,
        actions.refreshFeed.failure({ id: group1, error: 'oh man' })
      )
      expect(state5.groups[group1]).toBeDefined()
      expect(state5.groups[group1]!.loading).toBeFalsy()
      expect(state5.groups[group1]!.items).toEqual(items)
      expect(state5.groups[group1]!.error).toEqual('oh man')
    })
    it('should store multiple groups', () => {
      const state0 = reducer(
        initialState,
        actions.refreshFeed.request({ id: group1 })
      )
      const state1 = reducer(
        state0,
        actions.refreshFeed.request({ id: group2 })
      )
      expect(state1.groups[group1]).toBeDefined()
      expect(state1.groups[group1]!.loading).toBeTruthy()
      expect(state1.groups[group1]!.items).toHaveLength(0)
      expect(state1.groups[group1]!.error).toBeUndefined()
      expect(state1.groups[group2]).toBeDefined()
      expect(state1.groups[group2]!.loading).toBeTruthy()
      expect(state1.groups[group2]!.items).toHaveLength(0)
      expect(state1.groups[group2]!.error).toBeUndefined()
      const state2 = reducer(
        state1,
        actions.refreshFeed.success({ id: group1, items })
      )
      const state3 = reducer(
        state2,
        actions.refreshFeed.success({ id: group2, items: otherItems })
      )
      expect(state3.groups[group1]).toBeDefined()
      expect(state3.groups[group1]!.loading).toBeFalsy()
      expect(state3.groups[group1]!.items).toEqual(items)
      expect(state3.groups[group1]!.error).toBeUndefined()
      expect(state3.groups[group2]).toBeDefined()
      expect(state3.groups[group2]!.loading).toBeFalsy()
      expect(state3.groups[group2]!.items).toEqual(otherItems)
      expect(state3.groups[group2]!.error).toBeUndefined()
    })
  })
  describe('load', () => {
    it('should manage async calls to load', () => {
      const state0 = reducer(
        initialState,
        actions.loadFeedItems.request({ id: group1 })
      )
      expect(state0.groups[group1]).toBeDefined()
      expect(state0.groups[group1]!.loading).toBeTruthy()
      expect(state0.groups[group1]!.items).toHaveLength(0)
      expect(state0.groups[group1]!.error).toBeUndefined()
      const state1 = reducer(
        state0,
        actions.loadFeedItems.success({ id: group1, items })
      )
      expect(state1.groups[group1]).toBeDefined()
      expect(state1.groups[group1]!.loading).toBeFalsy()
      expect(state1.groups[group1]!.items).toEqual(items)
      expect(state1.groups[group1]!.error).toBeUndefined()
      const state2 = reducer(
        state1,
        actions.loadFeedItems.request({ id: group1 })
      )
      expect(state2.groups[group1]).toBeDefined()
      expect(state2.groups[group1]!.loading).toBeTruthy()
      expect(state1.groups[group1]!.items).toEqual(items)
      expect(state2.groups[group1]!.error).toBeUndefined()
      const state3 = reducer(
        state2,
        actions.loadFeedItems.success({ id: group1, items })
      )
      expect(state3.groups[group1]).toBeDefined()
      expect(state3.groups[group1]!.loading).toBeFalsy()
      expect(state3.groups[group1]!.items).toEqual([...items, ...items])
      expect(state3.groups[group1]!.error).toBeUndefined()
      const state4 = reducer(
        state3,
        actions.loadFeedItems.request({ id: group1 })
      )
      expect(state4.groups[group1]).toBeDefined()
      expect(state4.groups[group1]!.loading).toBeTruthy()
      expect(state4.groups[group1]!.items).toEqual([...items, ...items])
      expect(state4.groups[group1]!.error).toBeUndefined()
      const state5 = reducer(
        state4,
        actions.loadFeedItems.failure({ id: group1, error: 'oh man' })
      )
      expect(state5.groups[group1]).toBeDefined()
      expect(state5.groups[group1]!.loading).toBeFalsy()
      expect(state5.groups[group1]!.items).toEqual([...items, ...items])
      expect(state5.groups[group1]!.error).toEqual('oh man')
    })
    it('should store multiple groups', () => {
      const state0 = reducer(
        initialState,
        actions.loadFeedItems.request({ id: group1 })
      )
      const state1 = reducer(
        state0,
        actions.loadFeedItems.request({ id: group2 })
      )
      expect(state1.groups[group1]).toBeDefined()
      expect(state1.groups[group1]!.loading).toBeTruthy()
      expect(state1.groups[group1]!.items).toHaveLength(0)
      expect(state1.groups[group1]!.error).toBeUndefined()
      expect(state1.groups[group2]).toBeDefined()
      expect(state1.groups[group2]!.loading).toBeTruthy()
      expect(state1.groups[group2]!.items).toHaveLength(0)
      expect(state1.groups[group2]!.error).toBeUndefined()
      const state2 = reducer(
        state1,
        actions.loadFeedItems.success({ id: group1, items })
      )
      const state3 = reducer(
        state2,
        actions.loadFeedItems.success({ id: group2, items: otherItems })
      )
      expect(state3.groups[group1]).toBeDefined()
      expect(state3.groups[group1]!.loading).toBeFalsy()
      expect(state3.groups[group1]!.items).toEqual(items)
      expect(state3.groups[group1]!.error).toBeUndefined()
      expect(state3.groups[group2]).toBeDefined()
      expect(state3.groups[group2]!.loading).toBeFalsy()
      expect(state3.groups[group2]!.items).toEqual(otherItems)
      expect(state3.groups[group2]!.error).toBeUndefined()
    })
  })
})
