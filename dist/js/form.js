document.querySelectorAll('.form-control').forEach(el => el.addEventListener('keydown', function(){
    this.classList.remove('init');
}));