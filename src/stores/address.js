import { defineStore } from 'pinia'

export const addressStore = defineStore('address', {
    state: () => {
        return { address: "0xF38b1EE6dF8E680fd367f1a7EEb70E21e7002a80" }
    },
    actions: {
        set(address) {
            this.address = address
        },
        clear() {
            this.address = "0xF38b1EE6dF8E680fd367f1a7EEb70E21e7002a80"
        }
    },
})