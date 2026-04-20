document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav-tab');
    const contents = document.querySelectorAll('.tab-content');
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    
    const loginModal = document.getElementById('loginModal');
    const detailModal = document.getElementById('detailModal');
    const closeBtns = document.querySelectorAll('.close-modal');

    // 1. Tab Navigation
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = tab.getAttribute('data-target');
            
            // Remove active classes
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Add active classes
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
            
            // Close mobile menu if open
            if(navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

    // 2. Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // 3. Login Modal Triggers (Targets both Desktop and Mobile buttons)
    document.getElementById('openLogin').onclick = () => loginModal.style.display = 'block';
    document.getElementById('openLoginMobile').onclick = () => {
        loginModal.style.display = 'block';
        navList.classList.remove('active'); // Close menu when modal opens
    };

    // 4. Property Detail Modal Trigger
    document.querySelectorAll('.detail-trigger').forEach(btn => {
        btn.onclick = () => {
            const card = btn.closest('.card');
            document.getElementById('detailImg').src = card.dataset.img;
            document.getElementById('detailTitle').innerText = card.dataset.title;
            document.getElementById('detailPrice').innerText = card.dataset.price;
            document.getElementById('detailDesc').innerText = card.dataset.desc;
            detailModal.style.display = 'block';
        };
    });

    // 5. Close Modals
    closeBtns.forEach(btn => {
        btn.onclick = () => {
            loginModal.style.display = 'none';
            detailModal.style.display = 'none';
        };
    });

    // 6. Close Modal on Outside Click
    window.onclick = (event) => {
        if (event.target == loginModal || event.target == detailModal) {
            loginModal.style.display = "none";
            detailModal.style.display = "none";
        }
    };
});
