const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
global.window = {};
require(path.join(root, 'content/catalogo.js'));
require(path.join(root, 'content/blog.js'));

const errors = [];
const products = window.SITE?.pecas || [];
const posts = window.BLOG?.posts || [];

function checkUnique(items, getId, label) {
  const seen = new Set();
  items.forEach((item, index) => {
    const id = getId(item);
    if (!id) {
      errors.push(`${label} ${index + 1}: identificador ausente.`);
    } else if (seen.has(id)) {
      errors.push(`${label} ${index + 1}: identificador repetido: ${id}.`);
    } else {
      seen.add(id);
    }
  });
}

function checkMedia(source, label) {
  if (!source) return;
  if (/^https:\/\//i.test(source)) {
    try {
      const url = new URL(source);
      if (!url.hostname || url.username || url.password) throw new Error('Invalid public URL');
    } catch {
      errors.push(`${label}: informe uma URL HTTPS pública válida.`);
    }
    return;
  }
  if (/^[a-z]+:\/\//i.test(source) || source.startsWith('//')) {
    errors.push(`${label}: use uma URL HTTPS pública.`);
    return;
  }
  if (!source.startsWith('images/')) {
    errors.push(`${label}: use um caminho images/... ou uma URL HTTPS.`);
    return;
  }
  const imagesRoot = path.resolve(root, 'images');
  const mediaPath = path.resolve(root, source);
  const relativePath = path.relative(imagesRoot, mediaPath);
  if (relativePath === '..' || relativePath.startsWith(`..${path.sep}`) || path.isAbsolute(relativePath)) {
    errors.push(`${label}: o caminho precisa permanecer dentro de images/.`);
    return;
  }
  if (!fs.existsSync(mediaPath) || !fs.statSync(mediaPath).isFile()) {
    errors.push(`${label}: arquivo local não encontrado: ${source}`);
  }
}

function findMedia(value, label) {
  if (typeof value === 'string') {
    const source = value.startsWith('@ ')
      ? value.slice(2).split('|')[0].trim()
      : value;
    if (source.startsWith('images/') || /^[a-z]+:\/\//i.test(source)) {
      checkMedia(source, label);
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => findMedia(item, `${label} ${index + 1}`));
    return;
  }
  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, item]) => findMedia(item, `${label}.${key}`));
  }
}

checkUnique(products, product => product.codigo, 'Peça');
checkUnique(posts, post => post.slug, 'Artigo');
findMedia(window.SITE?.imagens, 'Imagens do site');
findMedia(products, 'Catálogo');
findMedia(window.SITE?.editorial, 'Editorial');
findMedia(window.SITE?.atelie?.itens, 'Ateliê');
findMedia(posts, 'Blog');

if (errors.length) {
  console.error(errors.map(error => `ERRO: ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Conteúdo OK: ${products.length} peça(s), ${posts.length} artigo(s); IDs únicos e caminhos locais válidos.`);
}