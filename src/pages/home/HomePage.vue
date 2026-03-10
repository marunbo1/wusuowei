<template>
  <div class="home">
    <header class="topbar">
      <div class="toprow">
        <div class="logo">PG37.com</div>
        <a class="download">立即下载</a>
      </div>
      <div class="actionrow">
        <div class="auth">
          <button class="btn primary">注册</button>
          <button class="btn">登录</button>
        </div>
        <div class="quick">
          <div class="quick-item">存款</div>
          <div class="quick-item">客服</div>
          <div class="quick-item">返水</div>
        </div>
      </div>
    </header>
    <div class="content">
      <aside class="side">
        <div
          v-for="c in categories"
          :key="c.key"
          class="side-item"
          :class="{ active: activeCategory === c.key }"
          @click="setCategory(c.key)"
        >
          {{ c.label }}
        </div>
      </aside>
      <main class="grid">
        <div
          v-for="item in currentItems"
          :key="item.id"
          class="card"
          :style="{ background: item.bg }"
        >
          <div class="card-title">{{ item.title }}</div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      categories: [
        { key: 'hot', label: '热门' },
        { key: 'slot', label: '电子' },
        { key: 'live', label: '真人' },
        { key: 'fish', label: '捕鱼' },
        { key: 'chess', label: '棋牌' },
        { key: 'lottery', label: '彩票' }
      ],
      activeCategory: 'hot',
      itemsByCategory: {}
    }
  },
  created() {
    const makeItems = (names) =>
      names.map((title, i) => ({
        id: `${title}-${i}`,
        title,
        bg: [
          'linear-gradient(135deg,#ff9a9e,#fad0c4)',
          'linear-gradient(135deg,#a18cd1,#fbc2eb)',
          'linear-gradient(135deg,#f6d365,#fda085)',
          'linear-gradient(135deg,#96e6a1,#d4fc79)',
          'linear-gradient(135deg,#84fab0,#8fd3f4)',
          'linear-gradient(135deg,#cfd9df,#e2ebf0)'
        ][i % 6]
      }));
    this.itemsByCategory = {
      hot: makeItems([
        '炸金花','抢庄牛牛','PG电子','麻将胡了','五龙捕鱼','JDB捕鱼','德州扑克','极速赛车','GO彩票',
        '老虎机','水果派对','幸运转盘','骰宝','轮盘','百家乐','龙虎','牛牛对战','斗鸡','闯关冒险',
        '海盗宝藏','西部牛仔','丛林秘宝','魔法奇境','太空漫游','冰雪奇缘','神秘埃及','水下世界',
        '狂野之夜','金矿矿工','啤酒节','赛马','赛车漂移','棒球之星','篮球狂热','足球荣耀','排球风暴'
      ]),
      slot: makeItems(['PG电子','经典游戏','爆分热门','彩金大奖','水果派对','财富转轮','西部牛仔','丛林秘宝','极速转轴']),
      live: makeItems(['真人视讯','百家乐','龙虎','轮盘','21点','骰宝','德州扑克','番摊','大厅推荐']),
      fish: makeItems(['财神捕鱼','五龙捕鱼','JDB捕鱼','海底世界','雷霆战机','巨鲨来袭','章鱼宝藏','深海奇兵','欢乐渔场']),
      chess: makeItems(['象棋','斗地主','炸金花','牛牛','十三水','麻将','德州','双扣','跑胡子']),
      lottery: makeItems(['GO彩票','时时彩','11选5','快3','赛车','七星彩','福彩3D','快乐8','大乐透'])
    }
  },
  computed: {
    currentItems() {
      return this.itemsByCategory[this.activeCategory] || []
    }
  },
  methods: {
    setCategory(key) {
      this.activeCategory = key
    }
  }
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f6f7fb;
  padding-top: 96px; /* 为固定顶部栏预留空间 */
}
.topbar{
  padding: 10px 12px;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 414px;
  z-index: 1000;
}
.toprow{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
}
.logo{
  font-weight: 700;
  color: #2b6df5;
}
.download{
  font-size: 12px;
  color: #2b6df5;
}
.actionrow{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.auth{
  display: flex;
  gap: 8px;
}
.btn{
  padding: 6px 12px;
  border: 1px solid #e4e6eb;
  background: #fff;
  border-radius: 16px;
  font-size: 12px;
}
.btn.primary{
  background: #2b6df5;
  color: #fff;
  border-color: #2b6df5;
}
.quick{
  display: flex;
  gap: 10px;
}
.quick-item{
  font-size: 12px;
  padding: 4px 8px;
  background: #f2f4f7;
  border-radius: 12px;
  color: #333;
}
.content{
  display: flex;
  padding: 12px 8px 0 8px;
  gap: 8px;
}
.side{
  width: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.side-item{
  width: 60px;
  height: 44px;
  border-radius: 16px;
  background: #edf2ff;
  color: #2b6df5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
}
.side-item.active{
  background: #2b6df5;
  color: #fff;
}
.grid{
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-bottom: 12px;
}
.card{
  border-radius: 16px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  color: #fff;
}
.card-title{
  width: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 28px;
  background: rgba(0,0,0,0.25);
}
</style>
