/**
 * 图片轮播功能实现
 * @description 实现自动轮播和手动切换功能
 */
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    /**
     * 切换到指定的幻灯片
     * @param {number} index - 目标幻灯片的索引
     */
    function goToSlide(index) {
        if (index < 0) {
            currentSlide = slideCount - 1;
        } else if (index >= slideCount) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    /**
     * 切换到下一张幻灯片
     */
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    /**
     * 切换到上一张幻灯片
     */
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // 绑定按钮点击事件
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    // 自动轮播
    setInterval(nextSlide, 5000);
    
    // 触摸滑动支持
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
    });
    
    slider.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) {
            nextSlide();
        } else if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
    });
}); 