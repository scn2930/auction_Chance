document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const pages = document.querySelectorAll('.page');

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // 모든 페이지 숨기기
            pages.forEach(page => page.classList.remove('active'));

            // 해당 페이지 보여주기
            const target = document.querySelector(`#${link.dataset.tab}`);
            target.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.toggle-icon');

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('active');
            icon.classList.toggle('inactive');
        });
    });
});


