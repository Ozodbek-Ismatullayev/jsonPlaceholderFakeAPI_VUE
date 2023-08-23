<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-4">
        <select class="form-control" v-model="formSelect">
          <option value="" selected hidden>Select size...</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
        </select>
      </div>
    </div>

    <div class="row">
      <appTable :headers="headers" :body="$store.state.users">
        <template #body_address="{ item }">
          {{ item.address.city }}
        </template>

        <template #body_company="{ item }">
          {{ item.company.name }}
        </template>
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
  {title: "Id", value: "id"},
  {title: "Name", value: "name"},
  {title: "Username", value: "username"},
  {title: "Email", value: "email"},
  {title: "Address", value: "address"},
  {title: "Phone", value: "phone"},
  {title: "Website", value: "website"},
  {title: "Company", value: "company"},
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
  store.dispatch("get_users", value)
})

onMounted(()=>{
  store.dispatch('get_users', page.value)
})

</script>


<style lang="scss" scoped>
.container{
    min-height: 100vh;
  }
</style>
