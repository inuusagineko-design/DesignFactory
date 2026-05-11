// ========== モバイルメニュー ==========
document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('mobile-menu-toggle');
    var menu = document.getElementById('mobile-menu');
    var icon = document.getElementById('mobile-menu-icon');

    if (toggle && menu && icon) {
        toggle.addEventListener('click', function() {
            var isOpen = !menu.classList.contains('hidden');
            if (isOpen) {
                menu.classList.add('hidden');
                icon.textContent = 'menu';
            } else {
                menu.classList.remove('hidden');
                icon.textContent = 'close';
            }
        });
    }

    // ========== 現在ページに対応するナビをアクティブ化 ==========
    var path = window.location.pathname.replace(/\/index\.html$/, '/');
    var slug = '';
    var match = path.match(/^\/([^\/]+)\//);
    if (match) slug = match[1];

    document.querySelectorAll('a.nav-link').forEach(function(link) {
        if (link.dataset.slug === slug) {
            link.classList.remove('text-text-sub', 'hover:text-primary', 'font-medium');
            link.classList.add('text-primary', 'font-bold');
        }
    });

    // ========== コピーライト年 ==========
    var year = document.getElementById('copyright-year');
    if (year) year.textContent = new Date().getFullYear();
});
