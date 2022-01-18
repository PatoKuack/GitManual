const dataTitle = Array.from(document.getElementsByTagName('dt'));
dataTitle.map(makeBolt => makeBolt.classList.add('negrita'));

const dtSpanes = Array.from(document.querySelectorAll('span'));
dtSpanes.map( colorea => colorea.style.color = ('gray'));

const imags = Array.from(document.getElementsByTagName('img'));
imags.map(makeSize => makeSize.classList.add('tamañito'));