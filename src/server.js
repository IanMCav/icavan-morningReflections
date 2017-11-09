const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// deal with GET requests
const handleGet = (request, response, parsedUrl) => {
  console.log(parsedUrl.pathname);
  const res = response;

  if (parsedUrl.pathname.includes('/style.css')) {
    htmlHandler.getCSS(request, response);
  } else if (parsedUrl.pathname.includes('/es5Scripts.js')) {
    htmlHandler.getBundle(request, response);  
  } else if (parsedUrl.pathname === '/A/A1.html') {
    htmlHandler.getA1(request, response);
  } else if (parsedUrl.pathname === '/A/A2.html') {
    htmlHandler.getA2(request, response);
  } else if (parsedUrl.pathname === '/A/A3.html') {
    htmlHandler.getA3(request, response);
  } else if (parsedUrl.pathname === '/A/A4.html') {
    htmlHandler.getA4(request, response);
  } else if (parsedUrl.pathname === '/A/A5.html') {
    htmlHandler.getA5(request, response);
  } else if (parsedUrl.pathname === '/A/A6.html') {
    htmlHandler.getA6(request, response);
  } else if (parsedUrl.pathname === '/A/A7.html') {
    htmlHandler.getA7(request, response);
  } else if (parsedUrl.pathname === '/A/A8.html') {
    htmlHandler.getA8(request, response);
  } else if (parsedUrl.pathname === '/D/D1.html') {
    htmlHandler.getD1(request, response);
  } else if (parsedUrl.pathname === '/D/D2.html') {
    htmlHandler.getD2(request, response);
  } else if (parsedUrl.pathname === '/D/D3.html') {
    htmlHandler.getD3(request, response);
  } else if (parsedUrl.pathname === '/H/H1.html') {
    htmlHandler.getH1(request, response);
  } else if (parsedUrl.pathname === '/H/H2.html') {
    htmlHandler.getH2(request, response);
  } else if (parsedUrl.pathname === '/P/P1.html') {
    htmlHandler.getP1(request, response);
  } else if (parsedUrl.pathname === '/P/P2.html') {
    htmlHandler.getP2(request, response);
  } else if (parsedUrl.pathname === '/P/P3.html') {
    htmlHandler.getP3(request, response);
  } else if (parsedUrl.pathname === '/P/P4.html') {
    htmlHandler.getP4(request, response);
  } else if (parsedUrl.pathname === '/P/P5.html') {
    htmlHandler.getP5(request, response);
  } else if (parsedUrl.pathname.includes('/favicon.ico')) {
  } else {
    htmlHandler.getIndex(request, response);
  }
};

// figure out what kind of request we're dealing with
const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  handleGet(request, response, parsedUrl);
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
