<template>
  <div>
    <h1>Without loop input </h1>
    <form class="space-y-5 bg-gray-300 py-5 px-10 " @submit.prevent="onsubmit">
      <base-input v-model="valueee" as="input" name="password"></base-input>
      <base-input v-model="valueee1" as="input" name="email"></base-input>
      <base-input v-model="valueee2" as="input" name="FirstName"></base-input>
      <base-input v-model="valueee3" as="input" name="LastName"></base-input>
    </form>

    <button class="btn" @click="melto()">cli me ===</button>
    <div class="datainput">
      DATA VALUE
      {{ valueee }}
      {{ valueee1 }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueee: "",
      valueee1: "",
      valueee2: "",
      valueee3: "",
    };
  },
  setup() {},
};
</script>

