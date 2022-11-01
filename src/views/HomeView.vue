<script>
export default {
  name: "Home",
  data() {
    return {
      address: null,
    }
  },
  methods: {
    connectWallet() {
      try {
        if (!window.ethereum) {
          return
        }
        window.ethereum.request({method: "eth_requestAccounts"});
      } catch (error) {
        console.error(error);
      }
    },
    search() {
      this.$router.push({name: 'history', params: {address: this.address}})
    }
  },
  mounted() {
  }
}
</script>

<template>
  <el-col :offset="3">
    <el-row>
      <h1 style="color: white; margin-bottom: 0">Gadget</h1>
    </el-row>
    <el-row>
      <h4 style="color: white; margin-top: 10px">All your crypto history, at one place</h4>
    </el-row>
    <el-row>
      <el-col :md="12" :sm="24">
        <h2 style="color: white; margin-bottom: 0">Connect Your Wallet</h2>
        <h4 style="color: white; margin-top: 10px">You can connect your wallet instead of copying your address💡</h4>
        <el-button class="hidden-sm-and-up" @click="connectWallet" size="large" style="width: 100%; margin-top: 10px; margin-bottom: 25px">Connect
          MetaMask
        </el-button>
        <el-button class="hidden-xs-only" @click="connectWallet" size="large" style="width: 50%; margin-top: 10px; margin-bottom: 25px">Connect
          MetaMask
        </el-button>
        <el-divider style="margin-top: 35px; margin-bottom: 35px" border-style="dashed"/>
        <h2 style="color: white; margin-bottom: 0">Watch any wallet</h2>
        <el-input
            style="margin-top: 10px"
            v-model="address"
            maxlength="42"
            placeholder="Wallet address"
            show-word-limit
            type="text"
            size="large">
          <template #append>
            <el-button type="success" @click="search">Search</el-button>
          </template>
        </el-input>
        <el-divider style="margin-top: 35px; margin-bottom: 35px" border-style="dashed"/>
        <p><a href="https://docs.rss3.io/" target="_blank">Check RSS3 for more detail</a></p>
      </el-col>
    </el-row>
  </el-col>
</template>
