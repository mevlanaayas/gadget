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
    store.address = 'new address'
    return {store}
  },
  data: function () {
    return {};
  },
  methods: {
    handleSelect(key) {
    }
  },
  mounted() {
    let that = this;
  }
};
</script>

<template>
  <el-row style="padding-top: 100px; padding-left: 20px;">
    <el-col>
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :router="true"
      >
        <el-menu-item index="2" route="/">
          <span>History</span>
        </el-menu-item>
        <el-menu-item index="3" route="watchlist">
          <span>Watchlist</span>
        </el-menu-item>
        <el-menu-item index="4" route="recent">
          <span>Recent Searches</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style>

</style>