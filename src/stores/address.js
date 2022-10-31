import { defineStore } from 'pinia'

export const addressStore = defineStore('address', {
    state: () => {
        return { address: '' }
    },
    actions: {
        set() {
            this.address = 'mevlana'
        },
    },
})