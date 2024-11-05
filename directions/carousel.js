const images = document.querySelectorAll('.carousel-images img');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;

function updateCarousel() {
    images.forEach((img, index) => {
        img.style.display = (index === currentIndex) ? 'block' : 'none';
    });
    const offset = -currentIndex * 1; // 每张图片的宽度
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // 循环到下一张
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // 循环到上一张
    updateCarousel();
});

// 初始化轮播
updateCarousel();