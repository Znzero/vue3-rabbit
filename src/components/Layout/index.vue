<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutCeiling from './components/LayoutCeiling.vue';
</script>

<template>
  <LayoutNav />
  <LayoutCeiling />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>