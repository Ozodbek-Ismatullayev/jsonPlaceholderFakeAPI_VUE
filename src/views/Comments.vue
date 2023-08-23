<template>
    <div class="container">
      <div class="row">
        <appTable :headers="headers" :body="$store.state.comments">
          
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
  const count = ref(1)
  const headers = ref([
    {title: "Post-Id", value: "postId"},
    {title: "Id", value: "id"},
    {title: "Name", value: "name"},
    {title: "Email", value: "email"},
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
    store.dispatch("get_comments", value)
  })
  
  onMounted(()=>{
    store.dispatch('get_comments', page.value)
  })
  
  </script>
  
  
  <style lang="scss" scoped>
  .container{
    min-height: 100vh;
  }
  </style>
  