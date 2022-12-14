<template>
  <div>
    <h1>Test</h1>
    <pre>
      {{ list.value }}
    </pre>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import api from "@/api";

let list = reactive({});

api.getBTCprice().then((response) => (list.value = response.bpi));
</script>
