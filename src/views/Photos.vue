<template>
    <div class="container">
      <div class="row">
        <appTable class="col-md-4" v-for="(item, index) in $store.state.photos" :key="index">
          <div class="card">
            <div class="card-body">
                <img :src="item.url" alt="photos">
            </div>

            <div class="card-footer">
                <p>
                    <span>{{ item.id }}</span>.
                    <span>{{ item.title }}</span>
                </p>
            </div>
          </div>
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
  import store from '@/store';
  
  const page = ref(1)
  const count = ref(1)
  
  const next =()=>{
    count.value++
  }
  
  const prev =()=>{
    if(count.value > 1){
        count.value--
    }
  }
  
  watch(count, (value)=>{
    store.dispatch("get_photos", value)
  })
  
  onMounted(()=>{
    store.dispatch('get_photos', page.value)
  })
  
  </script>
  
  
  <style lang="scss" scoped>
  img{
    width: 100%;
  }

  .container{
    min-height: 100vh;
  }
  </style>
  