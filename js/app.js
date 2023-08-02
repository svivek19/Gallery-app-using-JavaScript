const btnEl = document.querySelectorAll('.btn');
const imgEl = document.querySelectorAll('.store-item');

btnEl.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        const filter = e.target.dataset.filter

        imgEl.forEach((item) => {
            if (filter === 'all') {
                item.style.display = 'block';
            } else if (item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none'
            }

        })
    })
})