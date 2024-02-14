var idRefer = $_GET('refer');

if (window.location.search !== '') {
  if ($_GET('refer') !== false) {
    a_href += '/refer/' + idRefer;
  } else {
    a_href += '&' + extractGetParameters(window.location.search);
  }
}

function extractGetParameters(queryParams) {
  return queryParams.slice(1);
}

function $_GET(key) {
  var p = window.location.search;
  p = p.match(new RegExp(key + '=([^&=]+)'));
  return p ? p[1] : false;
}

document.querySelectorAll('a').forEach(function (item) {
  if (!item.className.includes('not-change')) {
    item.setAttribute('href', a_href);
  }
});