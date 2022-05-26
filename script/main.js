let elinput = document.querySelector('input[name="test"]');
elinput.addEventListener('change', (elinput) => {
    let text = elinput.target.value;
    let eldiv = document.querySelector('.test1');
    eldiv.innerHTML = text;
});