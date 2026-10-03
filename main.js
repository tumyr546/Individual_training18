const title = document.createElement('h1');
const img = document.createElement('img');
const link = document.createElement('a');

title.textContent = 'Привіт';
title.style.color = 'dark';
title.style.padding = '24px';

img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJyJDfSfgEHE_dEMN00VDDFv2UsvaHCohwP53nMdl1fQ&s=10';
img.alt = 'Приклад зображення';

link.href = 'https://www.google.com';
link.textContent = 'Перейти на Google';
link.target = '_blank'; 

const container = document.querySelector('.container');
container.append(title, img, link);