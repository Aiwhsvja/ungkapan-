const tombolCinta = document.getElementById('tombol-cinta');
const pesanCinta = document.getElementById('pesan-cinta');

tombolCinta.addEventListener('click', () => {
    pesanCinta.textContent = 'Aku cinta kamu!';
    setTimeout(() => {
        pesanCinta.textContent = '';
    }, 3000);
});