const img = document.getElementById('menuIcon');

const manuSvg = 'menu.svg';
const closeSvg = 'close.svg';

// 初期画像を設定
img.src = manuSvg;

// クリックイベント
img.addEventListener('click', () => {
  img.src = img.src.endsWith(manuSvg) ? closeSvg : manuSvg;
});
