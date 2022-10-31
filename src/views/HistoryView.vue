<script>
import History from "@/components/History.vue";

export default {
  props: ['address'],
  mounted() {
    console.log(this.address)
  }
}
</script>

<template>
  <h1>History - {{address}}</h1>
  <History></History>
</template>
