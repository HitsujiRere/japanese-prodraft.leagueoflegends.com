(function () {
  const urlSearchParams = new URLSearchParams(window.location.search);

  if (urlSearchParams.has('draft')) {
    if (urlSearchParams.get('locale') === 'ja_JP') {
      const scriptElement = document.createElement('script');
      scriptElement.src = chrome.runtime.getURL('prodraft.js');
      document.body.appendChild(scriptElement);
    }
  }
})();
