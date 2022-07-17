import { defineStore } from 'pinia'

export interface AuthInterface {
  id?: number,
  name?: string
}

export const useLoginStore = defineStore({
  id: 'useLoginStore',
  state: () => ({
    account:<string | null> (null),
    authList:<AuthInterface> {
      id: undefined,
      name: undefined
    },
    apiToken:<string | null> (null)
  }),
  // getters: {

  // },
  // actions: {

  // }
})