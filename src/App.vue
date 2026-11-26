<script setup>
import {ref, onMounted} from 'vue'
import router from './router';

const message = ref('loading...');
const error = ref('');

onMounted(async () => {
  try {
    const response = await fetch('api/hello/');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    message.value = data.message;
  } catch (err) {
    error.value = `Failed to fetch message: ${err instanceof Error ? err.message : String(err)}`;
  }
});

</script>
<template>
  <router-view />
</template>