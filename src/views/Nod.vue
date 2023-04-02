<template>
  <div
    style="width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center;flex-direction: column; gap: 10px;">
    <input type="button" @click="send('Psorinorm')" name="submit" value="Псоринорм">
    <input type="button" @click="send('Antipapilom')" name="submit" value="Антипапилом комплекс">
    <input type="button" @click="send('Antisilverin')" name="submit" value="Антисильверин">
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const send = (data) => {
  router.push({ name: data, })
}
</script>
<style scoped>
input {
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: max-content;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

input[type="button"] {
  background-color: rgb(84, 105, 212);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
    rgb(84, 105, 212) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
</style>