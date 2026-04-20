document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav-tab');
    const contents = document.querySelectorAll('.tab-content');
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    
    const loginModal = document.getElementById('loginModal');
    const openLogin = document.getElementById('openLogin');
    const detailModal = document.getElementById('detailModal');
    const closeBtns = document.querySelectorAll('.close-modal');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = tab.getAttribute('data-target');
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.querySelector('i').classList.replace('bx-x', 'bx-menu');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.contains('bx-menu') ? icon.classList.replace('bx-menu', 'bx-x') : icon.classList.replace('bx-x', 'bx-menu');
    });

    openLogin.onclick = () => loginModal.style.display = 'block';
    
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
    });

    document.querySelectorAll('.detail-trigger').forEach(btn => {
        btn.onclick = () => {
            const card = btn.closest('.card');
            document.getElementById('detailImg').src = card.dataset.img;
            document.getElementById('detailTitle').innerText = card.dataset.title;
            document.getElementById('detailLoc').innerText = `📍 ${card.dataset.loc}`;
            document.getElementById('detailPrice').innerText = card.dataset.price;
            document.getElementById('detailDesc').innerText = card.dataset.desc;
            detailModal.style.display = 'block';
        };
    });

    closeBtns.forEach(btn => {
        btn.onclick = () => {
            loginModal.style.display = 'none';
            detailModal.style.display = 'none';
        };
    });

    window.onclick = (e) => {
        if (e.target == loginModal || e.target == detailModal) {
            loginModal.style.display = 'none';
            detailModal.style.display = 'none';
        }
    };

    document.getElementById('homeSearch').addEventListener('click', () => {
        const city = document.querySelector('select').value;
        alert(`Searching for properties in ${city}...`);
        tabs[1].click();
    });
});