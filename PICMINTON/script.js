// script.js

let currentImageIndex = 0;
const images = document.querySelectorAll('.header-img');
const totalImages = images.length;

function changeImage() {
  // 現在表示されている画像を非表示に
  images[currentImageIndex].classList.remove('show');

  // 次の画像のインデックスを計算
  currentImageIndex = (currentImageIndex + 1) % totalImages;

  // 新しい画像を表示
  images[currentImageIndex].classList.add('show');
}

// 最初の画像を表示
images[currentImageIndex].classList.add('show');

// 3秒ごとに画像を切り替え
setInterval(changeImage, 3000);
document.querySelectorAll('nav ul li a').forEach(tab => {
    tab.addEventListener('click', function(event) {
        // すべてのタブから 'active' クラスを削除
        document.querySelectorAll('nav ul li a').forEach(tab => tab.classList.remove('active'));

        // クリックされたタブに 'active' クラスを追加
        event.target.classList.add('active');
    });
});

