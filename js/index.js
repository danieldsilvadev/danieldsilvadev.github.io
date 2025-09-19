const skills = document.querySelectorAll('.skill-card');

skills.forEach(skill => {
  const fill = skill.querySelector('.skill-fill');
  const percent = skill.getAttribute('data-percent');
  const percentText = skill.querySelector('.skill-percent');
  
  setTimeout(() => {
    fill.style.width = percent + '%';
    percentText.textContent = percent + '%';
  }, 200);
});
