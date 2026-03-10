<template>
  <Home></Home>
</template>

<script>
import Home from "@/components/home/home";

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 414px;
  margin: 0 auto;         /* 居中显示 */
  min-height: 100vh;      /* 撑满屏幕高度 */
  overflow-x: hidden;     /* 隐藏横向溢出 */
  box-shadow: 0 0 10px rgba(0,0,0,0.1); /* 可选：增加阴影效果 */
}

* {
  padding: 0;
  margin: 0
}
</style>
