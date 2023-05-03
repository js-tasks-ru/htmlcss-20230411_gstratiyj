const modal = document.getElementById('modal');
const modalOpenBtn = document.getElementById('modal-open');
const modalBack = document.getElementById('modal__view');

function openModal() {
    modal.style.display = 'block';
    modalBack.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    modalBack.style.display = 'none';
}

modalOpenBtn.addEventListener('click', openModal);

const modalCloseBtn = document.getElementById('modal__close');
modalCloseBtn.addEventListener('click', closeModal);