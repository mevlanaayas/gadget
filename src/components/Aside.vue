<script>
import {addressStore} from '@/stores/address'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

export default {
  name: "Aside",
  setup() {
    const store = addressStore()
    return {store}
  },
  data: function () {
    return {}
  },
  methods: {
    handleSelect(key) {
      if (key.index === '2') {
        this.$router.push({name: 'history', params: {address: this.store.address}})
      }
      if (key.index === '3') {
        this.$router.push({name: 'watchlist'})
      }
      if (key.index === '4') {
        this.$router.push({name: 'recent'})
      }
    }
  },
  mounted() {
    let that = this;
  }
}
</script>

<template>
  <el-row class="spec-aside-sm hidden-sm-and-up">
    <el-col>
      <el-menu
          mode="horizontal"
          default-active="1"
      >
        <el-menu-item index="2" @click="handleSelect">
          <span>History</span>
        </el-menu-item>
<!--        <el-menu-item index="3" @click="handleSelect">
          <span>Watchlist</span>
        </el-menu-item>
        <el-menu-item index="4" @click="handleSelect">
          <span>Recent Searches</span>
        </el-menu-item>-->
      </el-menu>
    </el-col>
  </el-row>
  <el-row class="spec-aside hidden-xs-only">
    <el-col>
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
      >
        <el-menu-item index="2" @click="handleSelect">
          <span>History</span>
        </el-menu-item>
<!--        <el-menu-item index="3" @click="handleSelect">
          <span>Watchlist</span>
        </el-menu-item>
        <el-menu-item index="4" @click="handleSelect">
          <span>Recent Searches</span>
        </el-menu-item>-->
      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped>
.spec-aside {
  position: fixed;
  width: 150px;
  top: 90px;
  left: 20px;
  height: 100px;
}

.spec-aside-sm {
  height: 100px;
  width: 110%;
}
</style>