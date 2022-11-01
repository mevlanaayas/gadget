<script>
import Api from "@/api";

export default {
  props: ['address'],
  name: "Welcome",
  data() {
    return {
      info: null,
      colorMapping: {
        "social": '#63be2f',
        "transaction": '#e1ba1d',
        "exchange": '#44c799',
        "collectible": '#fc6767',
        "donation": '#2714d3',
        "governance": '#581ba6'
      }
    }
  },
  methods: {
    handleClick() {
    },
    dateFormatter(row, column) {
      let date = new Date(row.timestamp);
      return date.toDateString() + ' ' + date.toLocaleTimeString()
    },
    feeFormatter(row, column) {
      const num = Number(row.fee);
      const roundedString = num.toFixed(5);
      return Number(roundedString)
    },
    addressFormatter(row, column) {
      return row[column.property] === undefined ? "No address" : row[column.property].slice(0, 7) + "..." +row[column.property].slice(row[column.property].length - 5)
    },
    toUpperCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  mounted() {
    let params = {
      "address": [
        this.address
      ],
      "limit": 500,
      "refresh": false,
      "include_poap": false,
      "ignore_contract": false,
      "count_only": false,
      "query_status": false
    }
    Api.GetNotes(params)
        .then(response => {
          this.info = response.data.result
        })
  }
}
</script>

<template>
  <el-table :data="info">
    <el-table-column prop="timestamp" label="Date" min-width="200" :formatter="dateFormatter"/>
    <el-table-column prop="fee" label="Fee" min-width="75" :formatter="feeFormatter"/>
    <el-table-column prop="address_from" label="From" :formatter="addressFormatter" min-width="120"/>
    <el-table-column prop="address_to" label="To" :formatter="addressFormatter" min-width="120"/>
    <el-table-column prop="network" label="Network" min-width="100">
      <template #default="scope">
        <el-tag
            :color="colorMapping[scope.row.network]"
            disable-transitions
        >{{ toUpperCase(scope.row.network) }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column prop="tag" label="Tag" min-width="110">
      <template #default="scope">
        <el-tag
            :color="colorMapping[scope.row.tag]"
            disable-transitions
        >{{ toUpperCase(scope.row.tag) }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column prop="type" label="Type" min-width="100">
      <template #default="scope">
        <el-tag
            :color="colorMapping[scope.row.type]"
            disable-transitions
        >{{ toUpperCase(scope.row.type) }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Transaction Details" min-width="150">
      <template #default>
        <el-link link type="primary" size="small" @click="handleClick">OpenSea
        </el-link>
        <br/>
        <el-link link type="primary" size="small" @click="handleClick">Etherscan
        </el-link>
      </template>
    </el-table-column>
  </el-table>
  <el-space direction="vertical" :size="100"><div></div></el-space>
</template>