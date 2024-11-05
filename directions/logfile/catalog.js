document.querySelectorAll('.header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling; // 获取下一个兄弟元素(content)
        if (content.style.display === 'block') {
            content.style.display = 'none'; // 折叠内容
        } else {
            content.style.display = 'block'; // 展开内容
        }
    });
});