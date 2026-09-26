console.log("main.js 読み込み成功");
// js/main.js
new Splide('.splide').mount();

new Splide('.splide', {
  type: 'loop',      // 'loop': 無限ループ / 'fade': フェード切り替え
  perPage: 1,        // 一度に表示するスライド数
  gap: '1rem',       // スライド間の隙間
  autoplay: true,    // 自動再生
  interval: 3000,    // 自動再生の間隔（ミリ秒）
}).mount();