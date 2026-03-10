<template>
  <div class="activity">
    <div class="head">
      <div class="title">优惠活动</div>
    </div>
    <div class="tabs">
      <button
        v-for="t in tabs"
        :key="t.key"
        class="tab"
        :class="{ active: activeTab === t.key }"
        @click="activeTab = t.key"
      >
        {{ t.label }}
      </button>
    </div>
    <div class="list">
      <div
        v-for="a in currentList"
        :key="a.id"
        class="card"
      >
        <div v-if="a.badge" class="badge">{{ a.badge }}</div>
        <div class="card-left">
          <div class="line1" v-html="a.line1"></div>
          <div class="line2" v-html="a.line2"></div>
        </div>
        <div class="card-right">
          <div class="art" :style="{ background: a.bg }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityPage',
  data() {
    return {
      tabs: [
        { key: 'all', label: '全部优惠' },
        { key: 'limited', label: '限时活动' },
        { key: 'new', label: '新人福利' }
      ],
      activeTab: 'all',
      activities: [
        {
          id: 'a1',
          type: 'new',
          badge: '',
          line1: '首存<span class="hl">1888</span>彩金',
          line2: '新用户第一次存款',
          bg: 'linear-gradient(135deg,#ffecd2,#fcb69f)'
        },
        {
          id: 'a2',
          type: 'limited',
          badge: '限时',
          line1: '添加<span class="hl">97</span>专属经理',
          line2: '领<span class="hl">8–8888</span> 现金回馈',
          bg: 'linear-gradient(135deg,#c3f0ff,#a6c0fe)'
        },
        {
          id: 'a3',
          type: 'limited',
          badge: '限时',
          line1: '每日<span class="hl">8888</span>助力',
          line2: '电子捕鱼日救援金',
          bg: 'linear-gradient(135deg,#d4fc79,#96e6a1)'
        }
      ]
    }
  },
  computed: {
    currentList() {
      if (this.activeTab === 'all') return this.activities
      if (this.activeTab === 'limited') return this.activities.filter(i => i.type === 'limited')
      if (this.activeTab === 'new') return this.activities.filter(i => i.type === 'new')
      return this.activities
    }
  }
}
</script>

<style scoped>
.activity{background:#f6f7fb;min-height:calc(100vh - 56px);padding-bottom:12px}
.head{
  height:88px;
  background: linear-gradient(135deg,#3b5bdb,#845ef7);
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
  display:flex;
  align-items:flex-end;
  justify-content:center;
  padding:0 12px 12px 12px;
  color:#fff;
}
.title{font-size:18px;font-weight:700}
.tabs{
  margin:10px 12px 8px 12px;
  background:#fff;
  border-radius:12px;
  padding:6px;
  display:flex;
  gap:8px;
}
.tab{
  flex:1;
  height:36px;
  border-radius:10px;
  border:1px solid #e5e7eb;
  background:#fff;
  color:#334155;
  font-size:14px;
}
.tab.active{
  color:#2b6df5;
  border-color:#2b6df5;
  box-shadow:0 0 0 2px rgba(43,109,245,0.08) inset;
}
.list{padding:0 10px}
.card{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:14px 12px 14px 14px;
  background:#fff;
  border-radius:16px;
  border:1px solid #e7eefc;
  box-shadow:0 2px 10px rgba(0,0,0,0.04);
  margin:12px 0;
}
.badge{
  position:absolute;
  left:12px;
  top:-8px;
  background:#ff6b6b;
  color:#fff;
  font-size:12px;
  border-radius:8px;
  padding:2px 8px;
}
.card-left{display:flex;flex-direction:column;gap:6px;color:#1f2937}
.line1{font-size:18px;font-weight:700}
.line2{font-size:14px;color:#4b5563}
.hl{color:#ff3b30}
.card-right{width:140px;height:80px;display:flex;align-items:center;justify-content:center}
.art{width:100%;height:100%;border-radius:12px}
</style>
