<script setup>
import { ref } from 'vue';  


const name = ref("Francis Anyaegbu");
const Age = ref("I am 19 years old.")
const UpdateNameAge = () => {
  name.value = "Francis Ebubechukwu Anyaegbu";
  Age.value = "I am 25 years old.";
};
</script>



<template>
  <p>
    {{ name }}
  </p>
  <p>
    {{ Age }}
  </p>
  <button @click="UpdateNameAge">Click Me(for age update)</button>
</template>

