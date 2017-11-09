const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../hosted/404.html`);
const css = fs.readFileSync(`${__dirname}/../hosted/style.css`);
const bundle = fs.readFileSync(`${__dirname}/../hosted/es5Scripts.js`);
const a1 = fs.readFileSync(`${__dirname}/../hosted/A/A1.html`);
const a2 = fs.readFileSync(`${__dirname}/../hosted/A/A2.html`);
const a3 = fs.readFileSync(`${__dirname}/../hosted/A/A3.html`);
const a4 = fs.readFileSync(`${__dirname}/../hosted/A/A4.html`);
const a5 = fs.readFileSync(`${__dirname}/../hosted/A/A5.html`);
const a6 = fs.readFileSync(`${__dirname}/../hosted/A/A6.html`);
const a7 = fs.readFileSync(`${__dirname}/../hosted/A/A7.html`);
const a8 = fs.readFileSync(`${__dirname}/../hosted/A/A8.html`);
const d1 = fs.readFileSync(`${__dirname}/../hosted/D/D1.html`);
const d2 = fs.readFileSync(`${__dirname}/../hosted/D/D2.html`);
const d3 = fs.readFileSync(`${__dirname}/../hosted/D/D3.html`);
const h1 = fs.readFileSync(`${__dirname}/../hosted/H/H1.html`);
const h2 = fs.readFileSync(`${__dirname}/../hosted/H/H2.html`);
const p1 = fs.readFileSync(`${__dirname}/../hosted/P/P1.html`);
const p2 = fs.readFileSync(`${__dirname}/../hosted/P/P2.html`);
const p3 = fs.readFileSync(`${__dirname}/../hosted/P/P3.html`);
const p4 = fs.readFileSync(`${__dirname}/../hosted/P/P4.html`);
const p5 = fs.readFileSync(`${__dirname}/../hosted/P/P5.html`);


const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getA1 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(a1);
  response.end();
};

const getA2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(a2);
  response.end();
};

const getA3 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(a3);
  response.end();
};

const getA4 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(a4);
  response.end();
};

const getA5 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(a5);
  response.end();
};

const getA6 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(a6);
  response.end();
};

const getA7 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(a7);
  response.end();
};

const getA8 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(a8);
  response.end();
};

const getD1 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(d1);
  response.end();
};

const getD2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(d2);
  response.end();
};

const getD3 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(d3);
  response.end();
};

const getH1 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(h1);
  response.end();
};

const getH2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(h2);
  response.end();
};

const getP1 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(p1);
  response.end();
};

const getP2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(p2);
  response.end();
};

const getP3 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(p3);
  response.end();
};

const getP4 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(p4);
  response.end();
};

const getP5 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(p5);
  response.end();
};

// return the CSS file
const getCSS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(css);
  response.end();
};

// return our bundled js
const getBundle = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/javascript' });
  response.write(bundle);
  response.end();
};


module.exports = {
  getIndex,
  getCSS,
  getBundle,
  getA1,
  getA2,
  getA3,
  getA4,
  getA5,
  getA6,
  getA7,
  getA8,
  getD1,
  getD2,
  getD3,
  getH1,
  getH2,
  getP1,
  getP2,
  getP3,
  getP4,
  getP5,
};
