<template>
    <div class="container">
      <div class="row">
        <appTable :headers="headers" :body="$store.state.posts">
          
        </appTable>
        <div class="col-md-6 offset-3 text-center">
          <button class="btn btn-primary m-2" @click="prev">prev</button>
          <span>{{ count }}</span>
          <button class="btn btn-info m-2" @click="next">next</button>
        </div>
      </div>
  </div>
  </template>
  
  
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import appTable from '../ui/app-table.vue'
  import store from '@/store';
  
  const page = ref(1)
  const formSelect = ref("")
  const count = ref(1)
  const headers = ref([
    {title: "User-Id", value: "userId"},
    {title: "Id", value: "id"},
    {title: "Title", value: "title"},
    {title: "Body", value: "body"},
  ])
  
  const next =()=>{
    count.value++
  }
  
  const prev =()=>{
    if(count.value > 1){
        count.value--
    }
  }
  
  watch(count, (value)=>{
    store.dispatch("get_posts", value)
  })
  
  onMounted(()=>{
    store.dispatch('get_posts', page.value)
  })
  
  </script>
  
  
  <style lang="scss" scoped>
  .container{
    min-height: 100vh;
  }
  </style>
  