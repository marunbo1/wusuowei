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
          :class="{ active: activeCategory === c.key, sticky: c.key === 'hot' }"
          @click="setCategory(c.key)"
        >
          <svg class="side-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path :d="iconPath(c.key)"></path>
          </svg>
          <div class="side-label">{{ c.label }}</div>
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
        { key: 'lottery', label: '彩票' },
        { key: 'texas', label: '德州' },
        { key: 'sports', label: '体育' },
        { key: 'esports', label: '电竞' }
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
      lottery: makeItems(['GO彩票','时时彩','11选5','快3','赛车','七星彩','福彩3D','快乐8','大乐透']),
      texas: makeItems(['德州扑克-新手场','德州扑克-常规局','德州扑克-锦标赛','短牌德州','德州SNG','无限注德州','底池限注德州','高级房','私人房']),
      sports: makeItems(['足球','篮球','网球','羽毛球','棒球','排球','台球','赛车','综合']),
      esports: makeItems(['英雄联盟','DOTA2','CS:GO','PUBG','王者荣耀','穿越火线','APEX 英雄','瓦罗兰特','守望先锋'])
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
    },
    iconPath(key) {
      const m = {
        hot: 'M12 2c2.5 3 4 5.5 4 8a4 4 0 1 1-8 0c0-2.5 1.5-5 4-8z',
        slot: 'M3 6h18v10H3z M6 9h3v3H6z M15 9h3v3h-3z',
        live: 'M4 4h16v12H4z M10 8l6 2-6 2z',
        fish: 'M3 12l5-3 4 3-4 3-5-3z M14 9c2 0 4 1.5 4 3s-2 3-4 3',
        chess: 'M8 7h8l-1 3h-6z M9 10h6v6H9z',
        lottery: 'M3 6h18v4a2 2 0 1 0 0 4v4H3z',
        texas: 'M6 6h6v8H6z M12 8h6v8h-6z',
        sports: 'M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0-18z',
        esports: 'M4 14l4-2h8l4 2-2 4H6z'
      }
      return m[key] || 'M12 12m-6,0a6,6 0 1,0 12,0a6,6 0 1,0 -12,0'
    }
  }
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  background: #f6f7fb;
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
  margin-top: 96px;
  height: calc(100vh - 96px - 56px);
  overflow: hidden;
  align-items: flex-start;
  min-height: 0;
}
.side{
  width: 76px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100vh - 96px - 56px);
  overflow-y: auto;
  min-height: 0;
  flex: 0 0 76px;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  touch-action: pan-y;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 80px;
  scroll-padding-bottom: 80px;
}
.side::-webkit-scrollbar{width:0;height:0}
.side-item{
  width: 76px;
  height: 320px;
  border-radius: 16px;
  background: #edf2ff;
  color: #2b6df5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 6px;
  font-size: 18px;
  cursor: pointer;
}
.side-item.active{
  background: #2b6df5;
  color: #fff;
}
.side-item.sticky{
  position: sticky;
  top: 0;
  z-index: 2;
}
.side-icon{
  width: 56px;
  height: 56px;
  display: block;
  margin: 0 auto;
  fill: currentColor;
}
.side-label{
  line-height: 1.1;
  width: 100%;
  text-align: center;
}
.grid{
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-row-gap: 100px;
  grid-column-gap: 12px;
  padding: 8px 8px 88px 8px;
  min-width: 0;
  min-height: 0;
  height: calc(100vh - 96px - 56px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  touch-action: pan-y;
  align-content: start;
  box-sizing: border-box;
}
.card{
  border-radius: 16px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  box-sizing: border-box;
  margin: 0;
}
.card-title{
  width: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 28px;
  background: rgba(0,0,0,0.25);
}
</style>
