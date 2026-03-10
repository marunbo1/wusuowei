<template>
  <div class="earn">
    <div class="head">
      <div class="title">赚钱</div>
      <div class="contact">
        <svg viewBox="0 0 24 24"><path d="M4 4h16v14H4z M8 20h8"/></svg>
        <span>商务洽谈</span>
      </div>
    </div>
    <div class="scroll">
      <div class="banner">
        <div class="banner-text">限时招募代理 条件可谈</div>
        <div class="banner-dots"><i></i><i></i><i></i></div>
      </div>

      <section class="section">
        <div class="sec-title">
          <span class="bar"></span>
          <span>返水赚钱</span>
          <small>（每日更新一次）</small>
        </div>
        <div class="rebate-list">
          <div class="rebate" v-for="r in rebates" :key="r.key">
            <div class="rb-left">
              <div class="rb-ic" :style="{ background: r.bg }">
                <svg viewBox="0 0 24 24"><path :d="r.path"/></svg>
              </div>
              <div class="rb-text">
                <div class="rb-title">{{ r.title }}</div>
                <div class="rb-sub">{{ r.sub }}</div>
              </div>
            </div>
            <div class="rb-badge">
              <span>预计</span>
              <b>0</b>
            </div>
          </div>
        </div>
        <div class="rule">
          包含赚下级抽水
          <a class="link">返水规则</a>
        </div>
      </section>

      <section class="section">
        <div class="sec-title">
          <span class="bar"></span>
          <span>推广链接</span>
        </div>
        <div class="link-card">
          <div class="link-left">
            <svg class="chain" viewBox="0 0 24 24"><path d="M7 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 0 0 0 6h3v2h-3a5 5 0 0 1-5-5zm5-3h5a5 5 0 0 1 0 10h-5v-2h5a3 3 0 0 0 0-6h-5V9z"/></svg>
            <span>普通链接</span>
          </div>
          <div class="link-actions">
            <button class="ghost">复制链接</button>
            <button class="primary">分享图片</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EarnPage',
  data() {
    return {
      rebates: [
        {
          key: 'day',
          title: '每日返水',
          sub: '次日8点自动发放',
          bg: 'linear-gradient(135deg,#dbeafe,#bfdbfe)',
          path: 'M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z M11 7h2v6h-2z M11 15h2v2h-2z'
        },
        {
          key: 'week',
          title: '每周返水',
          sub: '周一8点自动发放',
          bg: 'linear-gradient(135deg,#fef3c7,#fde68a)',
          path: 'M4 4h16v12H4z M7 7h3v6H7z M14 7h3v6h-3z'
        },
        {
          key: 'month',
          title: '每月返水',
          sub: '一号8点自动发放',
          bg: 'linear-gradient(135deg,#fde2e2,#fecaca)',
          path: 'M6 4h12v4H6z M4 9h16v9H4z'
        }
      ]
    }
  }
}
</script>

<style scoped>
.earn{background:#f6f7fb}
.head{
  height:72px;
  background:linear-gradient(135deg,#3b5bdb,#845ef7);
  color:#fff;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 12px;
  border-bottom-left-radius:16px;border-bottom-right-radius:16px;
}
.title{font-size:18px;font-weight:700}
.contact{display:flex;align-items:center;gap:6px;font-size:12px;opacity:.95}
.contact svg{width:18px;height:18px;fill:#fff}
.scroll{height:calc(100vh - 72px - 56px);overflow-y:auto;padding-bottom:12px}
.banner{
  margin:12px; padding:14px 16px; border-radius:16px;
  background:linear-gradient(135deg,#38bdf8,#3b82f6);
  color:#fff; display:flex; align-items:center; justify-content:space-between;
}
.banner-text{font-size:14px;font-weight:600}
.banner-dots i{display:inline-block;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.8);margin-left:6px}
.section{margin:10px 12px}
.sec-title{display:flex;align-items:center;gap:8px;margin-bottom:8px;color:#334155}
.sec-title .bar{display:inline-block;width:3px;height:16px;background:#2b6df5;border-radius:2px}
.sec-title small{color:#64748b;font-size:12px}
.rebate-list{display:flex;flex-direction:column;gap:10px}
.rebate{
  display:flex;align-items:center;justify-content:space-between;
  background:#fff;border:1px solid #e6ecff;border-radius:14px;
  padding:10px 12px;box-shadow:0 2px 8px rgba(0,0,0,.04);
}
.rb-left{display:flex;align-items:center;gap:10px}
.rb-ic{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center}
.rb-ic svg{width:24px;height:24px;fill:#1e293b}
.rb-title{color:#1f2937;font-weight:700}
.rb-sub{color:#64748b;font-size:12px}
.rb-badge{display:flex;align-items:center;gap:6px;background:#ffe4e6;color:#ef4444;border-radius:14px;padding:4px 8px}
.rb-badge b{font-weight:800}
.rule{margin-top:6px;color:#64748b;font-size:12px}
.rule .link{color:#2b6df5;margin-left:6px}
.link-card{background:#fff;border-radius:16px;border:1px solid #e6ecff;padding:12px 12px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.link-left{display:flex;align-items:center;gap:10px;color:#334155}
.chain{width:24px;height:24px;fill:#2b6df5}
.link-actions{display:flex;align-items:center;gap:8px}
.ghost{border:1px solid #c7d2fe;background:#eef2ff;color:#2b6df5;border-radius:16px;padding:6px 10px;font-size:12px}
.primary{border:1px solid #2b6df5;background:#2b6df5;color:#fff;border-radius:16px;padding:6px 10px;font-size:12px}
</style>
