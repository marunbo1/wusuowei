<template>
  <div class="page">
    <header class="topbar">
      <div class="toprow">
        <div class="logo">PG37.com</div>
        <a class="download">立即下载</a>
      </div>
    </header>
    <div class="content">
      <div class="placeholder">赚钱 页面</div>
    </div>
  </div>
  </template>

<script>
export default {
  name: 'EarnPage'
}
</script>

<style scoped>
.page{min-height:100vh;background:#f6f7fb;padding-top:60px}
.topbar{padding:10px 12px;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.06);position:fixed;top:0;left:50%;transform:translateX(-50%);width:100%;max-width:414px;z-index:1000}
.toprow{display:flex;align-items:center;justify-content:space-between;font-size:14px}
.logo{font-weight:700;color:#2b6df5}
.download{font-size:12px;color:#2b6df5}
.content{display:flex;align-items:center;justify-content:center;height:70vh}
.placeholder{color:#8a8f99}
</style>
