// JavaScript for interactive toggles
document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
        const plan = button.closest('.plan');
        const featureList = plan.querySelector('ul');
        featureList.classList.toggle('expanded');
        button.textContent = featureList.classList.contains('expanded') ? 'Hide Features' : 'Toggle Features';
    });
});
