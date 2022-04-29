import { ChainId } from '@foxlottery/core-sdk'
import { createStore, Store } from 'redux'

import { addPopup, ApplicationModal, removePopup, setOpenModal } from './reducer'
import reducer, { ApplicationState } from './reducer'

describe('application reducer', () => {
  let store: Store<ApplicationState>

  beforeEach(() => {
    // @ts-ignore TYPE NEEDS FIXING
    store = createStore(reducer, {
      popupList: [],
      blockNumber: {
        [ChainId.ETHEREUM]: 3,
      },
      openModal: null,
    })
  })

  describe('addPopup', () => {
    it('adds the popup to list with a generated id', () => {
      store.dispatch(
        addPopup({
          content: { txn: { hash: 'abc', summary: 'test', success: true } },
        })
      )
      const list = store.getState().popupList
      expect(list).toHaveLength(1)
      expect(typeof list[0].key).toEqual('string')
      expect(list[0].show).toEqual(true)
      expect(list[0].content).toEqual({
        txn: { hash: 'abc', summary: 'test', success: true },
      })
      expect(list[0].removeAfterMs).toEqual(15000)
    })

    it('replaces any existing popups with the same key', () => {
      store.dispatch(
        addPopup({
          key: 'abc',
          content: { txn: { hash: 'abc', summary: 'test', success: true } },
        })
      )
      store.dispatch(
        addPopup({
          key: 'abc',
          content: { txn: { hash: 'def', summary: 'test2', success: false } },
        })
      )
      const list = store.getState().popupList
      expect(list).toHaveLength(1)
      expect(list[0].key).toEqual('abc')
      expect(list[0].show).toEqual(true)
      expect(list[0].content).toEqual({
        txn: { hash: 'def', summary: 'test2', success: false },
      })
      expect(list[0].removeAfterMs).toEqual(15000)
    })
  })

  describe('setOpenModal', () => {
    it('set wallet modal', () => {
      store.dispatch(setOpenModal(ApplicationModal.WALLET))
      expect(store.getState().openModal).toEqual(ApplicationModal.WALLET)
      store.dispatch(setOpenModal(ApplicationModal.WALLET))
      expect(store.getState().openModal).toEqual(ApplicationModal.WALLET)
      store.dispatch(setOpenModal(ApplicationModal.CLAIM_POPUP))
      expect(store.getState().openModal).toEqual(ApplicationModal.CLAIM_POPUP)
      store.dispatch(setOpenModal(null))
      expect(store.getState().openModal).toEqual(null)
    })
  })

  describe('removePopup', () => {
    beforeEach(() => {
      store.dispatch(
        addPopup({
          key: 'abc',
          content: { txn: { hash: 'abc', summary: 'test', success: true } },
        })
      )
    })
    it('hides the popup', () => {
      expect(store.getState().popupList[0].show).toBe(true)
      store.dispatch(removePopup({ key: 'abc' }))
      expect(store.getState().popupList).toHaveLength(1)
      expect(store.getState().popupList[0].show).toBe(false)
    })
  })
})