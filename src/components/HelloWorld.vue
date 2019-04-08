<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return { msg: 'Welcome to Your Vue.js App' };
  },
  created() {
    // console.log(b);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-size: 0.14rem;
  font-weight: normal;
  text-align: center;
}

ul {
  display: flex;
  justify-content: center;
}

li {
  margin: 0 0.1rem;
  font-size: 0.14rem;
}

a {
  color: #42b983;
}
</style>
