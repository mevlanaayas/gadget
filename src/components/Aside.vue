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
  data: function () {
    return {
      address: addressStore().address
    };
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
  <el-row class="spec-aside-sm hidden-sm-and-up">
    <el-col>
      <el-menu
          mode="horizontal"
          default-active="1"
          :router="true"
      >
        <el-menu-item index="2" :route="{name: 'history', params: {address: this.address}}">
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
  <el-row class="spec-aside hidden-xs-only">
    <el-col>
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          :router="true"
      >
        <el-menu-item index="2" :route="{name: 'history', params: {address: this.address}}">
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