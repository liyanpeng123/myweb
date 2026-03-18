// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// 滚动时导航栏高亮
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// 灯箱功能
function openLightbox(src, type) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const video = document.getElementById('lightbox-video');
    const videoSrc = document.getElementById('lightbox-src');
    
    lightbox.classList.add('active');
    
    if (type === 'image') {
        img.style.display = 'block';
        video.style.display = 'none';
        img.src = src;
    } else {
        img.style.display = 'none';
        video.style.display = 'block';
        videoSrc.src = src;
        video.load();
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const video = document.getElementById('lightbox-video');
    lightbox.classList.remove('active');
    video.pause();
}
