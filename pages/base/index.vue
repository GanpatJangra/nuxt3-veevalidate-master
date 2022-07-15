<template>
  <div>
    <h1>hello</h1>
    <form @submit.prevent="onsubmit">
      <base-input v-model="valueee" as="input" name="password" style="background-color: red"></base-input>
      <base-input v-model="valueee1" as="input" name="email" style="background-color: red"></base-input>
      <base-input v-model="valueee2" as="input" name="FirstName" style="background-color: red"></base-input>
      <base-input v-model="valueee3" as="input" name="LastName" style="background-color: red"></base-input>
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
    };
  },
  setup() {},
};
</script>

<style scoped>
div {
  background-color: gray;
}

.btn {
  border-radius: 30px;
  padding: 10px;
  margin-top: 30px;
  font: 300px;
}
.datainput{
  display: flex;
  flex-direction: row ;
}
</style>
