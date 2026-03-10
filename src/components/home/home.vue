<template>
  <div class="hello">
    <div style="display: flex;
  flex-direction: column;
  min-height: 100vh;">
      <div class="home_head"></div>
      <div class="home_body">
        <div style="background-color: #42b983;width: 100px;height: 200px"></div>
        <div style="background-color: #42b983;width: 100px;height: 200px"></div>
        <div style="background-color: #42b983;width: 100px;height: 200px"></div>
        <div style="background-color: #42b983;width: 100px;height: 200px"></div>
        <div style="background-color: #42b983;width: 100px;height: 200px"></div>
      </div>
      <div class="home_food"></div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  padding: 0;
}
.home_body{
  background-color: red;
  height: 100px;
  width: 100%;
}
.home_head{
  background-color: blue;
  height: 100px;
  width: 100%;
}
.home_food{
  margin-top: auto; /* 自动向上推，贴到底部 */
  width: 100%;      /* 保持宽度不变 */
  height: 50px;
  background-color: #f0e68c;
}
</style>
