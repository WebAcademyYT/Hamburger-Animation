let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    btn.classList.toggle('not_active');
})