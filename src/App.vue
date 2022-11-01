<script setup>
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Aside from "@/components/Aside.vue";
</script>

<template>
  <Header></Header>
  <el-row class="hidden-sm-and-up"><Aside></Aside></el-row>
  <el-row>
    <el-col :span="3" class="hidden-xs-only"><Aside></Aside></el-col>
    <el-col :span="21">
      <el-main>
        <RouterView/>
      </el-main>
    </el-col>
  </el-row>
  <Footer></Footer>
</template>