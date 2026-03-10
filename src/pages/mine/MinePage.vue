<template>
  <div class="mine">
    <div class="scroll">
      <section class="hero">
        <div class="hero-top">
          <div class="avatar"></div>
          <div class="login-btn">立即登录</div>
        </div>
        <div class="vip-banner">登录查看VIP等级</div>
        <div class="quick-strip">
          <div class="q-item">
            <svg class="q-icon" viewBox="0 0 24 24"><path d="M12 2l2 6h6l-5 3 2 6-5-3-5 3 2-6-5-3h6z"/></svg>
            <div class="q-label">晋级礼金</div>
          </div>
          <div class="q-item">
            <svg class="q-icon" viewBox="0 0 24 24"><path d="M4 4h16v16H4z M7 8h10v2H7z M7 12h10v2H7z"/></svg>
            <div class="q-label">每月红包</div>
          </div>
          <div class="q-item">
            <svg class="q-icon" viewBox="0 0 24 24"><path d="M4 5h16v4H4zM4 11h16v8H4z"/></svg>
            <div class="q-label">每周红包</div>
          </div>
          <div class="q-item">
            <svg class="q-icon" viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7z"/></svg>
            <div class="q-label">独特活动</div>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="feat">
          <div class="feat-circle"><svg viewBox="0 0 24 24"><path d="M3 6h18v12H3z M6 9h3v3H6z M15 9h3v3h-3z"/></svg></div>
          <div class="feat-label">资金明细</div>
        </div>
        <div class="feat">
          <div class="feat-circle"><svg viewBox="0 0 24 24"><path d="M6 4h12v4H6z M4 10h16v10H4z"/></svg></div>
          <div class="feat-label">更多记录</div>
        </div>
        <div class="feat">
          <div class="feat-circle"><svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z M8 9h8v2H8z M8 13h5v2H8z"/></svg></div>
          <div class="feat-label">个人报表</div>
        </div>
        <div class="feat">
          <div class="feat-circle"><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7z"/></svg></div>
          <div class="feat-label">优惠活动</div>
        </div>
      </section>

      <section class="share-card">
        <div class="share-left">
          <div class="share-avatar">
            <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/><path d="M5 21a7 7 0 0 1 14 0z"/></svg>
            <span class="badge">高额返佣</span>
          </div>
          <div class="share-title">分享赚钱</div>
        </div>
        <div class="share-cta">去分享</div>
      </section>

      <section class="promo">
        <div class="promo-text">
          <div class="promo-title">新人福利中心领取更多优惠</div>
          <div class="promo-btn">领取福利</div>
        </div>
      </section>

      <section class="list">
        <a class="cell">
          <div class="cell-left">
            <svg class="cell-ic" viewBox="0 0 24 24"><path d="M6 4h12v4H6z M4 10h16v10H4z"/></svg>
            <span>新手教程</span>
          </div>
          <svg class="chev" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
        </a>
        <a class="cell">
          <div class="cell-left">
            <svg class="cell-ic" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z M11 10h2v6h-2z M11 7h2v2h-2z"/></svg>
            <span>关于我们</span>
          </div>
          <svg class="chev" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
export default { name: 'MinePage' }
</script>

<style scoped>
.mine{background:#f6f7fb}
.scroll{height:calc(100vh - 56px);overflow-y:auto}
.hero{
  background: linear-gradient(135deg,#3b5bdb,#845ef7);
  padding: 16px 16px 12px 16px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  color:#fff;
}
.hero-top{display:flex;align-items:center;justify-content:space-between}
.avatar{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.3)}
.login-btn{padding:6px 12px;background:#fff;color:#334155;border-radius:16px;font-size:12px}
.vip-banner{margin-top:12px;background:#fde4c3;color:#6b3f00;border-radius:16px;padding:8px 12px;font-size:12px;width:fit-content}
.quick-strip{
  margin-top:14px;
  background:#e9efff;
  border-radius:12px;
  padding:8px;
  display:grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap:8px;
}
.q-item{display:flex;flex-direction:column;align-items:center;gap:6px;color:#2b6df5}
.q-icon{width:20px;height:20px;fill:currentColor}
.q-label{font-size:12px;color:#2b6df5}
.features{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;padding:16px}
.feat{display:flex;flex-direction:column;align-items:center;gap:8px}
.feat-circle{width:56px;height:56px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.06)}
.feat-circle svg{width:28px;height:28px;fill:#2b6df5}
.feat-label{font-size:12px;color:#334155}
.share-card{margin:0 16px 12px 16px;background:#fff;border-radius:16px;padding:12px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 8px rgba(0,0,0,0.06)}
.share-left{display:flex;align-items:center;gap:12px}
.share-avatar{position:relative;width:44px;height:44px;border-radius:50%;background:#eef2ff;display:flex;align-items:center;justify-content:center}
.share-avatar svg{width:24px;height:24px;fill:#2b6df5}
.badge{position:absolute;top:-6px;right:-8px;background:#ff5c5c;color:#fff;font-size:10px;border-radius:12px;padding:2px 6px}
.share-title{color:#334155;font-size:14px}
.share-cta{color:#2b6df5;font-size:12px}
.promo{margin:0 16px 16px 16px;border-radius:16px;background:linear-gradient(135deg,#ff9a9e,#fad0c4);padding:12px}
.promo-text{display:flex;align-items:center;justify-content:space-between}
.promo-title{color:#4a1f1f;font-size:14px}
.promo-btn{background:#fff;color:#b91c1c;border-radius:14px;padding:6px 10px;font-size:12px}
.list{margin:0 8px 16px 8px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06)}
.cell{display:flex;align-items:center;justify-content:space-between;padding:14px 12px;text-decoration:none;color:#334155;border-top:1px solid #f1f3f5}
.cell:first-child{border-top:none}
.cell-left{display:flex;align-items:center;gap:10px}
.cell-ic{width:20px;height:20px;fill:#2b6df5}
.chev{width:18px;height:18px;fill:#94a3b8}
</style>
