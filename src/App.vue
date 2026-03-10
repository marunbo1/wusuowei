<template>
  <div class="app-wrap">
    <router-view></router-view>
    <nav class="tabbar">
      <router-link class="tab-item" active-class="active" exact-active-class="active" to="/">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-6v-6h-4v6H4a1 1 0 0 1-1-1z"/>
        </svg>
        <span class="label">首页</span>
      </router-link>
      <router-link class="tab-item" active-class="active" to="/earn">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9"/>
          <rect x="7" y="11" width="10" height="2" rx="1"/>
        </svg>
        <span class="label">赚钱</span>
      </router-link>
      <router-link class="tab-item" active-class="active" to="/activity">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 8h18v4a2 2 0 0 0-2 2 2 2 0 0 0 2 2v4H3v-4a2 2 0 0 0 2-2 2 2 0 0 0-2-2V8z"/>
        </svg>
        <span class="label">活动</span>
      </router-link>
      <router-link class="tab-item" active-class="active" to="/deposit">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M2 7h16a4 4 0 0 1 4 4v6H2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/>
          <rect x="16" y="11" width="6" height="4" rx="1"/>
        </svg>
        <span class="label">存款</span>
      </router-link>
      <router-link class="tab-item" active-class="active" to="/mine">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/>
          <path d="M5 21a7 7 0 0 1 14 0z"/>
        </svg>
        <span class="label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default { name: 'App' }
</script>

<style>
.app-wrap, #app {
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
  padding-bottom: 56px;   /* 给固定底部导航留出空间 */
}

* {
  padding: 0;
  margin: 0
}
.tabbar{
  height: 56px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.06);
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 414px; /* 与页面宽度一致，居中 */
  z-index: 1000;
}
.tab-item{
  font-size: 12px;
  color: #666;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
.icon{
  width: 22px;
  height: 22px;
  fill: currentColor;
}
.label{
  line-height: 1;
}
.tab-item.active{
  color: #2b6df5;
}
</style>
