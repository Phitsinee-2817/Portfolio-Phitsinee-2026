document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const carousels = document.querySelectorAll('.carousel');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // สลับ class 'active' บนปุ่มกด
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-img');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        let currentIndex = 0;

        // ฟังก์ชันสลับรูปภาพ
        const showImage = (index) => {
            images.forEach((img, i) => {
                img.classList.remove('active');
                if (i === index) {
                    img.classList.add('active');
                }
            });
        };

        // ปุ่มย้อนกลับ
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault(); // ป้องกันหน้าเว็บกระตุก
                // ถ้ารูปปัจจุบันคือรูปแรก ให้วนไปรูปสุดท้าย ถอยหลังไปเรื่อยๆ
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
                showImage(currentIndex);
            });
        }

        // ปุ่มถัดไป
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                // ถ้ารูปปัจจุบันคือรูปสุดท้าย ให้วนกลับมารูปแรก
                currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                showImage(currentIndex);
            });
        }
    });
});