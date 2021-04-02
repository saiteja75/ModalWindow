'use strict';
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
document.body.addEventListener('click', function(e) {
    let target = e.target;
    if (target.classList.contains('show-modal')) {
        model.classList.remove('hidden');
        overlay.classList.remove('hidden');
    } else if (target.classList.contains('close-modal') || target.classList.contains('overlay')) {
        model.classList.add('hidden');
        overlay.classList.add('hidden');
    }
});
document.body.addEventListener('keyup', function(e) {
    if (e.key == 'Escape' && !model.classList.contains('hidden')) {
        model.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})