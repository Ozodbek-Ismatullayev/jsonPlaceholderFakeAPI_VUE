<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 bg-info">
        <Sidebar/>
      </div>

      <div class="col-md-10 bg-success">
        <router-view/>
      </div>
    </div>
  </div>
</template>


<script setup>
import Sidebar from './components/layout/Sidebar.vue'
</script>



<style lang="scss">

</style>
