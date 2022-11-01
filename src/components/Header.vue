<script>
import {addressStore} from '@/stores/address'

export default {
  name: "Header",
  setup() {
    const store = addressStore()
    store.address = 'new address'
    return {store}
  },
  data: function () {
    return {
      connecting: false,
      disconnecting: false,
      totalActivity: null,
      address: null,
      walletConnected: false,
      inputAddress: null,
    };
  },
  methods: {
    async connectWallet() {
      try {
        this.connecting = true;
        if (!window.ethereum) {
          this.connecting = false;
          return
        }
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        this.walletConnected = accounts.length === 1;
      } catch (error) {
        console.error(error);
      }
      this.connecting = false;
    },
    disConnectWallet() {
      try {
        this.disconnecting = true;
        if (this.walletConnected === false) {
          this.disconnecting = false;
          return
        }
        this.walletConnected = false
      } catch (error) {
        console.error(error);
      }
      this.disconnecting = false;
    },
    handleSelect(key) {
    },
    search() {
    }
  },
  mounted() {
    let that = this;
    if (!window.ethereum) {
      return
    }
    window.ethereum.on("accountsChanged", function (accounts) {
      if (accounts.length === 0) {
        that.walletConnected = false;
      }
      that.store.set()
    });
  }
};
</script>

<template>
  <el-menu mode="horizontal" :router="true">
    <el-menu-item route="/" index="home" style="padding: 5px">
      <el-avatar size="large" shape="square" fit="fill"
                 src="https://i1.sndcdn.com/artworks-OgUa4dwytPUh4Cpu-StBTsQ-t500x500.jpg"></el-avatar>
    </el-menu-item>
    <el-input
        style="width: 50%; padding: 5px"
        v-model="inputAddress"
        maxlength="42"
        placeholder="0xABC000..."
        show-word-limit
        type="text"
        size="large"
    />
    <el-menu-item style="padding-top: 15px">
      <el-button size="large" @click="search">
        Search
      </el-button>
    </el-menu-item>

    <div class="flex-grow"/>
    <el-menu-item index="connect" @click="connectWallet" v-if="!walletConnected">
      <i class="el-icon-arrow-left"></i>
      <span>Connect Wallet</span>
    </el-menu-item>
    <el-menu-item @click="disConnectWallet" index="profile" v-if="walletConnected">
      <i class="el-icon-user"></i>
      <span>Disconnect Wallet</span>
    </el-menu-item>
  </el-menu>
</template>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>